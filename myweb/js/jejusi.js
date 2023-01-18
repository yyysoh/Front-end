
let icon = document.getElementById('icon');
icon.addEventListener("click", function(){
    document.getElementById('menuvar').classList.toggle('responsive');
})






var btn = document.getElementsByClassName('btn');
var imgimg = document.getElementsByClassName('imgimg');
var light = document.getElementById('light');
var lightimg = document.getElementById('lightimg');
var text = document.getElementById('text');

for(var i = 0; i < imgimg.length; i++) {
    imgimg[i].addEventListener('click', function(){
    var src = this.getAttribute('src');
    lightimg.setAttribute('src', src)
    light.style.display = "block";
    });
}

light.addEventListener('click', function(){
    light.style.display = "none";

});

for(var j = 0; j < btn.length; j++) {
    btn[j].addEventListener('click', function(){
    text.style.display="block"
    });
}
