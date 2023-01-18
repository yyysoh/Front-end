/* 2차원 배열 (2-dimensional array)
 * 	직전의 예제와 같이 같이 배열 첨자를 하나만 쓰는 배열을 
 *  1차원 배열 (one-dimensional array) 이라고 함
 *   배열 첨자를 2개사용하면 2차원 배열
 *   배열 첨자를 3개사용하면 3차원 배열
 *   ...
 *  
 *   배열원소가 '1차원 배열' 들로 이루어진 배열을 2차원 배열 이라 한다  (배열첨자 2개 사용)
 *   배열원소가 '2차원 배열' 들로 이루어진 배열을 3차원 배열 이라 한다  (배열첨자 3개 사용)
*/
 

const arr1 = [
    [1, 2],
    [3, 4],
    [5, 6],
];

console.log(arr1);
console.log(arr1.length);

console.log(arr1[0]); //2차원 배열
console.log(arr1[1]);
console.log(arr1[2]);

// index 를 2개 사용하여 데이터 접근 (2차원 배열)
console.log(arr1[0][0]); //1
console.log(arr1[0][1]); //2
console.log(arr1[1][0]); 
console.log(arr1[1][1]); 
console.log(arr1[2][0]); 
console.log(arr1[2][1]); 


console.log();

let x, y;
for(x = 0; x < arr1.length; x++){
    for(y = 0; y < arr1[x].length; y++){
        console.log(arr1[x][y]);
    }
}


for(x of arr1){ //x는 1차원 배열
    for(y of x) { //y는 정수
        console.log(y);
    }

}


console.log('\n프로그램 종료', '\n'.repeat(3));