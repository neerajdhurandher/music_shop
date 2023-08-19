let logo_element = document.querySelector(".logo");

let home_nav_element = document.getElementById("home-nav");
let store_nav_element = document.getElementById("store-nav");
let contact_nav_element = document.getElementById("contact-nav");
let about_nav_element = document.getElementById("about-nav");


function reset_nav_item_color() {
    home_nav_element.classList.remove("nav_item_active");
    store_nav_element.classList.remove("nav_item_active");
    about_nav_element.classList.remove("nav_item_active");
    contact_nav_element.classList.remove("nav_item_active")
}

function set_nav_item_active(nav_item_element) {
    reset_nav_item_color();
    nav_item_element.classList.add("nav_item_active");
}

function default_nav_state() {
    // default home nav is active
    set_nav_item_active(home_nav_element);
    window.open("#home", "_self");
}

default_nav_state();

home_nav_element.addEventListener("click", () => {
    set_nav_item_active(home_nav_element);
})

store_nav_element.addEventListener("click", () => {
    set_nav_item_active(store_nav_element);
})

about_nav_element.addEventListener("click", () => {
    set_nav_item_active(about_nav_element);
})

contact_nav_element.addEventListener("click", () => {
    set_nav_item_active(contact_nav_element);
})

logo_element.addEventListener("click", () => {
    set_nav_item_active(home_nav_element);
    window.open("#home", "_self");
})
