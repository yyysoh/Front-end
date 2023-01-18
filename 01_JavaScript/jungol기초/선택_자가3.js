


// 나이를 입력받아 20살 이상이면 "adult"라고 출력하고 그렇지 않으면 
// 몇 년후에 성인이 되는지를 "○ years later"라는 메시지를 출력하는 
// 프로그램을 작성하시오.


//18

//2 years later




const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = undefined;

// 입력시 줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){  // 사용자가 입력한 line (string)
    input = line.trim().split(/\s+/).map((e) => parseInt(e));
    rl.close();  // 입력완료시 close!
});

// 입력완료 close시 수행할 코드 등록
rl.on("close", function(){

    let age = input[0];
    let iii = 20 - age;

    if(age > 20) {
      console.log('adult');
    } else {
        console.log(`${iii} years later`)
    }
    


});