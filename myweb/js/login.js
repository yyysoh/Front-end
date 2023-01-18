let frm = document.forms['frm'];
let id = document.getElementById('id');
let btn = document.getElementById('btn');


const chk = function() {
    if(frm['id'].value == "") {
        alert('아이디를 입력하세요');
        frm['id'].focus();
        return;
    }
    if(frm['pw'].value == "") {
        alert('비밀번호를 입력하세요');
        frm['pw'].focus();
        return;
    }
    confirm('로그인하시겠습니까?') && frm.submit();
}

