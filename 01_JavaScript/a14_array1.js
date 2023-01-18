/* 배열 array 타입
    여러개의 데이터를 담는 집합자료형
    
    array literal 은   [item1, item2, ...   ]  으로 만든다
    array 의 데이터(원소) 들은 , 콤마로 구분한다
    각 데이터(원소) 들은 어떠한 타입도 가능하다

    배열의 길이 (length)
 		배열 원소의 개수, 즉 배열에 담긴 데이터의 개수 
 		
 	배열 인덱스 (첨자, index)
 		배열의 인덱스는 0부터 시작해서, (배열의 길이 - 1)까지가 됨
 		배열인덱스를 사용하여 배열원소에 접근하여 사용


    배열변수는 일반적으로 const 로 선언한다.

    Array reference
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
    https://www.w3schools.com/jsref/jsref_obj_array.asp
*/

// console.log('[왜 배열(array) 이 필요한가?]');

let kor1 = 77;
let kor2 = 93;
let kor3 = 23;
// ..
// 동일 타입 데이터(들)을 위해 매번 새로운 이름의 변수 생성 불가.





/****************************************
 * 배열생성 방법
 *  방법1 : [ ... ] 
 *  방법2 : new 사용
 */
console.log('-'.repeat(20));
console.log("[배열생성]");

// 배열생성 방법
// 방법1
let points = [40, 100, 1, 5, 25, 10];
let fruits = ["Banana", "Orange", "Apple", "Mango"];


// 방법2 : new 사용
let cars = new Array("Saab", "Volvo", "BMW"); //new 비추

console.log(points); //[ 40, 100, 1, 5, 25, 10 ]
console.log(points.toString()); //40,100,1,5,25,10
console.log(`points = ${points}`);

console.log(typeof points); //배열은 object의 한 종류. object

arr1 = [10, 20, 30];
arr2 = [10, 20, 30];
console.log(arr1 == arr2); //object는 비교가 안된다


//일반적으로 배열은 const로 선언한다
const animals =[
    'tiger',
    'dog',
    'cat', //마지막 원소 뒤에 콤마,

];



/********************************************
 * 배열 여부 판단 하기
 * 현재 배열인지 아닌지 확인하기
 * 방법1: Array.isArray() : 구 브라우저에서는 동작 안함  (ES5.1부터)
 * 방법2: constructor 사용 구 브라우저에서 동작시키려면 별도희 함수 만들어 사용
 * 방법3: instanceof 연산자 사용
 */
console.log('-'.repeat(20));
console.log("[배열여부 판단]");

// 방법1
console.log(Array.isArray(fruits));

// 방법2
// TODO

// 방법3
console.log((fruits instanceof Array));
//배열입니까? true


/*****************************************
 * 배열원소, index, length
 *  배열의 원소를 사용하기 위해 index 사용
 *  배열 index 는 0 부터 시작 (0-base index)
 */
console.log('-'.repeat(20));
console.log('[배열원소, index, length]');

console.log(fruits);
console.log(fruits[0], typeof fruits[0]);

//없는 index, undefined
//음수 index 지원 안함
console.log(fruits[100], fruits[-1]);

// .length
console.log(fruits.length, [10, 20, 30, 40, 50, 60].length);

//배열 원소 변경
fruits[3] = 'Pineapple';
console.log('변경 후 ', fruits); //문자열은 변경 안됐는데 배열은 변경 가능
fruits[fruits.length - 1] = 'Mango'; //마지막 원소 변경
console.log('변경 후 ', fruits);
//배열은 'mutable' 하다! 안에 있는 내용 변경 가능하니까

console.log('animals: ', animals);
animals[0] = 'Lion';
console.log('animals: ', animals);


// const 로 선언한 배열은
// 배열 변수를 더이상 변경 못한다는 뜻이지
// 배열 원소는 얼마든지 변경 가능하다.



/**************************************
 * 배열원소 추가, 제거
 *  push() : 배열끝 원소 추가
 *  pop() : 배열 끝 원소 추출 (배열에서 제거). 추출할 원소가 없으면 undefined 리턴
 *  shift() : 배열 첫 원소 추출 (배열에서 제거)
 *  unshift() : 배열앞에 원소 추가, 새로운 length 리턴
 * 
 *  shift, unshift 는 pop, push 보다 성능이 느리다!
 */
console.log('-'.repeat())
console.log("[push() pop() shift() unshift()]");
console.log(fruits);

fruits.push('Grape');
console.log('push() 후', fruits);
console.log(fruits.length);


console.log('pop() 결과', fruits.pop());  // 배열 마지막원소 리턴
console.log('pop() 이후', fruits);

console.log('shift() 결과', fruits.shift());
console.log('shift() 이후', fruits);
console.log('unshift() 결과', fruits.unshift('Grape'));
console.log('unshift() 이후', fruits);

console.log([].pop(), [].shift()); //undefined 나옴 비어있는 배열에서 꺼내려고 하면



/**************************************
 * 데이터 삭제, 삽입 splicing
 *  첫번째 매개변수 : 삭제할 데이터 위치 (start)
 *  두번째 매개변수 : 삭제될 데이터 개수 (deleteCount)
 *  세번째 이후 .. : 삽입될 데이터 들..
 *  리턴값: 삭제된 원소들의 배열
 */
