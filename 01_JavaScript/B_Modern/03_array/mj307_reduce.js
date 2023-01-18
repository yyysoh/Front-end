/******************************
 * 배열의 reduce : n개의 입력 => 1개의 출력 
 * reduce 함수는 잘 사용 할 줄 알면 정말 유용한 내장 함수입니다. 
 * 
 * reduce(callback함수)
 * reduce(callback함수, 초깃값)
 * 
 * 
 * reduce 함수를 누적계산결과'값'을 리턴한다
 * (accumulator, current) => 누적계산결과
 * (accumulator, current, index, array) => 누적계산결과
 *   - index: 현재 current 가 몇번째 인지 
 *   - array: 함수를 실행하는 배열 자신 
 * 
 * 
 * ES5 등장
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */

let numbers = [1, 2, 3, 4, 5]
let result, sum

//총점을 구하려면?

//기존의 방법
sum = 0;
for(e of numbers) {
  sum += e;
}
console.log('sum =', sum);


//2. reduce를 사용
sum = numbers.reduce((accumlator, current) => accumlator + current);
console.log('sum = ', sum);
//2개를 받아서 1개를 리턴
//1,2를 넘기면 3 리턴 그 다음 3과 4를 넘기면 7 ... 
//최종적으로 배열에 하나가 남을 때까지 실행됨
// [1, 2, 3, 4, 5]





// [1, 2, 3, 4, 5]
//   ↘↓
// [   3, 3, 4, 5]
//      ↘↓
// [      6, 4, 5]
//         ↘↓
// [        10, 5]
//            ↘↓
// [           15]

//초깃값 사용
sum = numbers.reduce((accumlator, current) => accumlator + current, 0);
//초깃값을 0 줌


// [0, 1, 2, 3, 4, 5]   초깃값 0 부터 시작
//   ↘↓
// [   1, 2, 3, 4, 5]
//      ↘↓
// [      3, 3, 4, 5]
//         ↘↓
// [         6, 4, 5]
//            ↘↓
// [           10, 5]
//               ↘↓
// [              15]
 

console.log('-'.repeat(20));

//reduce가 진행되는 중간 과정 확인해보기
numbers.reduce((accumulator, current, index, array) =>{
  console.log(`${index} : ${accumulator} + ${current}`);
  return accumulator + current;
}, 0); // <- 0은 초깃값 intializer


//----------------------------------------------------
// 응용
// reduce 를 사용하여 평균 구하기
// hint : 마지막 원소의 경우 평균을 리턴.
//      index, array 활용
console.log('-'.repeat(20))
 
let avg = numbers.reduce((accumulator, current, index, array) => {
  let result = accumulator + current;
  //마지막 원소인 경우는 평균을 리턴하게 하자
  (index === array.length -1) && (result /= array.length);   
  return result;
}, 0);
console.log('avg = ', avg);





//------------------------------------------------
//  원래 reduce : n개 -> 1개
//  그러나 다음의 동작도 가능하다.

// 각각의 원소에 x 2을 한 배열 구하기 (응? 이건 map 아닌가?)
result = numbers.reduce((acc, cur)=>{
  acc.push(cur * 2);
  return acc;
}, []);

// [[], 1, 2, 3, 4, 5]
//   ↘ ↓
// [  [2],  2, 3, 4, 5]
//       ↘ ↓
// [    [2, 4],3, 4, 5]
//         ↘  ↓
// [      [2,4,6], 4, 5]
//             ↘  ↓
// [        [2,4,6,8], 5]
//                 ↘  ↓
// [         [2,4,6,8,10]]4


console.log(result);




// reduce 응용
// 도전!
// 배열안의 알파벳은 각각 몇개가 있을까?
let alphabets = ["c", "a", "a", "b", "c", "a", "d", "e"];
// 결과 => { a: 3, b: 1, c: 2, d: 1, e: 1 }
// 힌트 alphabets.reduce() 사용;

let count = alphabets.reduce((acc, cur) => {
    if(acc[cur]){
        // 기존에 존재했다면 +1 증가
        acc[cur] += 1;
    } else {
        // 최초로 등장했다면
        acc[cur] = 1;
    }
    return acc;
}, {});  // 초깃값 {}
console.log(count);

/*
    {}, c, a, a, b, c, a, d, e
      
    {c:1}, a, a, b, c, a, d, e

   {c:1,a:1}, a, b, c, a, d, e

      {c:1,a:2}, b, c, a, d, e

      {c:1,a:2,b:1},c, a, d, e

        {c:2,a:2,b:1}, a, d, e

           {c:2,a:3,b:1}, d, e

           {c:2,a:3,b:1,d:1}, e

           
*/


console.log('-'.repeat(20));



console.log('-'.repeat(20));
console.log(Object.keys(count));
console.log(Object.values(count));
console.log(Object.entries(count));

// Object.entries() + sort() 활용


// 알파벳 오름차순 정렬
// [ [ 'a', 3 ], [ 'b', 1 ], [ 'c', 2 ], [ 'd', 1 ], [ 'e', 1 ] ]


console.log(Object.entries(count).sort((a, b) => {
  if(a[0] > b[0]) return 1;
  if(a[0] < b[0]) return -1;  
  return 0;

}));


// 빈도수 오름차순 정렬
// [ [ 'b', 1 ], [ 'd', 1 ], [ 'e', 1 ], [ 'c', 2 ], [ 'a', 3 ] ]

console.log(Object.entries(count).sort((a, b) => a[1] - b[1]
));



// 빈도수 내림차순 정렬
// 빈도수 내림차순 [ [ 'a', 3 ], [ 'c', 2 ], [ 'b', 1 ], [ 'd', 1 ], [ 'e', 1 ] ]

console.log(Object.entries(count).sort((a, b) => b[1] - a[1] 
));




//reduce() 강력핟!!!



//오브젝트 자체는 정렬 안됨!! 뽑아내서 해야됨
//entry로 뽑아낸 다음에 하면 됨


console.log("\n[프로그램 종료]", '\n'.repeat(20));