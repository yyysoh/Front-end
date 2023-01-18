
// 주석 
// 한줄 주석 line comment


/* 블럭 주석 block Comment
여러줄에 걸친 주석
이 안의 글자들은 어케 될까?
 */

// console.log() <- 화면에 출력하고 줄바꿈까지 
console.log("hello javascript");   // 문장 (statement)
console.log('Hello JavaScript');
console.log(100);   // 숫자 100
console.log(10, 20, 30);   // 여러값 출력 가능, 한칸씩 띄어서 출력
console.log("100");  // 문자열 "100"

// 문자열(string) 은 쌍따옴표 혹은 홑따옴표로 감싼다.

// ;
// 문장의 끝에 세미콜론으로 마무리
// JS 에서는 굳이 세미콜론은 안해도 되나,
// 어떤 경우에는 안하면 에러 발생할수 있기에 가급적 붙여주는걸 추천.

console.log(10, 20, 30);
console.log(3.14, 0.2, 123., .987);
console.log("I", "am", 30, "years");

// 여러문장을 한 라인에 작성시는 반드시 세미콜론으로 구분
console.log(111); console.log(222); console.log(333);

// 기본적인 사칙연산
console.log(10 + 20);
console.log(10 - 20);
console.log(10 * 20);
console.log(10 / 20);

// 문자열 + 문자열 => 문자열 연결
console.log("Java" + "Script");

// 문자열(string) 과 숫자(number)
console.log("10", 10);

// 문자열 + 숫자 => 문자열 연결
console.log("10" + 10);  // "1010"
console.log(10 + "10");  // "1010"
console.log("10" + 1 + 2); // "1012"
console.log(1 + 2 + "10");  // "310"
console.log("10" + (1 + 2));  // "103"

// 문자열 반복출력
console.log("***************************************");
console.log('*'.repeat(20));


// 이스케이프 문자 (escape character)
// " ~ " 문자열 안에서 특수 문자 출력


// She says "Hi"  <-- 출력하려면?
// console.log("She says "Hi"");   // 에러
console.log('She says "Hi"');

// It's my "PRECIOUS"
console.log('It\'s my "PRECIOUS"');


// 입문시 기억할만한 이스케이프 문자
// \"  : 쌍따옴표
// \'  : 홀따옴표
// \n  : 줄바꿈
// \t  : 탭문자
// \\  : 문자열 안에서 역슬래시 출력

console.log("123\t456\t789\t");
console.log("Avengers\n\\Endgame\\");

console.log("\n[프로그램 종료]", '\n'.repeat(10));













