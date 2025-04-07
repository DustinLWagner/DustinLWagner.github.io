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




