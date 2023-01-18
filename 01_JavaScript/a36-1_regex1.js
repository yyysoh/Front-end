/* 정규표현식 (reqular expresson)
 *
 * 문자열 검색, 치환  등의 동작에 있어서
 * 단순한 '문자열 비교' 를 하는 것이 아니라 
 * 특정 '패턴'과 비교하고자 할때 이를 단 몇줄의 코드로 구현 가능! 패턴을 정의한 것!!!!!!!!!!!!!!
 * 주어진 문자열에서 패턴을 찾아내는 것을 '패턴 매칭(pattern matching)' 이라 함
 * 
 * 사용자가 입력한 문자열 패턴 유효성 체크 등에 많이 사용
 * 		ex) 주민등록번호, URL, email, 비밀번호, 
 * 			날짜포맷(yyyy-mm-dd) 
 * 			전화번호(010-xxxx-xxxx) ... 
 *
 *  JavaScript 는 정규표현식 객체 (RegExp)를 사용하여 정규표현식을 다룬다
 *  
 *  정규표현식 객체 리터럴 구문
 *     /pattern/modifiers
 *
 * 정규표현식을 사용하는 주요 string 메소드
 * 주로 검색, 치환 등의 동작을 수행할때 사용된다.
 *    search(), replace(), split() ...
 * 
 * RegExp 의 주요 메소드
 *   exec() : 패턴매칭 수행후 '첫번째 매치' 리턴 (object 로 리턴)
 *            매칭이 없으면 null 리턴
 *   test() : 패턴매칭 결과 리턴 true / false
 *   toString() : 정규표현식 문자열 리턴
 *   compile()  <-  v1.5 에서 deprecated 됨
 * 
 * string 의 정규표현식 패턴매치 메소드
 *  match(), matchAll()
 *
 * RegExp 공식
 *   https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 *
 * 참조
 *  https://www.w3schools.com/js/js_regexp.asp
 *  https://www.w3schools.com/jsref/jsref_obj_regexp.asp
 *
 * 정규표현식 연습 사이트 추천
 * : https://regexr.com/    (정규식 , 문자열 매칭 연습)
 * : https://regexone.com/  ( step by step 으로 연습 하기 좋음)
 * : https://regexper.com/  (특징: 시각화, 정규식을 이미지로 다운가능)
 */
let text, n, pattern, result;

console.log('[정규표현식을 사용하는 string 메소드 예]');
text = "Hello JavaScript";

// TODO

// search(string) <- 해당  'string' 을 문자열에서 찾는다
console.log(text.search('JavaScript')); //찾은 인덱스가 나온다 못찾으면 -1 있으면 0부터 
console.log(text.search('javaScript')); //찾은 인덱스가 나온다 못찾으면 -1 있으면 0부터 

// search(RegExp) <- 해당 정규표현식 패턴(RegExp) 을 문자열에서 찾는다
console.log(text.search(/JavaScript/)); //문자열 아님 패턴
console.log(text.search(/javaScript/)); //문자열 아님 패턴
console.log(text.search(/javaScript/i)); //문자열 아님 패턴, i 대소문자 구분 없이 찾음



// replace(str1, str2)
// str1 을 문자열에서 찾아 str2 로 치환
console.log(text.replace('JavaScript', 'RegularExpression'));
console.log(text.replace('javascript', 'RegularExpression'));


// replace(RegExp, str2)
// 정규표현식 패턴(RegExp) 을 문자열에서 찾아 str2 로 치환
console.log(text.replace(/JavaScript/, 'RegularExpression')); //문자열이 아니라 정규 표현식
console.log(text.replace(/javaScript/i, 'RegularExpression')); //자바 스크립트라는 패턴을 찾는 것
 

 







/**********************************************
 * JavaScript RegExp 리터럴의 modifier 들
 *
 * i : case-insensitive matching  (대소문자 구분 X)
 * g : global matching 수행  (첫번째 매칭뿐 아니라 전체 매칭 수행)
 * m:  multiline matching 수행
 */

/* 정규표현식 메소드
 *
 *   exec() : 패턴매칭 수행후 '첫번째 매치' 리턴 (object 로 리턴)
 *            매칭이 없으면 null 리턴
 *   test() : 패턴매칭 결과 리턴 true / false
 */

