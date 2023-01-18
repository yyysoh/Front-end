// 배열 안에서 최대, 최소값 구하기

const score = [17, 34, 8, 23, 52, 11];

console.log(score);
{

    let max = score[0];
    for(let i = 1; i < score.length; i++) {
        score[i] > max && (max = score[i]);
    }
    console.log(`최대값 = ${max}`);
}



{
    let min = score[0];
    for(let i = 1; i < score.length; i++) {
        score[i] < min && (min = score[i]);
    }
    console.log(`최소값 = ${min}`);
}


console.log('-'.repeat(20));
//-------------------------------------------------------
// forEach 사용, 최대, 최솟값 한번

{
    let min, max;
    score.forEach((value, i) => {
        if(i == 0)
            min = max = score[0];
        else {
            (score[i] > max) && (max = score[i]);
            (score[i] < min) && (min = score[i]);
        }
    });
    console.log(`최대값 = ${max}`);
    console.log(`최소값 = ${min}`);
}




//------------------------------------------------------
console.log('-'.repeat(20));
// reduce() 를 사용하여 최대, 최솟값 구하기
{
    
    max = score.reduce((e, i) => {
        return e > i ? e : i;
    });

    min = score.reduce((e, i) => {
        return e < i ? e : i;
    });

    console.log('max = ', max);
    console.log('min = ', min);
    
}