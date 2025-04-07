//clear list item with ID=box1
document.getElementById("clear").addEventListener("click", function () {
    console.log("You clicked Clear");
    document.getElementById("box").innerText = ("");
});

//get all check boxes and report to console when checked and unchecked
let checkboxes = document.querySelectorAll("input[name=box]");

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            console.log("checkbox is checked");
        } else {
            console.log("unchecked box")
        }
    });
});




//create and add to do item *ADD PROMPT FOR ITEM NAME/DESCRIPTION
document.querySelector("button[id=new]").addEventListener("click", function () {
    console.log("You clicked New");
    //create new list item
    let listItem = document.createElement("li");
    //listItem.textContent = "New Item";
    listItem.innerHTML = '<input name="box" type="checkbox"> Item </input>';

    //add new list item to bottom of list
    let itemsList = document.getElementById("itemsList");
    itemsList.appendChild(listItem);
});




