/*******************************
 * 연속되지 않은 글자 출력 unique in order
 */

const input = [
    "all good tree", //a,l, ,g,o,d, ,t,r,e 앞에 l이 있었으면 공백 o도 앞에 있었으니 출력 안함
]

function uniqueInOrder(str){

    // TODO
    //console.log(str.split(/\s+/))

    arr = str.split("");
    console.log(arr)
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] == arr[j]) {
                arr.splice(j, 1) //j부터 1개 제거
            }
     
        }
    }
      

    return arr;
    
}

input.forEach(e => console.log(uniqueInOrder(e)));