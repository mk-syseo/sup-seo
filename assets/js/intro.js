// Aside Menu 토글
const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".btn-menuToggle");
const noscrolls = document.querySelector(".sub");
const menuDim = document.querySelector(".dim");
menuToggle.addEventListener('click', function(){
    menu.classList.toggle("active");
    noscrolls.classList.toggle("noscroll");
});
menuDim.addEventListener('click', function(){
    menu.classList.remove("active");
    noscrolls.classList.remove("noscroll");
});

// 스크롤이벤트
const valueScroll = document.querySelector(".value-scroll");
const valueScrollc = document.querySelector(".value-scrollc");
const conScroll = document.querySelector(".con-scroll");
const con01Fadin = document.querySelector(".con01-fadin");
let num = 0;

function showValue() {
    let posY = conScroll.getBoundingClientRect().top;
    valueScroll.innerHTML = posY;
    if (posY < window.innerHeight * 0.8) {
        conScroll.classList.add('zoom');
    } else {
        conScroll.classList.remove('zoom');
    }
}
document.addEventListener('scroll', function() {
    showValue();
});
showValue();
function showValueCon() {
    let posYc = con01Fadin.getBoundingClientRect().top;
    valueScrollc.innerHTML = posYc;
    if (posYc < window.innerHeight * -.6) {
        con01Fadin.classList.remove('zoom');
    } else {
        con01Fadin.classList.add('zoom');
    }
}
document.addEventListener('scroll', function() {
    showValueCon();
});
showValueCon();

