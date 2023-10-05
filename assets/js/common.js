// Aside Menu 토글
const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".btn-menuToggle");
menuToggle.addEventListener('click', function(){
    menu.classList.toggle("active");
});

//높이값 테스트
const clientHeight = document.querySelector(".testDiv").clientHeight;
const testBtn = document.querySelector(".btn-test");
testBtn.addEventListener('click', function(){
    alert(clientHeight);
});