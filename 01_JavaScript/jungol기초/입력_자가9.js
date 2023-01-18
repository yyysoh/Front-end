


//세 개의 실수를 입력 받아 반올림하여 
//소수 셋째 자리까지 출력하는 프로그램을 작성하시오.


// 1.2568
// 95.21438
// 526.851364



// 값 여러 개 입력받기 split(/\s+/)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

// 입력시 줄바꿈이 입력될때 마다 수행되는 코드 등록
x = 0;
rl.on('line', function(line){  // 사용자가 입력한 line (string)
    input[x] = line.trim().split(/\s+/); //split(/\s+/) /그러면 배열이 된다
    x++;
    if(x == 3) {
    rl.close();  // 입력완료시 close!
}});

// 입력완료 close시 수행할 코드 등록
rl.on("close", function() {
    console.log('입력하신 값은:', input);
    console.log(parseFloat(input[0]).toFixed(3));
    console.log(parseFloat(input[1]).toFixed(3)); 
    console.log(parseFloat(input[2]).toFixed(3)); 
});