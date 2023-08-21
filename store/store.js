import { cart } from "../store/cart.js"
import { product_list } from "./product_list.js";



let product_container_element = document.getElementById("product_container");

function get_product_count_in_cart(product_id) {
    let count = cart[product_id];

    if (count == undefined) {
        return 0;
    }
    return count;
}

function modify_product_to_cart(product_id, add_or_remove) {
    let count = cart[product_id];

    if (count == undefined) {
        cart[product_id] = 1;
    } else if (add_or_remove == "add") {
        cart[product_id] = count + 1;
    } else if (add_or_remove == "remove") {
        cart[product_id] = count - 1;
    }
    return cart[product_id];
}

function get_item_count_modifier(product_id) {
    let item_count_modifier_div = document.createElement("div");
    item_count_modifier_div.classList.add("round_border");
    item_count_modifier_div.classList.add("modifier_div");

    let minus_btn_element = document.createElement("div");
    minus_btn_element.id = "minus_btn";
    minus_btn_element.innerHTML = "-";
    minus_btn_element.classList.add("round_border");
    item_count_modifier_div.appendChild(minus_btn_element);

    let item_count_text_element = document.createElement("span");
    item_count_text_element.id = "item_count_text";
    item_count_modifier_div.appendChild(item_count_text_element);

    let plus_btn_element = document.createElement("div");
    plus_btn_element.id = "plus_btn";
    plus_btn_element.innerHTML = "+";
    plus_btn_element.classList.add("round_border");
    item_count_modifier_div.appendChild(plus_btn_element);

    let product_count_in_cart = 0;

    plus_btn_element.addEventListener("click", () => {
        product_count_in_cart = modify_product_to_cart(product_id, "add");
        item_count_text_element.innerHTML = product_count_in_cart;
    });

    minus_btn_element.addEventListener("click", () => {
        product_count_in_cart = modify_product_to_cart(product_id, "remove");
        item_count_text_element.innerHTML = product_count_in_cart;
    });


    return item_count_modifier_div;

}

function create_product_cards() {
    for (let index in product_list) {
        let item = product_list[index];
        item.id = index + 1
        let product_div = document.createElement("div");
        product_div.classList.add("product_item");

        let product_img = document.createElement("img");
        product_img.id = "product_img"
        product_img.src = "src/music_cd.jpg";
        product_div.appendChild(product_img);

        let product_title = document.createElement("span");
        product_title.id = "product_title";
        product_title.innerHTML = item.title;
        product_div.appendChild(product_title);

        let product_artist = document.createElement("span");
        product_artist.id = "product_artist";
        product_artist.innerHTML = item.artist
        product_div.appendChild(product_artist);

        let product_year = document.createElement("span");
        product_year.id = "product_year";
        product_year.innerHTML = item.year
        product_div.appendChild(product_year);

        let add_to_cart_btn = document.createElement("div");
        add_to_cart_btn.id = "add_to_cart_btn";
        product_div.appendChild(add_to_cart_btn);

        let cart_icon = document.createElement("img");
        cart_icon.src = "src/cart_icon.png";
        cart_icon.id = "cart_icon";
        add_to_cart_btn.appendChild(cart_icon);

        let add_to_cart_text = document.createElement("span");
        add_to_cart_text.id = "add_to_cart_text";
        add_to_cart_text.innerHTML = "Add cart"
        add_to_cart_btn.appendChild(add_to_cart_text);

        product_container_element.appendChild(product_div);

        let item_count_modifier_element = undefined

        add_to_cart_btn.addEventListener('click', () => {

            let item_count = get_product_count_in_cart(item.id);

            if (item_count == 0 && add_to_cart_text.style.display != "none") {
                item_count = modify_product_to_cart(item.id, "add");
                item_count_modifier_element = get_item_count_modifier(item.id);
                add_to_cart_text.style.display = "none";
                item_count_modifier_element.children[1].innerHTML = item_count
                add_to_cart_btn.appendChild(item_count_modifier_element);

            }
            if (item_count == 0) {
                add_to_cart_btn.removeChild(item_count_modifier_element);
                add_to_cart_text.style.display = "block";

            }
        })
    }
}

create_product_cards()
