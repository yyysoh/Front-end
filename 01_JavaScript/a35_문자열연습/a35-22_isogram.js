/*******************************
 * isogram : 중복글자 없는 단어
 * isogram 여부 판단하기 (true/false) 대.소문자 구분 안함
 */

const input = [
    "Dermatoglyphics", // -> true
    "programmer",      // -> false
    "Correct",         // -> false
    "isogram",         // -> true
]

function isIsogram(str){

    
    // TODO
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < str.length; j++) {
            if(str[i] == str[j]) {
                return false;
            }
           
        }
    }

     return true;

}

input.forEach(e => console.log(isIsogram(e)));