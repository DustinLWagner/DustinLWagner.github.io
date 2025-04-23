let tasks = [];
try {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (Array.isArray(storedTasks)) {
        tasks = storedTasks;
    }
} catch (e) {
    console.warn("Failed to Load Tasks. Resetting");
}

const itemsList = document.getElementById("itemsList");
tasks.forEach(task => addTaskToDOM(task.text, task.checked));

//clear checked list item
document.getElementById("clear").addEventListener("click", function () {
    console.log("You clicked Clear");

    //get all check boxes 
    let checkboxes = document.querySelectorAll("input[name=box]:checked");
    checkboxes.forEach(checkbox => {
        //find checked li
        let listItem = checkbox.closest("li");
        //remove checked li
        if (listItem) {
            const text = listItem.textContent.trim();
            tasks = tasks.filter(task => task.text !== text);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            listItem.remove();
        }
    });
});

//select all check boxes
let isAllSelected = false;
document.getElementById('selectAll').addEventListener('click', function () {
    let checkboxes = document.querySelectorAll("input[name=box]");
    isAllSelected = !isAllSelected;
    checkboxes.forEach(checkbox => {
        checkbox.checked = isAllSelected;
    });
    //toggle inner text of button
    this.innerHTML = isAllSelected ? 'Deselect All' : 'Select All';
});

//Listen for New Button CLick open pop up and prompt user for new task
document.querySelector("button[id=new]").addEventListener("click", function () {
    popup.classList.add('open-popup');
    document.getElementById('newTaskText').focus();
});

//listen for submit button and add task to list
document.querySelector("button[id=addNewButton]").addEventListener("click", function (e) {
    e.preventDefault();
    //get input from popup
    let newTask = document.getElementById("newTaskText");
    if (!newTask.checkValidity()) {
        newTask.reportValidity();
        return;
    };

    const taskText = newTask.value.trim();
    if (!taskText) return;
    //add to local storage
    tasks.push({ text: taskText, checked: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    //add to dom
    addTaskToDOM(taskText, false);

    //close popup andclear the text area
    popup.classList.remove("open-popup");
    newTask.value = ("");
});

//adding task to dom
function addTaskToDOM(taskText, isChecked) {
    let listItem = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "box";
    checkbox.checked = isChecked;

    listItem.appendChild(checkbox);
    listItem.append(" " + taskText);
    itemsList.appendChild(listItem);
}