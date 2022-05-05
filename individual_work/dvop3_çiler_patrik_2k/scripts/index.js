/* Home button animace */

const home_button = document.getElementById("home-button");

home_button.onclick = function () {
    home_button.children[0].src = "../images/icons/home-2.png";
    setTimeout(function () {
        home_button.children[0].src = "../images/icons/home-1.png";
    }, 150)
};
const home_button_b = document.getElementById("home-button-b");
home_button_b.onclick = function () {
    home_button_b.children[0].src = "../images/icons/home-2.png";
    setTimeout(function () {
        home_button_b.children[0].src = "../images/icons/home-1.png";
    }, 150)
};



/* Burger menu */

const burger_menu_button = document.getElementById("burger-menu");
const container = document.getElementById("burger-menu-container");
const nav_items = document.getElementsByClassName("nav-item");

    // show
burger_menu_button.onclick = function () {
    burger_menu_button.classList.add("burger-menu-click-anim");
    setTimeout(function () {
        container.style.display = "flex";
        container.classList.add("burger-menu-slide-anim");
    }, 450)
    setTimeout(function () {
        burger_menu_button.classList.remove("burger-menu-click-anim");
        container.classList.remove("burger-menu-slide-anim");
        //container.style.transform = "translateX(0%)";
    }, 1550)
}
    // disappear
window.addEventListener('click', function (e) {
    var buttonIsClicked = new Boolean(false);
    for (let index = 0; index < nav_items.length; index++) {
        const element = nav_items[index];
        if (element.contains(e.target)) {
            buttonIsClicked = new Boolean(true);
        }
    }

    if ((!container.contains(e.target) &&
        !burger_menu_button.contains(e.target)) ||

        (buttonIsClicked == true) &&
        !burger_menu_button.contains(e.target)) {

        container.classList.add("burger-menu-slide-anim-reverse");
        setTimeout(function () {
            container.classList.remove("burger-menu-slide-anim-reverse");
            container.style.transform = "translateX(100%)";
            container.style = "";
            container.style.display = "none";
        }, 850)
    }
});
