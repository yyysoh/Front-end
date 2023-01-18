// 배열 shuffle 하기
let names = `
김광민
김병제
김선경
김수영
김인진
김형주
김희선
박윤수
백태인
봉지원
설현아
소홍섭
신성주
안서영
유율현
윤소현
윤아영
이준
이청하
임진욱
장상준
정범진
조영광
진윤석
조정현
한지윤
황인호
`




let name_arr = names.trim().split(/\s+/); //배열로 나오게
console.log(name_arr);


//console.log(Math.random()); //0보다 같거나 크고 1보다 작은 숫자가 나온다

result = name_arr.map(a => [Math.random(), a]);
console.log(result);

result = result.sort((a,b) => a[0] - b[0])   //a는 문자열 오름차순 정렬
console.log(result);

result = result.map(a => a[1]) //a는 배열
console.log(result);
