let type_writer_item_element = document.getElementById("type_writer_item");

let item_list = ["Records", "DVDs", "CDs", "MP3"]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function add_character(alphabet, element) {
    const node = document.createTextNode(alphabet);
    const para = document.createElement("span");
    para.appendChild(node);
    element.appendChild(para);
    return para;
}

async function type_writer(word, element) {
    let node_list = []
    for (let char of word) {
        await sleep(200);
        try {
            let node = add_character(char, element)
            node_list.push(node)
        } catch (error) {
            console.log("Error in adding node " + error);
        }
    }

    await sleep(1500)
    for (let i = node_list.length - 1; i > -1; i--) {
        try {
            element.removeChild(node_list[i])
            await sleep(200);
        } catch (error) {
            console.log("Error in removing node " + error);
        }
    }
}

while (true) {
    for (let index in item_list) {
        let item = item_list[index]
        await type_writer(item, type_writer_item_element);
        await sleep(500);
    }
}
