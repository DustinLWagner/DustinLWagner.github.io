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
            listItem.remove();
        }
    });

});

//select all check boxes
document.getElementById('selectAll').addEventListener('click', function () {
    let checkboxes = document.querySelectorAll("input[name=box]");

    console.log('you selected all');

    checkboxes.forEach(checkbox => {
        let listItem = checkbox.closest('li');
        if (listItem) {
            checkbox.checked = true;
        }
    });

});




//Listen for New Button CLick open pop up and prompt user for new task
document.querySelector("button[id=new]").addEventListener("click", function () {

    popup.classList.add('open-popup');
    document.getElementById('newTaskText').focus();
});

//listen for submit button and add task to list
document.querySelector("button[id=addNewButton]").addEventListener("click", function () {
    //get input from popup
    let newTask = document.getElementById("newTaskText");
    console.log("You clicked New");
    //validate
    if (!newTask.checkValidity()) {
        newTask.reportValidity();
        return;
    };
    //create new list item
    let listItem = document.createElement("li");
    //add user input from DOM using .value turning it into a string
    listItem.innerHTML = '<input name="box" type="checkbox"></input>' + newTask.value;
    //add new task to bottom of itemList
    let itemsList = document.getElementById("itemsList");
    itemsList.appendChild(listItem);
    //close popup
    popup.classList.remove("open-popup");
    // clear the text area ater submitting
    newTask.value = ("");

});
//----------------------set up local storage------------------//

//store li items in tasks
let tasks = [];
let itemsList = document.querySelectorAll("#itemsList li");
itemsList.forEach(item => {
    tasks.push(item.innerText);
});
localStorage.setItem("tasks", JSON.stringify(tasks));

//check local storage for tasks
let storedTasks = JSON.parse(localStorage.getItem("tasks"));
if (storedTasks === null) {
    console.log("List Empty")
} else {
    console.log("has items")
    //if task exists iterate through and create list items for each
};

//When the user adds a task via the prompt, save that task in localStorage
//Append the new task as a list item on the page.

//user checks box and clicks "clear" remove the corresponding task from both the page and localStorage.

//save task Convert your list of tasks to a string format (e.g., JSON.stringify) and store it in localStorage.

//retrieve task localStorage.getItem() to retrieve the list






//report to console Checked and Unchecked
document.getElementById("itemsList").addEventListener("change", function (event) {
    if (event.target && event.target.name === "box") {
        if (event.target.checked) {
            console.log("checked box");
        } else {
            console.log("unchecked box");
        }
    };
});

