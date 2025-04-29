const form = document.querySelector("form")
const input = document.getElementById("new-item")
const listContainer = document.querySelector(".list-container")

function createNewItem(itemText) {

    const itemId = "item-" + (listContainer.children.length + 1)

    const item = document.createElement("div")
    item.classList.add("list-item")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.id = itemId

    const label = document.createElement("label")
    label.classList.add("list-item")
    label.htmlFor = itemId
    label.textContent = itemText

    const trashIcon = document.createElement("i")
    trashIcon.classList.add("hgi", "hgi-stroke", "hgi-delete-02", "remove-button")

    item.appendChild(checkbox)
    item.appendChild(label)
    item.appendChild(trashIcon)

    return item
}

function addItemToList(item) {
    listContainer.appendChild(item)
}

function clearInput() {
    input.value = ""
    input.focus()
}

form.onsubmit = (event) => {
    event.preventDefault()

    const itemText = input.value.trim()

    if (itemText !== "") {
        const newItem = createNewItem(itemText)
        addItemToList(newItem)
        clearInput()
    }
}

