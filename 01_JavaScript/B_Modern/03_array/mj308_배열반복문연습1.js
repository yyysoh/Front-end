/*
퀴즈
이제 지금까지 배운 것들을 활용하여 퀴즈를 풀어봅시다!
숫자 배열이 주어졌을 때 
10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요.
*/
const data = [1, 2, 3, 5, 10, 20, 30, 40, 50, 60];
// 결과 -> 5

{
  const countBiggerThanTen = function(arr, number) {
    // 방법1 : forEach 사용
    
    let cnt = 0;
    arr.forEach(e => {e > number && cnt++});
    return cnt;

  }

  console.log(countBiggerThanTen(data, 10)); // 5
}

{
  function countBiggerThanTen(arr, number) {
    // 방법2 : filter 사용


    return arr.filter(e => e > number).length; //number을 아래에서 호출할 때 10으로 해주고 있음
  }



  console.log(countBiggerThanTen(data, 10)); // 5
}

{
  function countBiggerThanTen(arr, number) {
    // 방법3 : reduce 사용

    result = arr.reduce((acc, cur) => {
      if(cur > number) acc.push(cur);
      return acc;
    }, []);
    return result.length;

  }

  console.log(countBiggerThanTen(data, 10)); // 5
}

console.log("\n[프로그램 종료]", '\n'.repeat(20));