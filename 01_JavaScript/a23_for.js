/*
* ■ 순환문(loop)
* 	- for
* 	- while
* 	- do ~ while
*
* ■ for 순환문 구문
*
*	for(①초기식; ②조건식; ④증감식){
* 			③수행문;
*			..
*	}
*      ①초기식 : 최초에 단한번 수행
*      ②조건식 : 참 / 거짓 결과값
*      		위 조건식의 결과가 '거짓' 이면 for문 종료
*      ③수행문 : 위 조건식이 '참' 이면  수행
*      ④증감식 : 수행문이 끝나면 증감식 수행
*               증감식이 끝나면 다시 ②조건식 으로..
*
*	순환문을 작성시 내가 만드는 순환문에 대해 다음을 확실하게 인지하고 작성해야 한다
*	  1. 몇번 순환하는 가?
*	  2. 순환중에 사용된 인덱스값의 시작값과 끝값은?
*	  3. 순환문이 끝난뒤 인덱스값은?
*
*
*	for문 작성시 TIP
*	  1) n번 순환 하는 경우 (즉 횟수가 촛점인 경우)
*		for(int i = 0; i < n; i++){ .. }
*	  2) a ~ b 까지 순환하는 경우 (즉 시작값과 끝값이 중요한 경우)
*		for(int i = a; i <= b; i++){ .. }
*/



for(let i = 0; i < 5; i++) {
  console.log(`i = ${i}`);
  console.log("-".repeat(8));

}

for(let i = 10; i > 0; i -= 2) {
  console.log(`i = ${i}`);
}

//console.log(i); i는 지역변수라 이렇게하면 안됨




let k; //for 종료 후 인덱스로 사용된 변수를 사용하려면 for 바깥에서 선언
for(k = 10; k <= 100; k += 10) {
  process.stdout.write(k + ","); //한 줄 출력 잘 안씀

}
console.log();
console.log(`for 종료 후 k = ${k}]`); //k=110에서 끝난다



let result = []
for(let i = 0; i < 5; i++){
  result.push(i);
}
console.log(result.join(',')); //한 줄 출력 : 이렇게하면 이쁘게 출력됨 



let i, j;
for(i =10, j = 1; j < i; i--, j += 2) {
  console.log(`i = ${i}, j = ${j}`)

}

console.log(`종료 후 i = ${i}, j = ${j}`)





// 구구단 2단 출력
// 2 x 1 = 2
// 2 x 2 = 4
// ..
// 2 x 9 = 18
 


for(i = 1; i <= 9; i++) {
  console.log(`2 x ${i} = ${2 * i}`);
}



console.log(`순환문 + 조건문`)
// 1 ~ 10 중 홀수만 음수로 바꾸어 출력하기
// -1 2 -3 4 -5 6 -7 8 -9 10

result = [];
for(i = 1; i <= 10; i++) {
  if(i % 2 ==0)
    result.push(i);
  else
    result.push(-i);

}

console.log(result.join(',')); //배열로 나온 것을 조인으로




console.log('-'.repeat(20));
// 1 ~ n까지의 수를 합산

n = 100;
let sum = 0;
for(i = 1; i <= n; i++) {
  sum += i; //누적 합산
}
console.log(`sum = ${sum}`);



// 연습
// 1 + (-2) + 3 + (-4) + ...+ (n) >= 100 ?
// 언제(n) 합이 100을 넘나?  그 합은?



{
  let sum = 0;
  let n;

  for(n = 1; sum <= 100; n++) {
    if(n % 2 == 0){
      sum += n;
    } else {
      sum -=  n; //짝수의 경우 감산
    }
    console.log(`n = ${n}, sum = ${sum}`);
  }
}

console.log('-'.repeat(20));

//기본 for문과 배열
let korean = [93, 81, 71];
let total = 0;
for(n = 0; n < korean.length; n++) {
  console.log(`국어${n} = ${korean[n]}`);
  total += korean[n];
}

let avg = total / korean.length;
console.log(`총점 = ${sum}\n평균 = ${avg.toFixed(2)}`);






console.log("\n[프로그램 종료]", '\n'.repeat(20));












