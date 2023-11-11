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

//높이값 테스트
const clientHeight = document.querySelector(".testDiv").clientHeight;
const testBtn = document.querySelector(".btn-test");
testBtn.addEventListener('click', function(){
    alert(clientHeight);
});

//아코디언
const accordion = document.querySelector(".accordion");
const titles = accordion.querySelectorAll(".title");

function toggleAccordion() {
    const clickedItem = this.parentNode;
    const items = accordion.querySelectorAll("li");

    items.forEach((item) => {
        if (clickedItem === item) {
            item.classList.toggle("on");
        } else {
            item.classList.remove("on");
        }
    });

}
titles.forEach((title) => {
    title.addEventListener("click", toggleAccordion);
});

// 스크롤이벤트
const valueScroll = document.querySelector(".value-scroll");
const conScroll = document.querySelector(".con-scroll");
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