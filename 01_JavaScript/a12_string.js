/* string 문자열 데이터
 *
 * string reference
 *  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
 *  https://www.w3schools.com/jsref/jsref_obj_string.asp
 */
let str, str1, str2, str3;

/*******************************
 * 문자열 생성 
 * 
 * 방법1. 문자열 리터럴.  "~" 혹은 '~' 으로 생성
 * 방법2. new String() 으로 정의 (비추)
 */
console.log("[문자열 생성]");


str = "Volvo";
str = 'Volvo';

//new 사용
str1 = "John";
console.log(str1, typeof str1); //String
str2 = new String("John");
str3 = new String("John");
console.log(str2, typeof str2); //[String: 'John'] object 오브젝트 타입으로 나옴
console.log(str1 == str2); //true
console.log(str1 === str2); //false
console.log(str2 == str3); //false (JS에선 object끼리의 비교는 언제나 false)

console.log('-'.repeat(20));

//문자열 리터럴 중간에 자르기
str = "Hello web Application";
console.log(str);
str = "Hello Web Appli\
cation"; //만에 하나 나눠서 입력해야 하면 \ 사용 하지만 비추
console.log(str);

//굳이 하려고 한다면
str = "Hello Web Appli" +
"cation"; //안전 하에 이와 같이 하거나, 혹은 template literal 사용
console.timeLog(str);



//.length
console.log("length : 문자 개수");
str = "ABCDEFGHIJKLMNOPQRSTUVWSYZ";
console.log(str.length);
str = "가나다라";
console.log(str.length);






/******************************************
 * String 의 메소드들
 * 기본적으로 string 의 대부분의 메소드들은 immutable 하다. 
 * 즉 원본을 변화시키기 않고, 새로운 string 을 만들어 리턴한다.
 * 
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String#%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4_%EB%A9%94%EC%84%9C%EB%93%9C
`*
`* immutable : 데이터를 변경할 수 없는 특성
`* mutable : 데이터를 변경할 수 있느 특성
*/





/******************************************
 *  문자열 안에서 문자열 찾기
 *  indexOf(), lastIndexOf(), search()
 *    찾은 위치 인덱스 리턴, 못찾으면 -1 리턴
 * 
 *  includes() : 찾으면 true 리턴
 *  startsWith(searchValue, start) : 주어진 문자열로 시작하면 true 리턴
 *  endsWith(searchValue, length): 주어진 문자열로 끝나면 true 리턴
 */
console.log('-'.repeat(20));
console.log("[문자열 검색 indexOf(), lastIndexOf(), search(), includes()]");
str = "Please locate where 'locate' occurs!";

console.log(str.indexOf("locate")); //7번째에서 찾았다
console.log(str.lastIndexOf("locate")); //21번째 역방향 검색
console.log(str.indexOf("John")); //-1 의 결과가 나온다 못찾았기에
console.log(str.indexOf("locate", 15)); //15번째부터 검색해서 locate 찾기
console.log(str.lastIndexOf("locate", 15)); //15번째부터 역방향 검색해서 locate 찾기


// search() : 문자열 안에서 문자열 찾기
console.log(str.search("locate")); //7


// search() vs indexOf() : 둘은 다르다!
//  search() : 두번째 매개변수 없다, regexp 사용가능
//  indexOf() : regexp 사용 불가


console.log(str.includes("locate")) //true
console.log(str.includes("abc")) //false


console.log(str.startsWith("Please")); //true 
console.log(str.startsWith("please"));//false, 대소문자 구분

console.log(str.endsWith("occurs"));
console.log(str.endsWith("occurs!"));


/***********************************************
 *  문자열 추출
 *  slice(start, end) : start 부터 'end직전'까지 문자열 추출
 *  substring(start, end)
 *  substr(start, length) : start 부터 length 개의 문자 추출
 */
