// Aside Menu 토글
const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".btn-menuToggle");
menuToggle.addEventListener('click', function(){
    menu.classList.toggle("active");
});