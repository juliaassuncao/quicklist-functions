const form = document.querySelector("form")
const input = document.getElementById("new-item")
const listContainer = document.querySelector(".list-container")

function createNewItem() {

    const item = document.createElement("div")
    item.classList.add("list-item")

    return item
}

function addItemToList(item) {
    listContainer.appendChild(item)
}

function clearInput() {
    // TO-DO: implementar funcionalidade de limpar o input
}

form.onsubmit = (event) => {
    event.preventDefault()

    const itemText = input.value.trim()

    if (itemText !== "") {
        const newItem = createNewItem()
        addItemToList(newItem)
        clearInput()
    }
}

