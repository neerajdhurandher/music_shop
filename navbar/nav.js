let logo_element = document.querySelector(".logo");

let home_nav_element = document.getElementById("home-nav");
let store_nav_element = document.getElementById("store-nav");
let contact_nav_element = document.getElementById("contact-nav");
let about_nav_element = document.getElementById("about-nav");



function reset_nav_item_color() {
    console.log("nav item reset");
    home_nav_element.style.backgroundColor = "#deb887"
    store_nav_element.style.backgroundColor = "#deb887"
    about_nav_element.style.backgroundColor = "#deb887"
    contact_nav_element.style.backgroundColor = "#deb887"
}

function set_nav_item_active(nav_item_element) {
    reset_nav_item_color();
    nav_item_element.style.backgroundColor = "#43f21c";
}

function default_nav_state() {
    // default home nav is active
    set_nav_item_active(contact_nav_element);
    window.open("#contact", "_self");
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
