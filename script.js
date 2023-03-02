//КОНСТАНТА (НЕ ИЗМЕНЯЕТСЯ САМ ЭЛ, НО СОДЕРЖИМОЕ МОЖНО)

// найти все элементы
const newItemInpt = document.querySelector("#new-item");
const itemsList = document.querySelector("#items");
const addItemBtn = document.querySelector("#add-item");

function removeItem() {
    this.parentElement.remove();
}

function addItem() {
    // проверить наличие значения input
    if (newItemInpt.value.trim() !== "") {
        // добавить li к ul
        const itemLi = document.createElement("li");
        itemsList.append(itemLi);

        // задать содержимое li исходя из значения input
        itemLi.textContent = newItemInpt.value;

        // сбросить значение input
        newItemInpt.value = "";

        // добавить button к li
        const removeBtn = document.createElement("button");
        itemLi.append(removeBtn);

        // задать текст и слушатель событий для button
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", removeItem);
    }
}

// добавить слушатель событий
addItemBtn.addEventListener("click", addItem);

// добавить слушатель событий для input
newItemInpt.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        addItem();
    }
});