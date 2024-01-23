const inputBox = document.getElementsByClassName("input-box")[0]
const listContainer = document.getElementsByClassName("list-container")[0]

showTask();
function addTask() {

    if (inputBox.value === '')
        alert("Input is empty! Please add a task")

    else {

        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)

    }
    inputBox.value = "";

    saveData(listContainer);
}

listContainer.addEventListener("click", (event) => {

    if (event.target.tagName === "LI")
        event.target.classList.toggle("checked")

    else if (event.target.tagName === "SPAN")
        event.target.parentElement.remove()

    saveData(listContainer);
})