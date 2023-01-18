// 값 여러 개 입력받기 split(/\s+/)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = undefined;

// 입력시 줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){  // 사용자가 입력한 line (string)
    input = line.trim().split(/\s+/); //split(/\s+/) /그러면 배열이 된다
    rl.close();  // 입력완료시 close!
});

// 입력완료 close시 수행할 코드 등록
rl.on("close", function() {
    console.log(input[0] + input[1] + input[2]) //문자열로 인식하여 붙여져서 나옴 배열이니까!
});