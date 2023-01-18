// 값 하나 입력받기
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = undefined;

// 입력시 줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){  // 사용자가 입력한 line (string)
    input = line.trim();
    rl.close();  // 입력완료시 close!
});

// 입력완료 close시 수행할 코드 등록
rl.on("close", function(){
    // TODO
    console.log('입력하신 값은:', input);
});