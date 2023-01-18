/**********************************************
* switch - case 조건문
* 
* switch(조건값)
* {
* case 값1:
*	...
*	break;
* case 값2:
*	...
*	break;
*
* ...
* default:
*	...
*	break;
*}
* 	해당 조건값의 case문을 찾아서 거기서부터 break를 만날 때까지 실행을 함.
*  break를 만나게 되면 switch 문장을 종료.
*  해당하는 case가 없으면 default 문장을 실행함.
*  
*  	※ 모든 switch 조건문은 if - else if - else로 바꿀 수 있다. (할수 있어야 한다)
***************************************************/
let n = 2;

switch(n) {
  case 1: // n 값이 1인 경우 수행
    console.log('하나');
    console.log('ONE');
    break; // < - switch 문 종료

  case 2:
    console.log('둘');
    console.log('Two');
    break;
  
  case 3:
    console.log('셋');
    console.logo('THREE');
    break;

    default:
      console.log('몰라요');



}

// TODO :  n값이 짝수이면 "짝수입니다" 출력
// 홀수이면 "홀수입니다 " 출력
// switch ~ case 문 사용
 

n = 34;

switch(n % 2) {
  case 0:
    console.log('짝수입니다');
    break;

  default:
    console.log('홀수입니다');

}

let point = 3.4;
switch(parseInt(point)) {
  case 4:
  console.log('A학점'); 
  break;
  
  case 3:
    console.log('B학점'); 
    break;

  case 2:
  console.log('C학점'); 
  break;

  case 1:
  console.log('D학점'); 
  break;

  default:
  console.log('E학점'); 

  
}




/*********************
 * 중첩 switch 문
***********************/
// console.log('-'.repeat(20))

// TODO




console.log("\n[프로그램 종료]", '\n'.repeat(20));






