console.log('-'.repeat(20));
console.log("[문자열 추출 slice(), substring(), substr()]");
str = "Apple, Banana, Kiwi";
console.log(str);

console.log(str.slice(7, 13)); //7부터 13번 이전까지
console.log(str) //변함없이 원본 그대로 출력. 원본은 변화되지 않는다
console.log(str.slice(-12, -6)); //오른쪽에서부터 출력
console.log(str.slice(7)); //7부터 끝까지
console.log(str.slice(-12)); //-12부터 끝까지



console.log(str.substring(7, 13)); //slice()와 유사하나 음수인덱싱 지원 안함
console.log(str.substring(7));


console.log(str.substr(7, 6)); //7부터 6글자 뽑아냄
console.log(str.substr(7)); //7부터 끝까지
console.log(str.substr(-4)); //-4부터



/*******************************
 * 문자열 치환
 *  replace() : 치환한 결과 문자열 리턴, 정규표현식 사용 가능
 *  기본적으로 첫번째 '매칭된 문자열 만 치환
 */
console.log('-'.repeat(20));
console.log("[문자열 치환 replace()]");

str = "Please visit Japan!";


console.log(str.replace("Japan", "Korea")); //바뀐걸로 결과 나오지만
//원본엔 아무 변화 없음. 리턴값만 바뀐 것이다
console.log(str); //str엔 변경되지 않는다
//`* immutable : 데이터를 변경할 수 없는 특성이기 때문이다
console.log(str.replace("JAPAN","korea")); //변경되지 않는다(대소문자 구분)
console.log(str.replace(/JAPAN/i,"korea"));  //정규표현식 : /JAPAN/i <- 대소문자 구분 없이 문자 찾아서 korea로 변화시키는 것
                                             // i: case insensitive 

 str = "Please visit Japan! Go Japan";
 console.log(str.replace("Japan", "Korea")); //기본적으로 첫번째 매칭만 치환됨
 console.log(str.replace(/Japan/g, "Korea")); //정규표현식, g : gloval match (전체를 뒤져 찾아내 치환함)


/*********************************
 * 대소문자 전환
 *  toUpperCase(), toLowerCase() 
 */
console.log('-'.repeat(20));
console.log("[대소문자 전환 toUpperCase(), toLowerCase()]");
str = "Hello World!";

console.log(str.toUpperCase());
console.log(str.toLowerCase());
 


/*********************************
 * 문자열 연결 
 *  concat()
 */
console.log('-'.repeat(20));
console.log("문자열 연결 concat()");
str1 = "Hello";
str2 = "World";
 
console.log(str1 + " " + str2);
console.log(str1.concat(" ", str2));
console.log("a".concat("b", "c", "d"));



/**********************************
 * 좌우 공백 제거 
 *  trim()
 */
console.log('-'.repeat(20));
console.log("좌우 공백 제거 trim()");
str = "       Hello World!        ";

console.log(`[${str}]`);
console.log(`[${str.trim()}]`); //공백 제거됨
console.log(str.trim()); //오 얘도 된당!




/************************************
 * 문자열 앞/뒤로 패딩문자 추가
 *  padStart(), padEnd()
 *  ECMA2017 에서 추가 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 */
console.log('-'.repeat(20));
console.log('[문자열 앞/뒤로 패딩문자 추가]');
str = "5";

console.log(str);
console.log(str.padStart(4)); //앞에 공백 3개 발생. 우측 정렬된 것처럼 보인다 "   5"
console.log(str.padStart(4, "x")); //"xxx5" 비어진 공간이 x로 채워진다
console.log(str.padEnd(4)); //"5    " 오른쪽에 3개의 공백. 좌측 정렬된 걸로 보인다
console.log(str.padEnd(4, "x")); //"5xxx"
console.log(str.padStart(10, "*-")); //*-*-*-*-*5


// number 를 5자리 + 우측정렬로 표시하기
let num1 = 11, num2 = 2345, num3 = 761;
// -----

