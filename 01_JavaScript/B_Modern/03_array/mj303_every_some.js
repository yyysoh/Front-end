/*********************************************
 * every(판별함수)  ES5 등장
 *   배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트
 * 
 *   판별함수의 리턴값은 Truthy / Falsy 를 리턴해야 한다
 * 
 *   판별함수의 매개변수 (element, index, array)
 * 
 *   리턴값은 true / false
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 */
console.log('[every]')
let arr1 = [1, 30, 39, 29, 10, 13];
console.log(arr1.every(e => e < 40)); //배열만의 모든 원소가 40 미만인가? 를 확인하는 것 통과하면 true


//배열 안의 모든 원소 짝수인가?
console.log(arr1.every(e => e % 2 == 0)); //하나라도 거짓이면 false

console.log([12, 5, 8, 170, 44].every(e => e > 10)); //false


/**********************************************
 * 배열.some(판별함수) //10개 중에 하나만 통과해도 됨
 *  배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트
 * 
 *  판별함수의 리턴값은 Truthy / Falsy 를 리턴해야 한다
 * 
 *  판별함수의 매개변수 (element, index, array)
 * 
 *  리턴값은 true / false
 * 
 * ES5 소개
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 */
console.log('-'.repeat(20));
console.log('[some()]');
arr1 = [1, 2, 3, 4, 5];

//배열 안에 짝수를 하나라도 갖고 있나?
//console.log(arr1.some(e => e % 2 ==0)); //true
console.log(arr1.some((e, i) => {
  console.log(`[${i}]: ${e}`);
  return (e % 2 ==0)
}));

console.log("\n[프로그램 종료]", '\n'.repeat(20));

