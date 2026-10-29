let btn = document.querySelector(".add");
let input = document.querySelector(".input");
let ol = document.querySelector("ol");

function addTask() {
    if(input.value.trim() === "") {
        return;
    }

    let item = document.createElement("li");
    
    let textSpan = document.createElement("span");
    textSpan.innerText = input.value;
    item.appendChild(textSpan);

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ol.appendChild(item);
    input.value ="";
    input.focus();
}

btn.addEventListener("click", addTask);

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

ol.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }
});