console.log(num1.toString().padStart(5));
console.log(num2.toString().padStart(5));
console.log(num3.toString().padStart(5));


// 실수 number 를 소숫점2자리 + 총7자리 + 우측정렬 표시하기
num1 = 3.141592, num2 = 1234.2, num3 = 65.548
// -------


console.log(num1.toFixed(2).toString().padStart(7)); //toFixed는 string으로 리턴됨 고로 toString 안해도 됨
console.log(num2.toFixed(2).toString().padStart(7));
console.log(num3.toFixed(2).toString().padStart(7));






/***********************
 * 문자 코드
 *  charAt(position)
 *  charCodeAt(position)
 *  Property access [ ] 
 */
console.log('-'.repeat(20));
console.log("[문자 코드 [ ], charAt(), charCodeAt()]");
str = "HELLO WORLD";

console.log(str.charAt(0)); //H
console.log(str.charAt(100)); //범위 벗어나면 아무것도 출력 안됨 undefined도 안나옴 빈문자열

console.log(str.charCodeAt(0)); //0번째 코드 값이 나온다 72 : UTF-16 코드, 아스키 코드 A : 65 a : 97

console.log(str[0]); //H
console.log(str[100]); //undefined가 나온다 얘는! 우잉?

str[0] = 'Y'; //에러 발생 안함 그러나 변경되지도 않는다
console.log(str); //교체 안됨! 어지간한 프로그래밍은 다 immuable(c언어 빼고)
//string은 immutable이니까!!!!!!




/************************
 * 문자열 대소 비교
 */

console.log("a" < "b");
console.log("a" > "b");


//1. bible
//2. cable
//3. table
//4. able
 // => 오름차순 4-1-2-3 a부터

 //1. AaAa
//2. aaAA
//3. AAaa
//4. aAaA
 
// => 2-4-1-3 //소문자 아스키 코드 숫자가 더 커서 소문자가 대문자보다 크다
// A = 75 a = 97

console.log("a" > "A");


//charCodeAt란?
console.log("가힣".charCodeAt(0));
console.log("가힣".charCodeAt(1));



/*********************************
 * string ↔ array
 *   string -> array : split()  str의 메소드,  정규표현식(regexp) 사용 가능
 *   array -> string : join()   array 의 메소드
 */

 console.log('-'.repeat(20));
 console.log("[string ↔ array]");
 str = "2022-11-23"; 

let arr = str.split('-'); //쪼개진 문자열은 배열로 리턴한다
console.log(arr);
console.log(arr.length);
console.log(arr[0]);

str = "Hello";
console.log(str.split(""));

str = "Hello My World";
console.log(str.split(" "));


str =  "      Hello  My       World    "; //이런 저런 공백들을 사용해서 하므로 정규 표현식을 사용
console.log(str.split(" "));
// [
//   '',      '',   '',
//   '',      '',   '',
//   'Hello', 'My', '',
//   '',      '',   '',
//   '',      '',   'World',
//   '',      '',   '',
//   ''
// ]


console.log(str.trim().split(/\s+/)); //정규표현식 사용. 문장을 공백 기준 단어 쪼갤 때. 이렇게 쓴다!!!!
 // ↑ 문장을 단어별로 split 할때는 이와 같이 하자
//!!!!!!!???????????????????????split(/\s+/) 뭘까




arr = ["2022", "07", "28"];
console.log(arr.join("-")); 

arr = ["H", "e", "l", "l", "o"];
console.log(arr.join("_")); //H_e_l_l_o
console.log(arr.join("")); //Hello





// 응용: 문자열 뒤집기.  


str = "자바스크립트";
console.log(str);
console.log(str.split("")); //여기까진 배열
console.log(str.split("").reverse()); //배열의 원소가 반대
console.log(str.split("").reverse().join("")); //그걸 조인






console.log("\n[프로그램 종료]", '\n'.repeat(20));


























