/*
    JavaScript 의 Math object

    수학연산 관련 기본적인 상수나 함수 제공
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
let arr, result;
/**************
 * 상수들
 * Math 의 property 로 제공
 */
 console.log('Math 의 상수 property 들');
 arr = [
    Math.PI,
    Math.E,   // Euler's number
    Math.PI,  // 원주율
    Math.SQRT2,  // root 2
    Math.SQRT1_2,  // root 1/2
    Math.LN2,   // natural logarithm of 2
    Math.LN10,  // natural logarithm of 10
    Math.LOG2E, // base 2 logarithm of E
    Math.LOG10E, // base 10 logarithm of E
 


 ]
 arr.forEach(n => console.log(n));
 Math.E = 100.5;
 console.log(Math.E); //2.718281828459045 위의 Math 상수로 나옴


const obj = {
    name: "James",

}
obj.name = "Jane"
console.log(obj); //바뀜 property는 바뀜

Object.freeze(obj); //property 변경 안됨!!!
obj.name = "쉬는시간";
console.log(obj);


/************************
 * number 에서 integer 로 변환(혹은 추출) 하는 Math 메소드들
 * Math.round(x)	반올림
 * Math.floor(x)	x 보다 작은 수 중에 가장 큰 정수
 * Math.ceil(x)	    x 보다 큰 수 중에 가장 작은 정수
 * Math.trunc(x)	x 의 소숫점 이하 잘라낸 정수
 */
console.log('-'.repeat(20));
console.log('round() floor() ceil() trunc()');

arr = [1.2, 1.7, -1.2, -1.7];
console.log('arr: ', arr);

// round => 1, 2, -1, -2
result = [];
arr.forEach(n => result.push(Math.round(n)));
console.log('round(): ', result);

//floor => 1, 1, -1, -1
result = [];
arr.forEach(n => result.push(Math.floor(n)));
console.log('floor(): ', result);

//ceil => 2, 2, -1, -1
result = [];
arr.forEach(n => result.push(Math.ceil(n)));
console.log('ceil(): ', result);

//trunc => 1, 1, -1, -1
result = [];
arr.forEach(n => result.push(Math.trunc(n)));
console.log('trunc(): ', result);

// TODO


/**********************************
 * pow(), sqrt(), abs()
 */
console.log('-'.repeat(20))
console.log('[pow(), sqrt(), abs()]');

//pow 세제곱 네제곱 sqrt 제곱근 abs 절대값

arr = [
    Math.pow(2, 3),
    Math.pow(-2, 3),
    Math.pow(2, -1),
    Math.pow(2, 1/2),
    Math.pow(27, 1/3),

    Math.sqrt(2),
    Math.sqrt(4),
    Math.sqrt(64),
    Math.sqrt(-1), //NaN

    Math.abs(-4.7),

];
arr.forEach(n => console.log(n));



/**********************************
 * 삼각함수 sin(), cos(), tan()
 * 매개변수는 radian 값이다  //radian : 90도 2분의 파이 180도 파이 360도 2파이
 */
console.log('-'.repeat(20))
console.log('삼각함수');

arr = [
    Math.sin(90 * Math.PI / 180), //sin 90도
    Math.sin(60 * Math.PI / 180),
    Math.sin(45 * Math.PI / 180),
    Math.sin(30 * Math.PI / 180),
   
    Math.tan(90 * Math.PI / 180), //tan 90도
 

];
arr.forEach(n => console.log(n));

/********************************
 * min(), max()
 */
console.log('-'.repeat(20));
console.log('min() max()');

// TODO

console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));

arr = [0, 150, 30, 20, -8, -200];
console.log(Math.min(arr)); //배열은 값 비교 안됨
console.log(Math.min(...arr)); //spread 구문 사용하여 배열도 전달 가능
//Math.min(...arr) => Math.min(0, 150, 30, 20, -8, -200)
//...(spread 이용) 배열에 있는 게 매개변수로 변환


/*******************************
 * random()
 * 0 <= x  < 1  사이의 난수(실수 number) 리턴
 */
console.log('-'.repeat(20));
console.log('random()');

// TODO
for(i = 0; i < 5; i++) {
    console.log(Math.random());

}

//랜덤 정수값
console.log('\n0 ~ 9 사이의 랜덤 정수');
for(i = 0; i < 10; i++) {
    process.stdout.write(Math.floor(Math.random() * 10) + " "); //문자열로 해야됨
}

/************************
 * log(), log2(), log10()
 * natural logarithm 
 */
console.log('-'.repeat(20))
console.log('자연로그함수');

arr = [
    Math.log(1),   // 0
    Math.log(2),
    Math.log(10),
   
    Math.log2(8),
   
    Math.log10(1000),
 

];
arr.forEach(n => console.log(n));




 console.log("\n[프로그램 종료]", '\n'.repeat(20));
 
 






















 