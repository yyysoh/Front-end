/* break;
 * 순환문(for, while, do~while) 안에서 break를 만나면
 * break를 감싸는 가장 가까운 순환문 종료
 */
console.log("break");


let num = 1;
while(num <= 10) {
  console.log(num);

  if(num == 3) {
    break;
  }
  num++;
}


/* continue;
 * 순환문(for, while, do~while) 안에서 continue   를 만나면
 * continue를 감싸는 가장 가까운 순환문 으로 돌아감
 * 
 * 순환문은 종료하지 않고 . 특정 조건만 스킵!
 */
console.log('-'.repeat(10))
console.log('continue')

num = 1; 
while(num <= 10) {
  num++;

  if(num % 2 ==0) {
    continue;
  }

  console.log(num);
}

console.log("\n[프로그램 종료]", '\n'.repeat(20));
























