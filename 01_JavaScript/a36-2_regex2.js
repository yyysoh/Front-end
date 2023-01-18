/* 정규표현식 에 사용하는 각종 표현식들
 * 	정규표현식		설명
 * 	^			문자열 시작
 * 	$			문자열 종료
 * 	.			임의의 문자 [단 ‘'는 넣을 수 없습니다.]
 * 	*			앞 문자가 0개 이상의 개수가 존재할 수 있습니다.
 * 	+			앞 문자가 1개 이상의 개수가 존재할 수 있습니다.
 * 	?			앞 문자가 없거나 하나 있을 수 있습니다.
 * []			문자의 집합이나 범위를 표현합니다. -기호를 통해 범위를 나타낼 수 있습니다. ^가 존재하면 not을 나타냅니다.
 * {}			횟수 또는 범위를 나타냅니다.
 * ()			괄호안의 문자를 하나의 문자로 인식합니다. (그룹)
 * |			패턴을 OR 연산을 수행할 때 사용합니다.
 * \s			공백 문자
 * \S			공백 문자가 아닌 나머지 문자
 * \w			알파벳이나 숫자
 * \W			알파벳이나 숫자를 제외한 문자
 * \d			[0-9] 숫자
 * \D			숫자를 제외한 모든 문자
 * 
 * 
 * 정규표현식에 사용되는 escaped character 들
 *    \.[]{}()<>*+-=!?^$|
 */

// 도우미 메소드
function regExpTest(regex, input){
    console.log("[정규표현식 매칭 테스트]-----------------");
    console.log("정규표현식:", regex);
    console.log("입력문자열:", input);

    let matches = input.matchAll(regex);  // 매칭 수행

    let matchCount = 0;
    for(let match of matches){
        matchCount++;
        console.log(`    매치${matchCount}: ${match[0]} {${match.index}~${match.index + match[0].length}}`);
        // 그룹이 있다면 그룹도 출력        
        if(match.length > 1){
            let start = match.index;
            for(let i = 1; i < match.length; i++){
                if(match[i]){  // group 결과가 undefine 가 아닌 경우
                    console.log(`\t group(${i}): ${match[i]} {${start}~${start + match[i].length}}`);
                    start += match[i].length;
                }
            }
        }
    }
    
    (matchCount == 0) && console.log(" X매치 없슴X");
    
    console.log();
}

function test(regex, arrInput){ //문자열 배열을 넣을 것
    for(input of arrInput) regExpTest(regex, input);
}

//--------------------------------------------------
let title, regex, arrInput;

