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
//create and add to do item *ADD PROMPT FOR ITEM NAME/DESCRIPTION
document.querySelector("button[id=new]").addEventListener("click", function () {
    //prompt user for new task
    let newTask = window.prompt("New Task");
    console.log("You clicked New");
    //create new list item
    let listItem = document.createElement("li");
    //add newTask user input
    listItem.innerHTML = '<input name="box" type="checkbox"></input>' + newTask;

    //add new task to bottom of itemList
    let itemsList = document.getElementById("itemsList");
    itemsList.appendChild(listItem);
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

