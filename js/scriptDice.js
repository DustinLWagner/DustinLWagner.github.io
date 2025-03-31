//arrays to store dice ids and past rolls//
const diceIds = ["4", "6", "8", "10", "12", "20"];
var diceRolls = [];
//use forEach to add listenters and grab el Id for all dice and roll dice
diceIds.forEach(diceId => {
    document.getElementById(diceId).addEventListener("click", function () {
        var randInt = Math.floor(Math.random() * diceId + 1);
        document.getElementById(diceId).classList.add('rotateDice');
        //logs diceId to console with "you rolled randInt'
        console.log(window.event.target.id);
        console.log("You rolled " + randInt);
        //time outs to reset the dice, display dice result, and remove it
        setTimeout(() => {
            document.getElementById(diceId).classList.remove('rotateDice');
        }, 3000);
        setTimeout(() => {
            diceResult.innerText = ("You rolled " + randInt + " on a D" + diceId);

            //create new li
            var listItem = document.createElement("li");
            listItem.textContent = "You Rolled " + randInt + " on a D" + diceId;

            //append new li to ul
            var diceRollsList = document.getElementById("diceRollsBox");
            diceRollsList.appendChild(listItem);

            diceRolls.push(" " + randInt + " on a D" + diceId);

        }, 2000);
        setTimeout(() => {
            diceResult.innerText = (" ");
        }, 5000);

    });
});

// add a reset diceRollsBox button to clear DiceRollsBox