{
    //─────────────────────────────────────────
    title = "^ : 바로 문자뒤의 문자열로 시작됨";
    regex = "^The"; //The 로 시작하는 패턴, 문자열도 가능하다
    arrInput = [
        "The Things",
        "On The Things", //the로 시작해야 함 이건 안됨
        " The The The", //앞에 공백 있어서 안됨
        "Tjere you go",
    ];

    //─────────────────────────────────────────
    title = "$ : 문자열의 마지막이 이 문자열로 마무리 됨";
    regex = "Man$"; //Man으로 끝나는 패턴 
    arrInput = [
        "SuperMan",  // 1
        "AquaMan",   // 2
        "WonderWoman",  // 3 소문자
        "WonderWoMan",  // 4
        "PostMan ",   // 5 공백

    ];

    //─────────────────────────────────────────
    title = "^표현식$ : 정확하게 전체패턴매칭되는 문자열";
    regex = "^SuperMan$";
    arrInput = [
        "SuperMan", //얘만 매칭됨
        "Super Man",
        " SuperMan",
        "SuperMan ",
 

    ];

    //─────────────────────────────────────────
    title = " . : 어떤 문자든지 임의의 '한문자'를 말한다.꼭 하나의 문자와 매칭";
    regex = "x.z"; 
    arrInput = [
        "xyz", //매칭 o
        "xxzdfdk", //o
        "aa10x9zbxbz", //o
        "xz",
        "90x zxx_zdf",  //x z와 x_z o
        "xbz",  //o          
        "xyyz",

    ];

    //─────────────────────────────────────────
    title = " * : 바로 앞의 문자가 없거나 한개 이상의 경우를 매칭";
    regex = "ab*"; //a로 시작하고 b가 없거나 여러 개 나올 경우
    arrInput = [
        "a",  // 1
        "abc", // 2 ab까지 매칭됨
        "ab", // 3
        "abbbaaaabababbab", // 4 abbb a a a ab ab abb ab
        "bbba",  // 5
        "cdef",  // 6
 


    ];

    //─────────────────────────────────────────
    title = " + : 바로 앞의 문자가 꼭 한개 혹은 그 이상을 매칭"; 
    regex = "ab+";
    arrInput = [
        "a",  // 1
        "abc", // 2 
        "ab", // 3
        "abbbaaaabababbab", // 4 //a는 꼭 있어야 함 abbb,ab, ab,abb,ab
        "bbba",  // 5
        "cdef",  // 6
 
    ];

    //─────────────────────────────────────────
    title = " ? : 바로 앞의 문자가 한개 있거나 없는것을 매칭";
    regex = "ab?";
    arrInput = [
        "a",  // 1
        "abc",  // 2
        "kkabcc",  // 3
        "abbbaaaabababbab", // 4 ab,a,a,a,ab,ab,ab,ab
        "bbba"  // 5
 

 
    ];

    //─────────────────────────────────────────
    title = " [] : 안에 존재하는 문자들중 한 문자만을 매칭";
    regex = "[abc]"; //a 또는 b 또는 c 중에 한 문자에 매칭
    arrInput = [
        "able", // 1 a b
        "bible",  // 2 b b
        "cable",  // 3 c a b
        "xenosys", // 4 없음


    ];

    regex = "[abc]+"; //하나 이상 매칭 cable은 cab

    regex = "[a-z]+" //a부터 z까지. 통째로 매칭
    arrInput = [
        "abc100", //abc
        "abcDefGHIUJ-KLM123opQrstuz", //소문자
        "가나abc다힣",
    ];

    regex = "[a-zA-Z]+"; //3개 나옴
    regex = "[a-zA-Z0-9]+"; //2개 나옴
    regex = "[a-zA-Z0-9-]+"; //1개 나옴
    regex = "[가-힣]+"; //2개 나옴
    regex = "[0-9]+"; //없음 왜??

    

    //─────────────────────────────────────────
    title = " {} : 앞에 있는 문자나 문자열의 등장개수를 정함";
    regex = "ab{2}"; //b가 두개인 것
    arrInput = [
        "abb", //abb
        "abbb", //abb
        "abbbabbbbbbbbabaabab",

    ];
    
    regex = "ab{2, }"; //b의 개수가 2개 이상 2개 나옴 abbb, abbbbbbb 왜??? 뒤에는 안됨?
    regex = "ab{3, 5}"; //b의 개수가 3개에서 5개까지


    //─────────────────────────────────────────
    title = " | : OR 연산자  역할";
    regex = "a(bc)*"; //(bc)가 없거나 하나 이상
    arrInput = [
        "abc",
        "abcbcbbac",
        "abcabcabc",
 

    ];		

    //─────────────────────────────────────────
    title = " | : OR 연산자  역할";
    regex = "a|b" //a 또는 b;
    arrInput = [
        "a",
        "b",
        "ab", //a랑 b 각각
        "xyz",

    ];		

    regex = "(a|b)+"; //"ab"는 한개로
    //─────────────────────────────────────────
    title = "i옵션 : 대소문자 구분안하고 매칭 ";  // 타 언어 정규표현식과 다름
    regex = /abc/ig; //대소문자 구분 없이 전체로
    arrInput = [
        "abc", "Abc", "ABC",
    ];

    //─────────────────────────────────────────
    title = "\\s : 공백,  \\S : 공백아닌 문자";   // 공백 : 띄어쓰기, \n, \t, \r ...  // 두개 쓴 이유(이스케이프 문자) : 문자열 내에서 역슬래시 출력하기 위해
    regex = /\s+/g; //공백이 한 개 이상
    arrInput = [
        "Hello My World",
        "He \tllo My World",
        "\n\t Hello My World\n\n",
 
    //split(/\s+/g) : 공백을 기준으로 배열 만들기

    ];
    regex = /\S+/g; //대문자로도 출력됨

    //─────────────────────────────────────────
    title = "\\w : 알파벳이나 숫자, \\W 알파벳이나 숫자를 제외한 문자";
    regex = /\w+/g;
    arrInput = [
        "This is 2022-08-03!!", //5개 매칭

    ];
    regex = /\W/g; //공백, 기호 포함
    regex = "\\W+"; //문자열 안엔 \\ 이스케이프 문자. 문자열은 g 포함되어 있음 전체 출력


    //─────────────────────────────────────────
    title = "\\d : [0-9] 숫자, \\D 숫자를 제외한 모든 문자";
    regex = /\d+/g;
    arrInput = [
        "This is 2022-08-03!!", //3개
    ];

    regex = /\D+/g; //4개 나옴

    //─────────────────────────────────────────
    title = "escaped character 매칭 시키기";
    //regex = ".+";//전체가 나옴 .. 특수한 기능을 하는 이스케이프 문자, 임의의 문자가 한 개 이상
    //regex = "[.]+"; //..만 나옴
    regex = /\.+/g; //.. 나옴  .으로 인식함
    
    arrInput = [
        "My name is ..", 
    ];

}


//*****************************************
// 패턴매칭 수행
console.log(title);
test(regex, arrInput);

console.log("\n[프로그램 종료]", '\n'.repeat(10));


