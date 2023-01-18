
let menuvar = document.getElementById('menuvar');
let menuvarOffset = menuvar.offsetTop; //offset : navbar가 부모인 body 상단에서부터 떨어진 거리
window.addEventListener("scroll", function(){

    if(window.pageYOffset >= menuvarOffset) {
        menuvar.classList.add('sticky'); 
    }else {
        menuvar.classList.remove('sticky');
        
    }

})


$(document).ready(function () {
    $("#receiptOption input").click(function () {
        for (let i = 0; i < $("[name='option']").length; i++) {
            if ($(this).val() == $("[name='option']").eq(i).val()) {
                $("form").eq(i).show();
                $('.jejuimg img').animate({
                height: '350px', 
                width: '350px',})
            } else {
                $("form").eq(i).hide();
            }
        }
    })

})


let tree = document.getElementById('tree');
let bluesea = document.getElementById('bluesea');
let sunset = document.getElementById('sunset');
let treetext = document.getElementById('treetext')


tree.addEventListener("mouseover", function(){
    document.getElementById('treetext').innerHTML = `
    <h6>우도</h6>
    <i class="fa-solid fa-arrow-right"></i>
    제주특별자치도 제주시 우도면에 있는 섬.
    섬의 형상이 물소가 머리를 내밀고 누워 있다고 하여 소섬 또는 이를 한자화한 우도라고 불린다.
    `
})

bluesea.addEventListener("mouseover", function(){
    document.getElementById('treetext').innerHTML = `
    <h6>애월</h6>
    <i class="fa-solid fa-arrow-right"></i>
    제주특별자치도 제주시에 있는 읍.
    한자어로 涯(물가 애) 月(달 월), 물가의 달이라는 뜻이다.
    `
})


sunset.addEventListener("mouseover", function(){
    document.getElementById('treetext').innerHTML = `
    <h6>서귀포</h6>
    <i class="fa-solid fa-arrow-right"></i>
    제주특별자치도 남부에 위치한 행정시.
    서귀포라는 이름은 서시과차지포(西市過此之浦) 
    즉, 서시가 이곳을 지나간 포구라는 뜻으로 서쪽으로 돌아갔다는 뜻으로 서귀포라고 한다.
    `
})


var threeimg = document.getElementsByClassName('threeimg');

for(e of threeimg) {
    e.addEventListener("click", function(){
        window.open("#");
    })
}



