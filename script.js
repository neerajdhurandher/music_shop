let popup_div_element = document.getElementById("popup-div");
let popup_content_div = document.querySelector(".popup-content");

export function show_popup(child_element) {
    popup_div_element.classList.add("overlay_show")
    if (child_element != null) {
        let b_div = document.createElement("div")
        b_div.classList.add("popup-content-temp-div");
        b_div.appendChild(child_element)
        popup_content_div.appendChild(b_div);
    }
}

function close_popup() {
    popup_div_element.classList.remove("overlay_show")
    var child = popup_content_div.firstElementChild;
    while (child) {
        child.remove();
        child = popup_content_div.firstElementChild;
    }
}

document.querySelector(".popup-close").addEventListener("click", () => {
    close_popup();
})
