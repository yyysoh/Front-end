/*
    object

    property : value 쌍으로 구성된 데이터

    {property:value, property:value, ...}

    property 는 중복될수 없다.
    value 는 어떠한 타입도 될수 있다.
        : number, string, array, function, object..

    사실 JavaScript 의 모든 데이터의 실체는 object 이다.
    
    ※일반적으로  object 변수는 는 const 로 선언한다
    그러나 이번단원에서 진도 편의상 let 등을 사용하기도 하겠습니다
 */

let obj1, obj2, obj3, result;


const car = {type : "Fiat", model : "500", color : "white"};

console.log(car);
console.log(car.toString()); //[object Object] 이렇게 나옴 이상해~
console.log(typeof car);

console.log("제 자동차는 " + car); //toString 값이 나온다 문자 연결 연산, 템플릿 리터럴(+로 되기에) 시엔 toString 
console.log(`제 자동차는 ${car}`); //[object Object]
console.log("제 자동차는 " , car); //제 자동차는  { type: 'Fiat', model: '500', color: 'white' }

//empty object 휴지는 걸려있지만 다 쓴 상태
obj1 = {}; //
console.log(obj1);



 
/* object 의 property 사용하기
    방법1 : objectName.propertyName
    방법2 : objectName["propertyName"] 
*/



console.log('-'.repeat(20));
console.log('[object 의 property]');

const person = {
    firstName: "John", //단어와 : 붙이고 그 다음은 한 칸 띄고 -> 가독성
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
};

console.log(person.firstName);
console.log(person['firstName']); //[firstName] 이렇게 쓰면 에러

console.log(typeof person.firstName); //담고 있는 값의 타입
console.log(person.age);

let key = 'age'; //property를 문자열로 준비되었다면 아래와 같이 접근 가능
console.log(person[key]);

let a = 'firstName', b = 'age';
console.log(`${person[a]} is ${person[b]} years old`);


//없는 property를 접근하면? undefined 나옴
console.log(person.address);


//property 값 변경하기
console.log(person);
person.firstName = "Jane";
console.log('변경 후', person);

// person 을 const 로 선언 했는데 property 변경 가능?  
// person 을 바꾸지 못한다는 거지 person 의 proeprty 를 변경 못한다는 게 아니다
//person = {name: 'hello'};   <-- person 값 자체를 변경하려 하면 이게 에러다!


//property 추가하기
person.email = 'Jane@mail.com';
console.log('추가 후', person);




// property 삭제하기  delete 연산자
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/delete
 
 
delete(person.email);
console.log('삭제 후', person)



//property는 중복될 수 없다
obj1 = {
        score : 100,
        'score' : 200, //마지막 값으로 들어간다. property는 문자열로 해도 상관 없다
        'score' : 300,
        Score : 400, //property name은 대소문자 구분
    };
    
    console.log(obj1);


//value는 어떠한 타입도 가능하다
console.log('-'.repeat(20));
console.log('[object 의 value]');

obj2 = {
    name: 'John',
    age: 34,
    height: 172.3,
    married: false,
    score: [100, 97, 33],
    family: {
        spouser: 'Jane',
        children: ['Clark', 'Steve', 'Charlie'],
    },
};

console.log(obj2);
console.log(obj2.name); //John
console.log(obj2.age); //34
console.log(obj2.married); //false
console.log(obj2.family.spouser);
console.log(obj2.family.children[1]); //'steve'
console.log(obj2['family']['children'][1]);
console.log(obj2.score[0]); //100





/****************************************************
 *  object method 와 this
 * object 의 value 는 어떠한 타입도 가능하다
 * 즉, 함수도 object 의 property value 로 가능하다
 * object 의 property 함수를 메소드(method) 라 부른다.
 * object 안에서 this 는 '자기자신객체', 즉, 해당 object 가 참조(혹은 바인딩) 된 객체를 말한다
 */



console.log('-'.repeat(20));
console.log('[object method 와 this]');

obj2 = {
    firstName: "John",
    lastName: 'Doe',
    id : 5566,

    fullName: function(){
        // return "Hello";
        return `${this.id} ${this.firstName} ${this.lastName}`;
    },
};

//this는 어떤 object를 참조. 이 this는 obj2를 참조
//obj2의 id, firstName, lastName인 것. 꼭 써야함

console.log(obj2.fullName());



// JavaScript 에서 this 는 '특정 object' 를 참조하게 되어 있다.
// '어떤 object 를 참조?' 하나는 this 가 사용(호출) 는 시점마다 '다르다'.
// (JS  위 this 가 다른 언어의 this에 비해 직관적으로 이해하기 어려운면이 있습니다)
// 이후 진도 나가면서 this가 등장할때마다 this가 무엇을 참조하는지 눈여겨 봅시다. 
// 참고: https://www.w3schools.com/js/js_this.asp


//-----------------------------------------------

//for문 사용해서 만들어보기!

console.log();

let x = {

    name: "Kim",
    age: 34, 
    height: 172.3,
    score: [94, 35, 79], //3과목 성적

    // 도전
    getTotal: function() {

        let sum = this.score[0] + this.score[1] + this.score[2];
        return sum;
    },


    getAvg: function() {

        
        //avg = (this.score[0] + this.score[1] + this.score[2]) / 3;
        return this.getTotal() / this.score.length;
     
    },



};

console.log(x.getTotal()); //총점
console.log(x.getAvg().toFixed(1)); //평균 출력



//------------------------------

//배열도 어떠한 타입의 원소 가능!

x = [
    "Kim", 34, 172.3,
    {kor: 94, eng: 35, math: 79},   // 3과목 점수
    [
        {
            address: "서울",
            year: 1998,
        },
        {
            address: "부산",
            year: 2012,
        },
    ],
    function() {
        return 'Hello';
    },


    function() {
        return this[3].kor + this[3].eng + this[3].math; //안에서 x를 사용하면 없는 애
    },

    function() {
        return this[6]() / 3;

    }
  
],


//x의 원소의 개수는 몇 개? 5개

console.log('-'.repeat(20));
console.log(x.length);
console.log(x[0]);
console.log(x[1]);
console.log(x[2]);
console.log(x[3].kor);
console.log(x[4][0].year);
console.log(x[5]()); //함수 호출

console.log(x[6]()); //총점
console.log(x[7]().toFixed(2)); //평균
//시점 호출하는 부분에서 x 사용 그 때 저 코드로 들어가니까 이 때 this가 x로 치환이 된다-바인딩이라고 한다

console.log("\n[프로그램 종료]", '\n'.repeat(10));






