console.log('-'.repeat(20));
console.log("데이터 삭제/삽입 splice()");
console.log(fruits);

//fruits.splice(1, 1); //1번째부터 1개 제거
//fruits.splice(1, 2); //1번째부터 2개 제거
//fruits.splice(1, 2, 'Peach'); //1번째부터 2개 제거, 제거된 위치에 삽입
fruits.splice(1, 2, 'Peach', '수박', 'Melon'); //1번째부터 2개 제거, 제거된 위치에 3개 삽입
console.log(fruits);
//삭제, 삽입을 동시에 할 수 있다

fruits.splice(3, 0, '딸기'); //0개 지워지는거니까 아무것도 안지워짐
console.log(fruits);

fruits.splice(3);   // 3번부터 끝까지 삭제됨
console.log(fruits);


// 주의! delete 를 사용하여 배열 원소 삭제 하지 말기
// 이는 배열에 구멍(undefined hole) 을 만들게 된다.
// delete 보다는 
// pop(), shift(), splice() 를 사용하길 ㅊㅊ



// delete fruits[1]; //배열 ㄴㄴ
// console.log(fruits); //[ 'Grape', <1 empty item>, '수박' ] 이렇게 하면 안됨




// arr1 = {
//     0:10, 
//     1:20, 
//     2:30,

// }

// console.log(arr1[0], arr1[1], arr1[2]); //특별한 형태의 object. delete로 날려먹으면 이젠 배열이 아니다




/**************************
 *  concat() 
 */
console.log('-'.repeat(20));
console.log("concat()");


console.log(fruits.concat(['두리안', '망고'])); //concat은 원본을 변화시키지 않는다
console.log(fruits); //원본에 영향 안가니 변화시키려면 아래처럼


fruits = fruits.concat(['두리안', '망고']); //원본 변화
console.log(fruits);



/*************************
 *  slice()
 * 배열의 일부분 추출, 원본에는 영향 안줌
 */
console.log('-'.repeat(20));
console.log("slice()");

console.log(fruits.slice(1)); //1번부터 추출
console.log(fruits.slice(1, 3)); //1번부터 3번 전까지 추출


//원본에 넣으면 안된다고? ㅇㅇ

/****************************
 * 원소 검색 indexOf(), includes()
 * 배열안에 특정 원소가 있는지 여부
 *  indexOf() : 찾으면 index 리턴, 못찾으면 -1 리턴
 *  includes() : 찾으면 true, 아니면 false 리턴, ES7(ES2016) 에 등장
 */
 console.log('-'.repeat(20));
 console.log("indexOf(), includes()");
 console.log(fruits);

 console.log(fruits.indexOf("두리안")); //3
 console.log(fruits.indexOf("Lemon")); //없는거면 -1


console.log(fruits.includes("두리안")); //true
console.log(fruits.includes("Lemon")); //false



/*************************************
 *  join() 
 *    array → string
 * 배열의 원소들을 주어진 문자열로 묶어서 하나의 문자열로 리턴
 */
console.log('-'.repeat(20));
console.log("[join()]");


console.log(cars);
console.log(cars.join("***"));


/******************************************
 * JavaScript 에선 array 도 object 의 특별한 형태다
 *  차이점이라면 index 의 형태다.
 *  JS 의 array : numbered index 사용
 *  JS 의 object : names index 사용
 */
arr1 = [];   // 비어있는 배열

arr1[0] = 100;
arr1[1] = 200;
console.log(arr1); //array는 numbered index. 특별한 인덱스. 추가 가능


arr1[4] = 300; //구멍 생김. 하지 말아야 함
console.log(arr1);


arr1['name'] = 'John'; //헉?!
console.log(arr1); //된다!


arr1.name = 'John'; //헉?!
console.log(arr1); //된다!



/********************************
 * 배열 역순 reverse()
 *  원본 변화 없다.
 */
console.log('-'.repeat(20));
console.log("reverse()");
console.log(cars);
 
console.log(cars.reverse());


/**********************************
 * 배열 정렬 sort()
 *  sort() 는 원본 변경 발생한다
 */        
console.log('-'.repeat(20));
console.log("sort()");
console.log(fruits);
 

fruits.sort(); //원본을 변경함
console.log(fruits);

//역정렬하려면?
console.log(cars);
console.log(cars.sort()); //오름차순
console.log(cars.sort().reverse()); //내림차순

//숫자 데이터 정렬
arr1 = [40, 100, 1, 5, 25, 10];
arr1.sort(); //문자열 정렬 100<25
console.log(arr1); //??잉?? [1, 10, 100, 25, 40, 5]


// 뭔가 제대로 안된다.
// sort() 메소드는 기본적으로 문자열(string) 정렬을 합니다
// 그래서 "25" 가 "100" 보다 더 큰 값이 되는 겁니다
// 따라서 number 타입등에서 sort() 할때는
// sort(비교함수) 를 매개변수로 주어 동작케 해야 합니다
//   비교함수(compare function)의
//     매개변수는 비교할 두개값 a, b
//     리턴값은
//        a < b 이면 음수, 같으면 0, a > b 이면 양수 리턴
//  
 

arr1.sort(function(a, b){return a-b}); //숫자 오름차순  
console.log(arr1);

arr1.sort(function(a, b){return b-a}); //숫자 내림차순
console.log(arr1);


console.log("\n[프로그램 종료]", '\n'.repeat(20));



























