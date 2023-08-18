import {show_popup} from "../script.js"

let name_element = document.getElementById("name");
let email_element = document.getElementById("email");
let phone_element = document.getElementById("phone");
let message_element = document.getElementById("message");
let submit_btn_element = document.getElementById("submit_btn");

function data_validation(type, element) {
    let data = element.value;
    let b_div = document.createElement("div")
    b_div.classList.add("validation_error_msg")
    let error_msg_element = document.createElement("span");

    if (type == "text") {
        if (data.length == 0) {
            error_msg_element.innerHTML = "Error ! Please enter valid input."
            show_popup(error_msg_element);
        }
    } else if (type == "email") {
        var email_regex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
        if (!data.match(email_regex)) {
            error_msg_element.innerHTML = "Error ! Please enter valid email address."
            show_popup(error_msg_element);
        }
    } else if (type == "phone") {
        var phone_regex = "^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$"
        if (!data.match(phone_regex)) {
            error_msg_element.innerHTML = "Error ! Please enter valid phone number"
            show_popup(error_msg_element);
        }

    }
}


submit_btn_element.addEventListener("click", () => {

    let name = name_element.value;
    let email = email_element.value;
    let phone = phone_element.value
    let message = message_element.value

    data_validation("text", name_element)
    data_validation("email", email_element)
    data_validation("phone", phone_element)
    data_validation("text", message_element)

    //  add submit logic 
})