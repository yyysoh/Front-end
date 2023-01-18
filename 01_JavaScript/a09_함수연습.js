// 반지름은 입력받아
// 원의 둘레를 계산하여 리턴하는 함수를 작성하세요
// 정의, 호출


const calcCirclePerimeter = function(radius){
  return 2 * Math.PI * radius; //Math.PI 는 파이
};

let r, p;

r = 10;
p = calcCirclePerimeter(r);
console.log(`반지름 ${r} 인 원의 둘레는 ${p.toFixed(2)}`);

r = 8;
p = calcCirclePerimeter(r);
console.log(`반지름 ${r} 인 원의 둘레는 ${p.toFixed(2)}`);





// 반지름은 입력받아
// 원의 면적를 계산하여 리턴하는 함수를 작성하세요
// 정의, 호출 


const calcCircleArea = function(radius) {
  return Math.PI * (radius ** 2);
};

let r1, p1;

r1 = 12;
p1 = calcCircleArea(r);
console.log(`반지름 ${r1}인 원의 면적은 ${p1.toFixed(2)}`);





// 직사각형의 '가로', '세로' 의 크기를 입력받아
// 직사각형의 넒이를 구하여 리턴하는 함수를 작성하세요
// 정의, 호출


const rectanglearea = function(a, b) {
  return a * b;

};

a = 10;
b = 12;
area = rectanglearea(a, b);
console.log(`가로 ${a}와 세로 ${b}의 넓이는 ${area}`);



// 직각삼각형의 '밑변'과 '높이'가 주어졌을때
// 빗변의 길이를 구하여 리턴하는 함수를 작성하세요
// 정의, 호출


const trianglearea = function(c, d) {

 return (c **2) + (d ** 2);
};


let c, d;
c = 10;
d = 10;

side = trianglearea(c, d);
hhh = side ** -2;
console.log(`밑변이 ${c}이고 높이가 ${d}인 삼각형의 빗변은 ${hhh}`);





// 반지름은 입력받아
// 원의 '둘레'와 '면적'을 계산하여 리턴하는 함수를 작성하세요
// 정의, 호출 



const circle = function(radius) {

e1 = 2 * Math.PI * radius;
f1 = Math.PI * (radius ** 2);

  return e1, f1;
};

r4 = 10;  
g = circle(r4);
console.log(`반지름 ${r4}의 둘레는 ${g.toFixed(2)}`)





const circle1 = function(radius){
  let result = 2 * Math.PI * radius;
  return result;
};


let out = circle1(10);
console.log(`out = ${out.toFixed(2)}`);





console.log("\n[프로그램 종료]", '\n'.repeat(20));










// --------------------------------------------------------------------------------












// 반지름은 입력받아
// 원의 둘레를 계산하여 리턴하는 함수를 작성하세요
// 정의, 호출



const circumference = function(radius) {
    return 2 * Math.PI * radius;
}


let rr, qq;
rr = 10;
qq = circumference(rr);

console.log(`둘레가 ${rr}인 원의 둘레 값은 ${qq.toFixed(2)}`);




// 반지름은 입력받아
// 원의 면적를 계산하여 리턴하는 함수를 작성하세요
// 정의, 호출 


const circleArea = function(radius) {
  return Math.PI * radius ** 2;
}


let rr1, qq1;
rr1 = 12;
qq1 = circleArea(rr1);

console.log(`원의 둘레가 ${rr1}인 원의 넓이는 ${qq1.toFixed(2)}`);







// 직사각형의 '가로', '세로' 의 크기를 입력받아
// 직사각형의 넒이를 구하여 리턴하는 함수를 작성하세요
// 정의, 호출













// 직각삼각형의 '밑변'과 '높이'가 주어졌을때
// 빗변의 길이를 구하여 리턴하는 함수를 작성하세요
// 정의, 호출











// 반지름은 입력받아
// 원의 '둘레'와 '면적'을 계산하여 리턴하는 함수를 작성하세요
// 정의, 호출 


















console.log("\n[프로그램 종료]", '\n'.repeat(20));



























