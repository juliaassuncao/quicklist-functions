const form = document.querySelector("form")
const input = document.getElementById("new-item")

function createNewItem() {
    // TO-DO: implementar criação de novos itens
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

