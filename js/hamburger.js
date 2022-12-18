window.onload = function(){

    const menu_btn = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector(".sliding-menu");
    const black = document.querySelector(".blackblackblackeverythingisblack");

    menu_btn.addEventListener("click", function(){
        menu_btn.classList.toggle("is-active");
        mobile_menu.classList.toggle("is-active");
        black.classList.toggle("is-active");
    })

}