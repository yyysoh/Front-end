// 정수값 여러개 입력받기
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = undefined;

let arr1 = [];
let arr2 = [];
let linenum = 0;

console.log('first array');

// 입력시 줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){  // 사용자가 입력한 line (string)
    input = line.trim().split(/\s+/).map((e) => parseInt(e));
    if(linenum < 2){
        arr1.push(input);
    } else if(linenum < 4){
        arr2.push(input);
    }
    linenum++;
    (linenum == 2) && console.log('second array');
    (linenum == 4) && rl.close();
});

// 입력완료 close시 수행할 코드 등록
rl.on("close", function(){
    // console.log('arr1', arr1);
    // console.log('arr2', arr2);

    let row, col;
    for(row = 0; row < arr1.length; row++){

        result = [];
        for(col = 0; col < arr1[row].length; col++){
            result.push(arr1[row][col] * arr2[row][col])
        }
        console.log(result.join(' '));

    }
});