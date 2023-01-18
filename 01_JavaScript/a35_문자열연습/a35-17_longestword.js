/*******************************
 * 가장 긴 단어 찾기
 */

const input = [
    "I am a Student",     // ->  Student
    "That elephant is big",  // -> elephant
]

function longestWord(str){

    return str.split(/\s+/).reduce((e, i) => {
       return  e.length < i.length ? i : e
    })

     


}


input.forEach(e => console.log(longestWord(e)));