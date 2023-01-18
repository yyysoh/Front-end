// 값 하나 입력받기 3번
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = undefined;


//첫번째 프롬프트 띄우기 개행 놉
process.stdout.write('number? ');

// 입력시 줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){  // 사용자가 입력한 line (string)
    input = parseInt(line.trim());
    // rl.close();  // 입력하고 완료되면 안되니까 없애기! 0이 되면 종료니까!!



// rl.on("close", function(){ //끝났을 때 시행되는 것


if(input == 0) { //0이 입력되면 종료해야하니까 지금 씀
  rl.close(); 
  return;
}


if(input > 0){
  console.log('positive integer');
} else if(input < 0){
  console.log('negative number');
} 

    // 다음 프롬프트 띄우기
    process.stdout.write('number? ');

});




// x = input;
  

//   while(true) {

//   if(x > 0) 
//     console.log(`number? ${x}\npositive integer`); 

//   else if(x < 0)
//     console.log(`number? ${x}\nnegative number`);

//   else
//    break;
// }

