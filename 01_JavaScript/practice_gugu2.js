// code by 조정현
// 정수 값 여러 개 입력받기
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = undefined;

// 사용자가 입력할 때 엔터를 누르면 (줄 바꿈) 수행되는 코드 등록
rl.on('line', function (line) { // 사용자가 입력한 line (문자열 string)
    input = line.trim().split(/\s+/).map((e) => parseInt(e)); // map() 
    rl.close(); // 입력완료시 close!
});

// 입력완료 close시 수행할 코드 등2록
rl.on("close", function () {

    let result = "";
    let col = input[0];

    console.log(`열의 개수 : ${col}`);

    for (let dan = 2; dan <= 9; dan += col) { // 시작 단수   // i+=3 -> i+=a    // i : 단  j : 곱셈 수  k    a : 열의 개수 
        for (let mul = 1; mul <= 9; mul++) { // 곱하는 수                
            for (let k = dan; k < col + dan; k++) { // 행; 열 개수; 증가;  
                if (k <= 9) result += `${k} x ${mul} = ${k * mul} \t`; // if(k<=9) 9단 이하만 나옴
            }
            result += "\n"
        }
        result += "\n"
    }
    console.log(result);

});