let list = document.getElementById("name_list");
let btnName = document.getElementById("btnName");
let foodName = document.getElementById("name");

let currentInputValue = "";
foodName.addEventListener("input", (e) => {
  currentInputValue = e.target.value;
});

document.body.addEventListener("keyup", (e) => {
  console.log(e.key);
  if (e.key === "Enter") {
    addFoodName();
  }
});

function addFoodName() {
  if (currentInputValue === "") {
    alert("Please enter food name" + currentInputValue);
    return;
  }
  let newListElement = document.createElement("li");
  let textNode = document.createTextNode(currentInputValue);
  newListElement.appendChild(textNode);
  list.appendChild(newListElement);
}

btnName.addEventListener("click", addFoodName);
