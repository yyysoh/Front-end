/*
    변수 (variable)
        값을 담는 공간.  변수로 선언이름(variable name)을 부여해서 관리    

 	변수는 사용하기 전에 먼저 '선언(declaration)' 해야 한다
	
     변수 선언 구문 방법 4가지:
		● let 변수이름    ← let 으로 선언된 변수는 값 변경 가능
        ● const 변수이름  ← const 된 변수는 값 변경 불가. 이는 상수(constant) 라 한다. 반드시 선언시 초기화 해야 한다
        ● var 변수이름    ← var 키워드는 오늘날 JS 에서는 가급적 사용하지 않음.  값 변경 가능
        ● 걍 변수이름..

    변수에 값을 대입 (assign)
         =  대입연산자 (assignment operator) 사용

	변수의 초기화 (initialization)
		변수에 최초로 값(value) 을 대입 (assignment) 하는 것.

    타입 확인
        모든 값이나 변수는 타입(type) 과 값(value) 을 갖고 있다.
        typeof 연산자를 통해 타입 확인 가능.

    변수 이름
        변수 이름은 고유한 식별자 (identifier)로 작명해야 한다
        - 문자, 숫자, _, $ 사용 가능
        - 숫자로 시작하면 안된다
        - 대소문자 구분한다  (case sensitive)
        - 예약어 (reserved word), 키워드는 변수명으로 사용 불가

    
    가급적 코드에서 사용하는 모든 변수들은 코드의 상단에서 선언해두자.
*/   

let num1;   // num1 이라는 이름의 변수 선언
num1 = 20;  // 변수 num1 에 숫자 20 값을 대입.  대입연산자 사용
console.log('num1 =', num1);

num1 = 30 * 2; //변수가 담고 있는 값은 변경될 수 있다(그래서 변경)
console.log('num1 =', num1);

let num2; //한번도 대입하지 않은(초기화 되지 않은) 분수는 undefined 값을 가진다
console.log('num2 =', num2);



//데이터는 '값' + '타입' 으로 구성되어 있다

//typeof 연산자 : 변수나 값의 타입을 확인
console.log('-'.repeat(20));
console.log(typeof 10); //10은 number 타입
console.log(typeof "10"); //"10"은 string 타입
console.log(typeof(10), typeof("10")); //함수처럼 사용해도 된다

//값과 타입을 출력
console.log('num1 =>', num1, typeof(num1));
console.log('num2 =>', num2, typeof(num2));

//한번에 여러 개 변수 선언
let a, b, c;
a = 5;
b = 6;
c = a + b;
console.log('a =', a, 'b=', b, 'c=', c);

let person = 'John Doe', carName = "volvo", price = 200;
console.log('person=', person, 'carName', carName, 'price=', price);


//공백 작성
//가급적 대입연산자 좌우로 공백
//콤마 다음에 공백

//가급적 한 줄(line)은 80글자 이내로 작성하자 (가독성 readability 문제)
//부득이 넘어갈 경우 적절한 줄 바꿈

//사용 가능한 변수명
let abc;
let year2022;
let $; //가능!
let $$$;
let $myMoney;
let _name_; //_ 가능


//사용 불가능한 변수명
//let 9monkeys; //숫자로 시작하면 x
// let my name; //띄어쓰기 x
// let function; //키워드 x
// let num1; //중복된 이름의 변수 선언 불가 (let, const의 경우)

//상수(constant)
const PI = 3.14;
console.log('PI =', PI);
// PI = 123; //에러 뜬다
// const K; //JS 에서는 상수 선언과 동시에 초기화 해야 한다 missing initializer-초기화를 해라


//var는 중복 선언 가능
var k = 10;
console.log('k=', k);
var k = 10;
console.log('k=', k);



// 키워드 없이 변수 선언 --> global
// 이는 delete 를 사용하여 삭제 가능.
myValue = 200;
console.log('myValue =', myValue, typeof myValue);
delete myValue;   // 변수 삭제
// console.log('myValue =', myValue, typeof myValue); //에러

/*
* let, const 는 block scope (블럭 영역) 를 갖는 변수다
*   블럭 안에서 선언된 변수는 선언이후 블럭안에서만 사용가능함
*   블럭이 끝나면 해당 이름의 변수는 사용 불가
*  
*   이러한 변수를 지역변수(local variable) 이라 하고
*    local scope (지역 범위) 를 갖는다 라고 말합니다.
*    scope 는 해당 이름을 사용할수 있는 범위
*/


{
    let i = 100;
    console.log('i =', i);
}

// console.log('i =', i); //에러다

{
    let i = 200;
}


//바깥쪽 scope에서 선언된 변수는 안쪽에서 선언된 변수에서 사용 가능
//안쪽에서 동일한 이름을 선언된 변수가 있으면, 해당 변수로 동작.
let grade = 4;
let age = 1;


{
    let age = 2;
    {
    let age = 3;
    console.log(age); //같은 블록에 있는 값이 우선
    }
    console.log(age);
}
console.log(age);



console.log("\n[프로그램 종료]", '\n'.repeat(10));