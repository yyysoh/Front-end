/*
    조건문 : Conditional Statements 에서

    거짓(Falsy) 으로 평가될때!
        false, 0, '', null, undefined, NaN   <-- 'Falsy 한 값'이라 한다

    참(Truthy) 으로 평가될때
        true, 37, 'Mark', {}, [], Infinity   <-- 'Truthy 한 값' 이라 한다

    https://developer.mozilla.org/ko/docs/Glossary/Truthy
    https://developer.mozilla.org/ko/docs/Glossary/Falsy

*/
function print(data){
    if(data)  // <- 조건식
        console.log(data, '-- Truthy 판정');
    else
        console.log(data, '-- False 판정');
}


//false
print(false);
print('');
print(undefined);
print(NaN);
print(null);

console.log();


//true
print(true);
print(37);
print(-37);
print('Mark');
print({a:10, b:20});
print(' '); //공백이 있으므로 true
print([10, 20, 30]);
print([]);
print({});
print(Infinity);

//Truuthy, Falsy 판정
//위와 같이 if를 사용할수도 있지만

let value = {a: 1};


//1. 삼항연산자 사용
let truthy = value ? true : false;
console.log(truthy);


//2. ! 연산자 사용
console.log(value);
console.log(!value); //아무데나 다 ! 붙일 수 있다
console.log(!!value);  //안뜸


console.log("\n[프로그램 종료]", '\n'.repeat(20));





































