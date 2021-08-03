let list = document.getElementById("name_list");
let btnAddList = document.getElementById("btnAddList");
let btnUpdateList = document.getElementById("btnUpdateList");
let btnDeleteList = document.getElementById("btnDeleteList");
let foodName = document.getElementById("name");

let currentInputValue = "";
foodName.addEventListener("input", (e) => {
  currentInputValue = e.target.value;
});

document.body.addEventListener("keyup", (e) => {
  console.log(e.key);
  if (e.key === "Enter") {
    addNameList();
  }
});

function createNewNode() {
  let newListElement = document.createElement("li");
  let textNode = document.createTextNode(currentInputValue);
  newListElement.appendChild(textNode);
  return newListElement;
}

function addNameList() {
  if (currentInputValue === "") {
    alert("Please enter food name" + currentInputValue);
    return;
  }
  let newListElement = createNewNode();
  list.appendChild(newListElement);
  foodName.value = "";
  currentInputValue = "";
}

btnAddList.addEventListener("click", addNameList);

btnUpdateList.addEventListener("click", function () {
  alert(list.firstElementChild);
  let firstNode = list.firstElementChild;
  let newNode = createNewNode();
  list.replaceChild(firstNode, newNode);
});
