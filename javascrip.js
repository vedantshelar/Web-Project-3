console.log("Hello abhi");

let inputBox = document.getElementById("inputBox");

let addBtn = document.getElementById("addBtn");
let listContainer = document.querySelector(".listContainer");
// let listItems = document.querySelectorAll(".listItem");

addBtn.addEventListener("click", () => {

    let note = inputBox.value;

    if (note == "") {
        alert("Enter something to add note");
    } else {
        let listItem = document.createElement("li");
        listItem.classList.add("listItem");
        listItem.innerHTML = `${note} <span class="cross">+</span>`;

        listContainer.append(listItem);
        inputBox.value = "";

        listItem.addEventListener("click", () => {
            listItem.classList.toggle("active");
        })

        let cross = listItem.querySelector(".cross");

        cross.addEventListener("click", () => {
            cross.parentElement.remove();
        })

    }

})





