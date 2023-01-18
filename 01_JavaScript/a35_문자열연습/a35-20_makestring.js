/*******************************
 * 단어의 앞글자로 만들어진 문자열 생성
 */

const input = [
    "The community at Code States might be the biggest asset", // -> TcaCSmbtba
    "i am a PROGRAMMER",     // -> iaaP
    "THAT ELEPHANT IS BIG",  // -> TEIB
]

function makeString(str){

    const result = [];
    str.split(/\s+/).forEach(e => {
       result.push(e[0]);
  
    });
    return result.join("");

}



    



    


    


input.forEach(e => console.log(makeString(e)));