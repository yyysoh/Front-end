/***************************************
 *  배열의 메소드 filter(callback함수)
 * 특정 조건을 만족하는 원소들만으로 새로운 배열 생성
 * 매개변수인 함수를 Truthy/Falsy 를 리턴해야 한다
 * 
 * ES5 등장
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */



//참으로 리턴한 것으로만 모아둔 배열 filter


let todos = [
    {
      id: 1,
      text: "자바스크립트 입문",
      done: true
    },
    {
      id: 2,
      text: "함수 배우기",
      done: true
    },
    {
      id: 3,
      text: "객체와 배열 배우기",
      done: true
    },
    {
      id: 4,
      text: "배열 내장함수 배우기",
      done: false
    }
];
  

//done 값이 false인 것만 뽑아내기

// 1. forEach() 사용
let result = [];
todos.forEach(e => {
  e.done || result.push(e);
});
console.log(`result =`, result);


// let result = [];
// todos.forEach(e => e.done === false && result.push(e));
// console.log(`result =`, result);






//filter() 사용
result = todos.filter(e => e.done === false);
console.log(`result =`, result);




// 반대로 done 값이 true 인 것만 골라내려면?
result = todos.filter(e => e.done);
console.log(`result =`, result);


console.log('-'.repeat(20));


// 도전]
// id 값이 짝수인 것만 filtering  하기
// [
//   { id: 2, text: '함수 배우기', done: true },
//   { id: 4, text: '배열 내장함수 배우기', done: false }
// ]

result = todos.filter(e => e.id % 2 == 0);
console.log(result);




console.log('-'.repeat(20));
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
 



  function filterItems(query){

    return fruits.filter(e => e.includes(query));
    //return fruits.filter(e => e.indextOf(query) > -1);
   
  }


 
console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
 




console.log("\n[프로그램 종료]", '\n'.repeat(20));