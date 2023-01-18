// 생각해보자
let result;

//&&, ||

result = true && false; //false
console.log(result);
result = true || false;
console.log(result);

result = true && 'hello'; //hello
console.log(result);

result = false && 'hello'; //false
console.log(result);

//&&, || 연산자는 t, f가 아니라 왼쪽이냐 오른쪽이냐이다
//왼쪽이 참이면 오른쪽은 거짓임 무조건 오른쪽깂?
//왼쪽이 false면 왼쪽값


result = 'hello' || 'byte';
console.log(result);

result = 0 || 200;
console.log(result);

result = null || 'good';
console.log(result);

/*****************************************************
 * Short Circuit Evaluation (단축평가)  (혹은 Lazy Evalutaion 이라고도 한다)
 *
 * 표현식1 && 표현식2
 *  표현식1 이 Falsy 이면 && 의 결과값은 표현식1
 *  표현식1 이 Truthy 이면 && 의 결과값은 표현식2
 *
 * 표현식1 || 표현식2
 *  표현식1 이 Falsy 이면 || 의 결과값은 표현식2
 *  표현식1 이 Truthy 이면 || 의 결과값은 표현식1
 */
 
 

let n = 5;
if(n % 5 == 0)
  console.log('5의 배수');
(n % 5 == 0) && console.log('5의 배수'); 


n = 3;
(n % 5 == 0) || console.log('5의 배수가 아닙니다'); 


/*****************************************
 * SCE 는
 * React 등에서 '조건부 렌더링' 등을 할때 많이 사용하는 문법이다
 * 특정 값이 유효할때만 수행해야 하는 상황
 */
 console.log('-'.repeat(20));
 
 // 다음과 같은 함수가 정의되었다고 하자.
 let getName = function(animal){
     return animal.name;
 }
 
 //let dog = {name: "흰둥이"};

dog = null; // null뒤에는 . 안된다
//console.log(getName(dog));

 getName = function(animal) {
  //따라서 아래와 같이 하는 게 안전핟
  return animal && animal.name; 

}

console.log(getName(dog)); //null...에러나진 않는다

//혹은
dog = {age: 5};
console.log(getName(dog)); //undefined.. 일단 에러나진 않지만..



/*********************************
 * || or 연산의 경우
 *
 * || 연산자로 코드 단축시키기
 * 
 */
 console.log('-'.repeat(20));
 
 // 예를 들어서 다음과 같은 코드가 있다고 가정해봅시다.
 dog = {name: ""};
  

getName = function(animal) {
  const name = animal && animal.name; //animal의 null 체크 
  return name || "이름이 없는 동물입니다" //.name 체크
}

console.log(getName(dog));
console.log(getName({age: 34}));




const calcCircleArea = function(r){
  let radius = r || 1;  // 마치 r 의 기본값이 1 인것처럼 동작한다
  return Math.PI * radius * radius;
};


console.log(calcCircleArea(10));
console.log(calcCircleArea());




console.log("\n[프로그램 종료]", '\n'.repeat(10));



























