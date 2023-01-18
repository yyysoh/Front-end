/*
    JS의 자료형(data type) : https://www.w3schools.com/js/js_datatypes.asp
	
    타입
    https://www.w3schools.com/js/js_typeof.asp

        값을 갖고 있는 5개 타입
            number : 숫자 타입
            string : 문자열 타입
            boolean : 논리 타입 (true, false)        
            object : 객체 타입
            function : 함수 타입

        6가지 object 타입
            Object : 객체
            Array : 배열
            Date
            String 
            Number
            Boolean

        값을 갖고 있지 않은 타입 2가지
            undefined : 타입이 지정되지 않음
            null : 데이터가 없는 object

        
    JS 는 dynamic type 을 지원하는 언어다. 
    그 때 그 때 타입이 변하는 언어
*/

console.log('-'.repeat(20));
console.log('[number, string, undefined]');


let x;

console.log('x =', x, typeof(x));

x = 5;
console.log('x =', x, typeof(x));

x = 'John';
console.log('x =', x, typeof(x));

x = undefined;
console.log('x =', x, typeof(x));

// 리터럴 (literal)
// 프로그램 코드 안에 직접 작성하는 값 (이 또한 데이터 타입 있다)


//JS의 문자열 리터럴은 홑따옴표나 쌍따옴표로 감싼다
console.log('-'.repeat(20))
console.log('string (문자열)')
x = "JavaScript", 'JavaScript'
x = 'JavaScript'

console.log("It;s alright");


//16진수 이스케이프 시퀀스
console.log('\xA9');

//유니코드 이스케이프 시퀀스
console.log('\u00A9');


//JS의 숫자 타입 (number 타입)
console.log('-'.repeat(20));
console.log('number(숫자)');

console.log(34.00); //소수점을 출력하지 않는다
console.log(34);


//지수표기법 exponential notation;
console.log(123e5); //123 x 10의 5제곱
console.log(123e-5); //123 x 10의 -5제곱

console.log();


//덧셈만 숫자가 문자열로 바뀐다
x = "10" + 10; //1010 string (number 10 => string "10")
console.log('x=', x, typeof(x));

x = "10" * 10; //string "10"이 number 10으로 바뀌었다?!!?!?!?!? (헐..)
console.log('x=', x, typeof(x));

x = "10" - 10; //
console.log('x=', x, typeof(x));

x = "10" / 10; //
console.log('x=', x, typeof(x));

x = "10" > 10; //
console.log('x=', x, typeof(x));

x = "a" + 10; //NaN number이 나온다 이런식으로는 안됨
console.log('x =', x, typeof(x));

x = 10 / 0;
console.log('x =', x, typeof(x)); //x = Infinity number 실행돼서 이렇게 나옴 에러 안뜸 프로그램 종료가 나온다는 건 에러가 뜨지 않았단 것


console.log('-'.repeat(20));
console.log('boolean 타입');

x = true;
console.log('x=', x, typeof(x)); //파란색으로 나온건 자바스크립트가 예약한 것으로(예약어) 이걸로 변수 만들면 안된다

x = 10 > 5;
console.log('x=', x, typeof(x));

x = 10 == "10";
console.log('x=', x, typeof(x));

x = 10 === "10"
console.log('x=', x, typeof(x));



	
/*
 * 배열 (array) object 타입 중 하나
 * 
 * [ .. ]  bracket 으로 감싸고
 * 그 안에 배열 원소(item) 들이 콤마로 나열됨. 
 */


console.log('-'.repeat(20))
console.log('array (배열)');


x = [10, 20, 30]; //x라는 이름의 array. 그 안에 10, 20, 30 3개의 number 값이 배열 원소로 담김

console.log('x=', x, typeof(x));
console.log(x[0]); //첫번째 원소
console.log(x[1]); //첫번째 원소
console.log(x[2]); //첫번째 원소
console.log(x[3]); //undefined가 나옴 에러 아님 값이 정의되지 않음
console.log("x.length=", x.length); //배열.length <- 배열 원소의 개수

x = []; //empty 배열
console.log(x, x.length);
x = [
    100,
    200,
    300,
    400, // <-- 마지막 원소 뒤에 콤마 남겨놔도 ok. 자바, c언어에선 에러 남
];


console.log(x, x.length);




/*
 * 오브젝트, 객체 (object)
 * { .. }  curly brace 로 감싸고
 * name:value 쌍이 콤마로 구분되어 나열됨.
 * name:value 쌍 을 object 의 property 라고 한다.
 */


console.log('-'.repeat(20))
console.log('[object (오브젝트)]');

const person = {firstName : "John", lastName : "Doe", age : 50, eyeColor : "blue"};

console.log('person =', person, typeof(person));
console.log(person, typeof(person));

//property name을 사용하여 value 접근
console.log(person['firstName']); //방법1
console.log(person.firstName); //방법 2
console.log(person.address); //없는 property name에 접근하면 undefined.

//empty object
x = {} //존재는 하지만 비어있다
console.log(x, typeof(x));


//null
x = null; //존재하지 않는다
console.log(x, typeof(x)); 

//object가 뜨는 이유는?



//undefined, NaN(Not a Number), null, Infinity 가 출력되고 있다면...
//무언가 잘못 만들고 있다는 뜻이다




console.log("\n[프로그램 종료]", '\n'.repeat(20));
































