/*
    Template Literal 문법 (ES6 등장)
    ES6 에는 문자열 조합을
    편리하게 할수 있는 방법 제공
        '이전에는 Template String이라 불렸지만
        'ES2015 명세서 부터는 Template Literal 이라 부름
    
    backtick (`) 문자 사용한 문자열 포맷팅
        문자열 안에서 ${변수}
        문자열 안에서 ${값}
        ..

    공식]
        https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals        

    이와같이 불리기도 한다]
        Template Literals
        Template Strings
        String Templates
        Back-Tics Syntax
*/

let myName;
myName = "아이언맨";

console.log('Hello,' + myName + "!");
console.log(`Hello,${myName}!`);

console.log(`welcome ${2000 + 22} years`);

// 일반적인 string 리터럴은 중간에 줄바꿈 안된다
// let str = "동해물과 백두산이
// 마르고 닳도록";

//backtick은 줄바꿈해도 출력된다
let lyric = `동해물과 백두산이
마르고 닳도록
하느님이 보우하사
우리나라 만세`

console.log(lyric);


//----------------------------------------------------------

const myObject = {name : "John", age : 40};
const arr1 = [10, 20, 30];


console.log(myObject);
console.log('myObject =', myObject);

//template literal도 내부적으로 문자열 연결 연산(+)
//'myObject = ' + myObject.toString()
console.log(`myObject = ${myObject}`);  //myObject = [object Object] 결과가 나옴

//문자열 연결연산(+) => 'myObject =' + myObject.toString()
console.log('myObject = ' + myObject);  //myObject = [object Object] 결과가 나옴


//모든 object는 자신을 문자열로 표현하는 toString() 메소드들을 제공
console.log(myObject.toString()); //[object Object] 결과가 나옴
console.log(arr1, arr1.toString());



//탬플릿 리터럴로 myObject = { name: 'John', age: 40 } 이런식으로 출력 안됨
//나중에 오버라이딩 사용해서 하면 가능

            
console.log("\n[프로그램 종료]", '\n'.repeat(20));





























