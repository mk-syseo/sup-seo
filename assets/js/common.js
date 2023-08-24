// Aside Menu 토글 22s
const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".btn-menuToggle");
menuToggle.addEventListener('click', function(){
    menu.classList.toggle("active");
});