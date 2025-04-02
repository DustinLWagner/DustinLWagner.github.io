//clear list item with ID=box1
document.getElementById("clear").addEventListener("click", function () {
    console.log("You clicked Clear");
    document.getElementById("box1").innerText = ("")
});

document.getElementById("new").addEventListener("click", function () {
    console.log("You clicked New");
    //create new list item
    let listItem = document.createElement("li");
    listItem.textContent = "New Item";
    //add new list item to bottom of list
    let itemsList = document.getElementById("itemsList");
    itemsList.appendChild(listItem);
});




