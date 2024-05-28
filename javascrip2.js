console.log("done")

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showPreviousData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

let inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
let listContainer = document.querySelector(".listContainer");

function addList() {
    let note = inputBox.value;

    if (note == "") {
        alert("Please Enter some note");
    } else {
        let newListItem = document.createElement("li");
        newListItem.classList.add("listItem", "ok");
        newListItem.innerHTML = `${note}<span class="cross">+</span>`;
        listContainer.append(newListItem);
        inputBox.value = "";
        saveData();
    }
}

addBtn.addEventListener("click", addList);

listContainer.addEventListener("click", (e) => {

    if (e.target.tagName == "LI") {
        e.target.classList.toggle("active");
        saveData();
    }
    if (e.target.tagName == "SPAN") {//.target.className=="cross"
        e.target.parentElement.remove();
        saveData();
    }
   
});

showPreviousData(); 
