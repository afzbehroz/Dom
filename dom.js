const inputField = document.getElementById("itemInput");
const addButton = document.getElementById("addItemButton");
const itemList = document.getElementById("itemList");

function input() {
  const listItem = document.createElement("li"); // Correct the case of 'listItem'
  listItem.textContent = inputField.value;

  listItem.addEventListener("click", function () {
    itemList.removeChild(listItem);
  });

  itemList.appendChild(listItem);
}

addButton.addEventListener("click", input);



