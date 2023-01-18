/**
 * TODO
 */

function light(sw) {
    /*이미지 바꾸려면 src를 바꿔야함*/
    let pic;
    if(sw == 0) { /*이건 뭐야*/
        pic = "https://www.w3schools.com/html/pic_bulboff.gif"
    } else {
        pic = "https://www.w3schools.com/html/pic_bulbon.gif"

    }
    document.getElementById('myImage').src = pic; /*src에 pic값 대입*/
    /*곧바로 애트리뷰트에 접근 가능 : src -> src 애트리뷰트를 변경한 것 */

}

