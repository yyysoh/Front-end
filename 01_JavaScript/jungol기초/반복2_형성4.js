/* 133 : 반복제어문2 - 형성평가4
http://jungol.co.kr/bbs/board.php?bo_table=pbank&wr_id=33&sca=1070

문제
100 이하의 자연수 n을 입력받고 n개의 정수를 입력받아 평균을 출력하는 프로그램을 작성하시오.
(평균은 반올림하여 소수 둘째자리까지 출력하도록 한다.)

입력 예]
3
99 65 30

출력 예
64.67
 */


// 값 여러줄에 걸쳐 받기
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let lines = 2;   // 2줄에 걸쳐 입력받기

// 입력시 줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){  // 사용자가 입력한 line (string)
    input.push(line.trim());

    if(input.length == lines)
        rl.close();  // 입력완료시 close!
});

// 입력완료 close시 수행할 코드 등록
rl.on("close", function(){
    let n = parseInt(input[0]);

    let arr = input[1].split(/\s+/);

    let total = 0;
    for(let i = 0; i < n; i++){
        total += parseInt(arr[i]);
    }
    let avg = total / n;
    console.log(avg.toFixed(2));
});