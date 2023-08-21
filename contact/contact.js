import { show_popup } from "../script.js"

let name_element = document.getElementById("name");
let email_element = document.getElementById("email");
let phone_element = document.getElementById("phone");
let message_element = document.getElementById("message");
let submit_btn_element = document.getElementById("submit_btn");

function on_submit(name_element, email_element, phone_element, message_element) {
    let name = name_element.value;
    let email = email_element.value;
    let phone = phone_element.value
    let message = message_element.value

    // on submit logic

    let msg_element = document.createElement("span");
    msg_element.innerHTML = "Your message submit successfully."
    show_popup(msg_element)

    name_element.value = ""
    email_element.value = ""
    phone_element.value = ""
    message_element.value = ""
}

function data_validation(type, element, filed_name) {
    let data = element.value;
    let error_msg_element = document.createElement("span");
    let error_msg_template = "Error ! Please enter valid "

    if (type == "text") {
        if (data.length == 0) {
            error_msg_element.innerHTML = error_msg_template + filed_name
            show_popup(error_msg_element);
            return false;
        }
        return true;

    } else if (type == "email") {
        var email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!data.match(email_regex)) {
            error_msg_element.innerHTML = error_msg_template + filed_name
            show_popup(error_msg_element);
            return false;
        }
        return true;

    } else if (type == "phone") {
        if (data.length != 10) {
            error_msg_element.innerHTML = error_msg_template + filed_name
            show_popup(error_msg_element);
            return false;
        }
        return true;
    }
}


submit_btn_element.addEventListener("click", () => {

    let validation_list = [
        { "type": "text", "element": name_element, "field_name": "name" },
        { "type": "email", "element": email_element, "field_name": "email address" },
        { "type": "phone", "element": phone_element, "field_name": "phone number" },
        { "type": "text", "element": message_element, "field_name": "message input" }
    ]

    for (let index in validation_list) {
        let item = validation_list[index];
        let status = data_validation(item.type, item.element, item.field_name)
        if (status == false)
            return
    }

    on_submit(name_element, email_element, phone_element, message_element);
})
