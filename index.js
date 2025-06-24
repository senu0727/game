// Function to roll the dice and update the game
function rollDice() {
    // Get dice elements
    var dice1 = document.querySelectorAll("img")[0];
    var dice2 = document.querySelectorAll("img")[1];
    
    // Add animation class
    dice1.classList.add("dice-animation");
    dice2.classList.add("dice-animation");
    
    // Generate random numbers for dice
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomdiceImage = "dice" + randomNumber1 + ".png";
    var randomImageSource = "images/" + randomdiceImage; // images/dice1.png - images/dice6.png 
    dice1.setAttribute("src", randomImageSource);
    
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomdiceImageSource2 = "images/dice" + randomNumber2 + ".png";
    dice2.setAttribute("src", randomdiceImageSource2);
    
    // Remove animation class after animation completes
    setTimeout(function() {
        dice1.classList.remove("dice-animation");
        dice2.classList.remove("dice-animation");
    }, 500);
      if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
        document.querySelector("h1").style.color = "#55efc4";  // Mint green for player 1
        document.querySelector("h1").style.textShadow = "3px 3px 5px rgba(0, 0, 0, 0.3)";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
        document.querySelector("h1").style.color = "#74b9ff";  // Soft blue for player 2
        document.querySelector("h1").style.textShadow = "3px 3px 5px rgba(0, 0, 0, 0.3)";
    } else {
        document.querySelector("h1").innerHTML = "🎲 Draw! 🎲";
        document.querySelector("h1").style.color = "#ffeaa7";  // Soft yellow for draw
        document.querySelector("h1").style.textShadow = "3px 3px 5px rgba(0, 0, 0, 0.3)";
    }
}

// Roll dice when page loads
rollDice();

// Add click event listener to the button
document.querySelector(".roll-btn").addEventListener("click", rollDice);