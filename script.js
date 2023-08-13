const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value;
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `<span>${taskText}
        </span><button onclick="removeTask(this)">Remove</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

taskInput.addEventListener("keyup", e => {
if (e.key == "Enter" && addTask) {
    function addTask() {
        const taskText = taskInput.value;
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `<span>${taskText}</span><button onclick="removeTask(this)">Remove</button>`;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    }
}
});


function removeTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}
