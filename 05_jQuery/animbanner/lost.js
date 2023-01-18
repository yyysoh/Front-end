(function(){; //정의하자마자 호출은 가능 function(){};는 안됨 페이지 로딩되자마자 실행된단 것
    //바다
    let $waterFront = $('#water-front');
    let $waterBack = $('#water-back');

    (function loopSea() {   //이름 있는 함수 바로 호출하게 하기
        $waterFront
            .animate({'bottom': '-65px', 'left': '-30px'}, 500) //총 1초 나옴 하나의 element는 줄 서 있음
            .animate({'bottom': '-60px', 'left': '-25px'}, 500);
        
        $waterBack
            .animate({'bottom': '15px', 'left': '-20px'}, 500)
            .animate({'bottom': '10px', 'left': '-25px'}, 500);

        $.when($waterBack, $waterFront).done(loopSea); //함수 만들고 호출하기!! 저 두 개의 애니메이션이 끝나면 다시 호출!
        //무한루프, 재귀호출 아니다!!! 부하가 많이 걸리는 애들임
    })();

})();


//구름 
//두 개의 그룹이 움직이는 것이다
(function loopCloud(){
let $cloud1 = $("#cloud-group-1")
let $cloud2 = $("#cloud-group-2")

$cloud1 //움직였다가 바로 원위치해야한다
    .animate({'left': '-720px'}, 10000, "linear")
    .animate({'left': '0px'}, 0); //0초만에 돌아온다
    //천천히->빨라짐->천천한 속도로 감 등속도 운동 하지 않음 딱딱해보이지 않게 하기 위해
    //그걸 안하기 위해 linear
    // easing 값 : "swing", "linear"
    // https://api.jquery.com/animate/#easing
 
 
$cloud2 //움직였다가 바로 원위치해야한다
.animate({'left': '0px'}, 10000, "linear")
.animate({'left': '720px'}, 0, loopCloud); //무한 반복! 함수 만든 것 넣기
})();


//배는 한번 딱 들어오고 둥실둥실을 여러번. 물음표 딱 한번 들어옴
//이미지 딱 만들고 들어오게 하는 건 js에서. 
let $boat = $('#boat');
let $questionMark = $('#question-mark');

let $title1 = $("#title1");
let $title2 = $("#title2");
let $form = $("#form");

//물음표는 처음에 투명한 상태여야 한다 
$boat.css({'left': '-220px'}); //화면 왼쪽 바깥에서 시작
$questionMark.css({'opacity': 0}); //물음표는 최초에 투명
$title1.css({'opacity': 0});
$title2.css({'opacity': 0});
$form.css({'left': '370px'}) //이거 헷갈려!! 이거 left하는 기준이 div 오른쪽이 기준? 다시 듣기 14:45



//순서대로 되어 있어서 유지보수성이 너무 안좋음 중간에 코드 삽입 등을 하려면 너무 복잡해지고 더러워짐
//이러는 이유는 callback 함수 때문(애니메이션 끝나면 실행하는 함수로 인해서) <- callback hell 발생한다
//javascript는 callback 함수 많이 쓰니까 (비동기 방식, non-block) 이런 문제 많이 발생함
//단점 : 코드의 가독성, 유지보수성 악화, 

//방법1 : animate() + callback
//2초동안 우악 들어옴 한번만 진행하고 끝//보트가 등장하면 위아래로 두둥실 무한히 반복해야 함

/*

$boat.animate({'left': '20px'}, 2000, function() {  //여기는 boat 등장!
    loopBoat(); //배 등장하면 이 함수 실행함 //이 함수는 boat 두둥실!
    $questionMark.delay(500).animate({'opacity': 1}, 1000, function() { //물음표가 뜨는데 delay 걸리게 함 0.5초 뒤 //questionMark 등장 코드
        $title1.animate({'opacity': 1}, 1000, function() { //$title1 등장
            $title2.animate({'opacity': 1}, 1000, function(){ //순차적으로 등장! $title2 등장
                $form.animate({'left': 0}, 500); //$form 등장
            }); //end $title2
        }); //end $title1
    }); //end $questionMark
 }); //end $boat 보트 애니메이션 끝나는 코드 -> 그 다음에 타이틀 나와야지(,function()) 콜백함수!

*/



//방법2 : .when() .then() .. 사용
//when()은 promise 객체를 리턴. 예정된 걸 약속함
//when에 여러 매개변수 넣는 걸 Thenable object 라고 부른다?
//지금은 매개변수 하나에 하나의 애니메이션만 씀

/*

$.when($boat.animate({'left': '20px'}, 2000))
 .then(function(){ //애니메이션 끝나면 실행되는 걸 then에 넣어주기
    loopBoat();
    return $.when($questionMark.delay(500).animate({'opacity': 1}, 1000)) //promise 객체로 감싸고 리턴함
 })
.then(function(){ //그러면 then 사용 가능
    return $.when($title1.animate({'opacity': 1}, 1000))
}) 
.then(function(){
    return $.when($title2.animate({'opacity': 1}, 1000))
})
.then(function(){
    return $.when($form.animate({'left': 0}, 500))
}) //애니메이션 순서대로 나열됨 중간에 빼도, 순서를 바꿔도 잘 동작함 엮여있지 않음

*/



//방법3 : '단일 object' 애니메이션의 경우 promise만으로도 가능
//즉 이 경우는 $.when()을 사용하지 않아도 된다
//15:25!!!!!!!!!! promise가 되는 이유

        // .then(), .done() 차이
        // done(func) : 성공 시 콜백함수 지정
        // then(success, fail) : 성공 시와 실패 시의 콜백함수 지정
        // 참조 : https://api.jquery.com/jQuery.when/

$boat.animate({'left': '20px'}, 2000).promise() //promise 넣으면 곧바로 리턴 그럼 뒤에 then 붙일 수 있음 음.. when이 promise를 리턴하는데.. 무슨 말 then 대신 done 넣어도 실행됨
 .then(function(){ //애니메이션 끝나면 실행되는 걸 then에 넣어주기
    loopBoat();
    return $questionMark.delay(500).animate({'opacity': 1}, 1000).promise() //promise 객체로 감싸고 리턴함
 })
.then(function(){ //그러면 then 사용 가능
    return $title1.animate({'opacity': 1}, 1000).promise()
}) 
.then(function(){
    return $title2.animate({'opacity': 1}, 1000).promise()
})
.then(function(){
    return $form.animate({'left': 0}, 500).promise()
}) //애니메이션 순서대로 나열됨 중간에 빼도, 순서를 바꿔도 잘 동작함 엮여있지 않음


function loopBoat() { //무한히 두둥실하게 함수 넣고 호출함
    $boat
        .animate({'bottom': '15px'}, 500)
        .animate({'bottom': '25px'}, 500 ,loopBoat); //종료하면 loopBoat 또 실행

}

//보트 등장하고 타이틀 등장해야 함 둘이 연동되어야 함 
//보트 & 타이틀 & 폼