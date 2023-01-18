/*******************************
 * 문자열 시프팅 차이값
 */

const input = [
// [first, second]
    ["hello", "hello"],    // 0
    ["hello", "ohell"],    // 1
    ["hello", "lohel"],    // 2
    ["hello", "llohe"],    // 3
    ["hello", "elloh"],    // 4
    ["hello", "elohl"],    // -1





]

function shiftedDiff(first, second){
        return first.length == second.length ? (second + second).indexOf(first) : -1;
}

input.forEach(e => console.log(shiftedDiff(e[0], e[1])));