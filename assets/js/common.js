function handleClick(){
    let title = document.querySelector(".hello");
    let element = document.getElementById('helloid');
    let clickedClass = "clicked";
    if (title.classList.contains(clickedClass)){
        title.classList.remove(clickedClass);
        title.style.marginTop = "-" + (element.clientHeight) + "px";
        console.log("닫힘");
    } else {
        title.classList.add(clickedClass);
        title.style.marginTop = 10 + "px";
        console.log(element.clientHeight);
    };
}