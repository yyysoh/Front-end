/*******************************
 * 영어문장에서 각 단어 첫글자만 대문자 만들기
 */

const input = [
    "i am a PROGRAMMER",     // -> I Am A Programmer
    "THAT ELEPHANT IS BIG",  // -> That Elephant Is Big
]

function letterCapitalize(str){


    //방법1
    // str = str.toLowerCase(); //일단 소문자로 변환 문자열은 immutable 이기에 꼭 덮어야해서 str = 한 것
    // let arr = str.trim().split(/\s+/); //공백으로 단어 쪼개기


    // let result = [];
    // for(let i = 0; i < arr.length; i++) { // 각 단어 별로
    //     let first = arr[i].charAt(0); //첫 글자
    //     let rest = arr[i].slice(1); //두번째(나머지)
    //     first = first.toUpperCase();

    //     result.push(first + rest);
    // }

    // return result.join(" ");



    // //방법2
    // const result = [];
    // str.split(/\s+/).forEach(e => {
    //    result.push(e[0].toUpperCase() + e.slice(1).toLowerCase());
    // });
    // return result.join(" ");



    const result = [];
    str.split(/\s+/).forEach(e => {
       result.push(e[0].toUpperCase() +e.slice(1).toLowerCase());
       
    });
    return result.join(" ");


}

input.forEach(e => console.log(letterCapitalize(e)));