console.log('-'.repeat(20));
console.log('[정규표현식 메소드 예]');
text = 'The best things in life are free!';

// TODO
pattern = /e/; //패턴은 정규표현식 객체

console.log(pattern.test(text)); //매개변수 text 안에서 pattern 매칭 text 안에서 pattern이 있냐 결과는 t/f로 나옴

console.log(pattern.exec(text)); //object로 리턴
console.log(pattern.exec(text)[0]); //object로 리턴 얘도 인식돼서 e로 나옴



/************************************
 * 그룹이 지정된 경우
 */
console.log('-'.repeat(20));
console.log('[그룹]')
text = "-My98KK-myABCD--My1234567--MyZZ---My789";

// TODO
pattern = /My..../; //그룹이 없는 정규표현식. 정규표현식에서 .은 문자 하나에 매칭(임의의 문자) 3개 해당됨
console.log(pattern.exec(text)); //exec 첫번째꺼 매칭
console.log(pattern.exec(text).length);

pattern = /(My)(....)/;  //정규표현식에서 패턴 그룹 지정은 괄호 '()' 그룹이 두;개있단 것
console.log(pattern.exec(text));; //전체 나온 다음 세부적으로 나옴 그룹 두개 나옴
console.log(pattern.exec(text).length); // 3 : length 값이 1보다 크면 그룹이 지정되어 있다는 뜻




/***************************
 * match(), matchAll() 
 *   string 의 메소드
 *   string 안에서 정규표현식 패턴 매칭 수행
 * 
 *   match() 는 매칭되는 문자열(들)의 배열을 리턴
 *   matchAll() 은 전체 매칭결과(들)에 대한 iterator 리턴
 *       - RegExp 는 반드시 g 옵션이 있어야 한다.
 */
console.log('-'.repeat(20));
console.log('[string 의 match(), matchAll()]')
const str = '-My98KK-myABCD--My1234567--MyZZ---My789';

// TODO
const regexp = /(My)(....)/g;//매칭되는 문자열의 배열을 리턴, 배열로!!!!
console.log(regexp);
console.log(regexp.toString());

result = str.match(regexp); 
console.log(result.length);
console.log(result);


result = str.matchAll(regexp); //매칭된 결과들의 iterator 리턴. for로 돌릴 수 있다
console.log(result.length); //length 확인 불가
console.log(result); //Object [RegExp String Iterator] {}. 배열이 아니고 iterator 객체


for(match of result) {
    console.log(match) //exc 결과 하지만 그건 첫 결과만 나오나 여긴 3개의 오브젝트를 이터레이터에 담아서 출력
}







//-----------------------------------
// 도우미 함수
console.log('-'.repeat());
console.log('[도우미 함수]');

// TODO
//const str = '-My98KK-myABCD--My1234567--MyZZ---My789';
function regExpTest(regex, input){
    console.log("[정규표현식 매칭 테스트]-----------------");
    console.log("정규표현식:", regex);
    console.log("입력문자열:", input);
  
    let matches = input.matchAll(regex); //매칭 수행
    let matchCount = 0;
 
    for(let match of matches) { //match가 오브젝트로 촤르륽 나옴
        matchCount++;
        console.log(`    매치${matchCount} : ${match[0]} {${match.index}~${match.index + match[0].length}}`) //1번부터 7번 전까지 매칭됐다
       
    }

    //그룹이 있었다면 그룹도 출력
    if(match.length > 1){
        let start = match.index;
        console.log(`match = ${match}`)
        for(let i = 1; i < match.length; i++){
            if(match[i]){   // group 의 결과가 undefined 가 아닌 경우
               console.log(`start : ${start}`);  
               console.log(`\t group(${i}): ${match[i]} {${start}~${start + match[i].length}}`);
                start += match[i].length;
            }
        
    } // end if
}  // end for

(matchCount == 0) && console.log(" X매치 없슴X");
console.log();

} //end function





regExpTest(/My..../g, str);
regExpTest(/(My)(....)/g, str);
regExpTest(/My(....)/g, str);
regExpTest("My(....)", str);  // 걍 문자열로 졍규표현식 주면 global 로 동작.
regExpTest(/aaaa/g, str);



console.log("\n[프로그램 종료]", '\n'.repeat(5));