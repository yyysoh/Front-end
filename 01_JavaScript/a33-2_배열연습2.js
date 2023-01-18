// 퀴즈1
// 주어진 배열에서 3보타 큰 숫자로 구성된 배열구하기
{
    function biggerThanThree(numbers) {
        // TODO

    
        return numbers.filter(e => (e > 3)); //오른쪽 실행
        
          }
        

        }

    
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    console.log(biggerThanThree(numbers)); // [4, 5, 6, 7] 3보다 크게

  
// 퀴즈2
// 주어진 배열의 원소를 x3 한 배열 구하기
{
    function multiple3(numbers) {
        // TODO
        
//     result = numbers.reduce((acc, cur) =>{
//         acc.push(cur * 3);
//         return acc;
//     },[]);
//     return result;
// }

       return numbers.map(e => e * 3)
    
    }

    
    
    const numbers = [1, 2, 3, 4, 5];
    console.log(multiple3(numbers)); // [3, 6, 9, 12, 15] 곱하기 3
}  
  

// 퀴즈3
// 성이 '김' 씨인 사람만 담긴 배열 구하기
{
    const students = [
        {name: '김철수', score: [10, 20, 30]},
        {name: '박수진', score: [90, 33, 56]},
        {name: '김영희', score: [45, 78, 31]},
        {name: '조수현', score: [99, 100, 67]},
    ]

    function filterStu(data, start){
        // TODO
        return data.filter(e => e.name.startsWith(start)); //includes 는 김이 들어간 건 다 됨
    
        

    }
    console.log(filterStu(students, '김'));
    // 결과] 김씨 성 가진 이름
    // [
    //     { name: '김철수', score: [ 10, 20, 30 ] },
    //     { name: '김영희', score: [ 45, 78, 31 ] }
    // ]
}

// 퀴즈4
// 총점을 담을 배열 구하기
{
    const students = [
        {name: '김철수', score: [10, 20, 30]},
        {name: '박수진', score: [90, 33, 56]},
        {name: '김영희', score: [45, 78, 31]},
        {name: '조수현', score: [99, 100, 67]},
    ]

    function getTotal(data){
        // TODO

     console.log(data)
    

            return data.map(e => {
                return {name : e.name, total: e.score.reduce((a, b) => a + b)};
            });
        };
    
        
           
        
    
    console.log(getTotal(students));

    // 결과]
    // [
    //     { name: '김철수', total: 60 },      
    //     { name: '박수진', total: 179 },     
    //     { name: '김영희', total: 154 },     
    //     { name: '조수현', total: 266 }      
    // ]    
}