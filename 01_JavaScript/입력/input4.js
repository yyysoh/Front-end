// 값 여러 줄에 걸쳐 받기
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let lines = 3; //3줄에 걸쳐 입력 받기

// 입력시 줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){  // 사용자가 입력한 line (string)
    input.push(line.trim());
   
    if(input.length == lines) 
    rl.close();  // 입력완료시 close! 
});

// 입력완료 close시 수행할 코드 등록
rl.on("close", function(){
    // TODO
    console.log('입력하신 값은:', input);
});