let shoppingListItems = ["milk", "eggs", "bread"];
let listElement = document.getElementById("shopping-list-items");

shoppingListItems.forEach((item) => {
    console.log(item);
    let itemElement = document.createElement("li");
    itemElement.innerText = item;
    listElement.appendChild(itemElement);
});

function addItem() {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems.push(item);
    console.log(shoppingListItems);
    updateItems();
}

function updateItems() {
    listElement.innerHTML = "";
    shoppingListItems.forEach((item) => {
        console.log(item);
        let itemElement = document.createElement("li");
        itemElement.innerText = item;
        listElement.appendChild(itemElement);
    });
}

function clearList() {
    shoppingListItems = []
    updateItems();
    // shoppingListItems.forEach((item => {
    //     listElement.innerText = "";
    // }))
}
