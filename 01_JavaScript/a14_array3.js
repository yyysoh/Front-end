const arr1 = [
    {
        name: 'James',
        age: 34,
        score: [100, 89, 88],
    },
    {
        name: 'Amy',
        age: 41,
        score: [56, 13, 97],
    },
    {
        name: 'Kevin',
        age: 23,
        score: [96, 88, 59],
    },
]

console.log(arr1);
// 이름 오름 차순으로 정렬


arr1.sort(function(a, b){
    if(a.name.toUpperCase() < b.name.toUpperCase()) return -1;
    if(a.name.toUpperCase() > b.name.toUpperCase()) return 1;
    return 0;
});

console.log(arr1);

// 이름 내림 차순으로 정렬



arr1.sort(function(a, b){
    if(a.name.toUpperCase() > b.name.toUpperCase()) return -1;
    if(a.name.toUpperCase() < b.name.toUpperCase()) return 1;
    return 0;
});
console.log(arr1);

// 나이 오름 차순 정렬


arr1.sort(function(a, b) {
    return a.age - b.age; //a가 크면 바꿔
});

console.log(arr1);



// 나이 내림 차순 정렬


arr1.sort(function(a, b) {
    return b.age - a.age;
});

console.log(arr1);


// score 평균 오름차순 정렬



arr1.sort(function(a,b){
    sum1 = a.score.reduce((acc,cur)=>acc+cur);
    sum2 = b.score.reduce((acc,cur)=>acc+cur);

    return sum1-sum2;
})
console.log(arr1)


// score 평균 내림차순 정렬


arr1.sort(function(a,b){
    sum1 = a.score.reduce((acc,cur)=>acc+cur);
    sum2 = b.score.reduce((acc,cur)=>acc+cur);

    return sum2-sum1;
})
console.log(arr1)







console.log("\n[프로그램 종료]", '\n'.repeat(20));
