

// 100 이하의 양의 정수만 입력된다.
// while 문을 이용하여 1부터 입력받은 정수까지의 합을 구하여 
// 출력하는 프로그램을 작성하시오.

//10

//55


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

  let n = parseInt(input);
  let sum = 0, i = 1;
  while(i <= n){
      sum += i;
      i++
  }
  console.log(sum);


});