const form = document.querySelector("form")
const input = document.getElementById("new-item")
const listContainer = document.querySelector(".listContainer")

function createNewItem() {
    
    const item = document.createElement("div")
    item.classList.add("list-item")
}

function addItemToList() {
    // TO-DO: implementar funcionalidade de adicionar itens à lista
}

function clearInput() {
    // TO-DO: implementar funcionalidade de limpar o input
}

form.onsubmit = (event) => {
    event.preventDefault()

    const itemText = input.value.trim()

    if (itemText !== "") {
        const newItem = createNewItem()
        addItemToList()
        clearInput()
    }
}

