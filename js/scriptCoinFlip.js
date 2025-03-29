//create varibles for get elements
const coin = document.getElementById("showCoin");
const revealCoin = document.getElementById("revealCoin");


//get a random integer 
function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}

//add listeners
coin.addEventListener("click", flipCoin);

//logs to console that coin is clicked, logs the number, 
//and pass randInt to the flipResult function
function flipCoin() {
    console.log("You flipped the coin!");
    let randInt = getRandomInt(10000);
    flipResult(randInt);
    console.log(randInt);
};

//this modifies h1"revealCoin" to display coin flip result
//modifies showCoin to correct image reflicting coin flip result
// Determines if randInt is EVEN or ODD determing heads or tails.
function flipResult(randInt) {
    if (randInt % 2 === 0) {
        revealCoin.innerText = "Heads"
        document.getElementById("showCoin").src = "/img/headsCoin.png"
    }
    else {
        revealCoin.innerText = "Tails"
        document.getElementById("showCoin").src = "/img/tailsCoin.png"

    }
};