/* Legacy version */

function getComputerChoice() {
    const returnInt = Math.floor(Math.random() * 3) + 1;
    if (returnInt === 1) {
        return 'Rock';
    } else if (returnInt === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    const lowerPlayerSelection = playerSelection.toLowerCase();
    switch(computerSelection) {
        case 'Rock': 
            switch(lowerPlayerSelection) {
                case 'rock':
                    return "Draw! Both chose the same object.";
                    break; 
                case 'paper': 
                    return "You Win! Paper beats Rock";
                    break;
                case 'scissors':
                    return "You Lose! Rock beats Scissors";
                    break;
                default:
                    console.error("This isn't supposed to happen."); 
                    break;
            }
            break; 
        case 'Paper':
            switch(lowerPlayerSelection) {
                case 'rock':
                    return "You Lose! Paper beats Rock";
                    break; 
                case 'paper':
                    return "Draw! Both chose the same object.";
                    break;
                case 'scissors':
                    return "You Win! Scissors beats Paper";
                    break;
                default:
                    console.error("This isn't supposed to happen."); 
                    break;
            }
            break; 
        case 'Scissors':
            switch(lowerPlayerSelection) {
                case 'rock':
                    return "You Win! Rock beats Scissors";
                    break; 
                case 'paper': 
                    return "You Lose! Scissors beats paper";
                    break;
                case 'scissors':
                    return "Draw! Both chose the same object.";
                    break;
                default:
                    console.error("This isn't supposed to happen."); 
                    break;
            } 
            break; 
    }
}

function verifyAnswer(playerSelection) {
    const lowerString = playerSelection.toLowerCase();
    if (lowerString === 'rock') {
        return true;
    } else if (lowerString === 'paper') {
        return true;
    } else if (lowerString === 'scissors') {
        return true;
    } else {
        alert("Invalid entry. Please, try again.");
        return false; 
    }
}

function game() {
    let matchCounter = 0; 
    let playerSelection;
    let computerSelection; 
    let isOver = false;
    let matchResult = "";
    let wordsArray; 
    let playerScore = 0;
    let computerScore = 0;

    alert("Welcome to Jokenpo! You'll have five stands against the computer. Good luck!");
    do {
        alert(`Round Nº${matchCounter + 1}. Be ready!`);
        do {
            playerSelection = prompt("Rock, Paper or Scissors?", playerSelection=1);
            if (playerSelection == null) 
                break;
        } while (!verifyAnswer(playerSelection));
        computerSelection = getComputerChoice();
        matchResult = playRound(playerSelection, computerSelection); 
        alert(matchResult); 
        wordsArray = matchResult.split(" "); 
        if (wordsArray[1] === 'Win!') {
            playerScore++;
        } else if (wordsArray[1] === 'Lose!') {
            computerScore++;
        }
        matchCounter++; 
        if (matchCounter >= 5) {
            alert("Player and Computer got the same score. Draw!");
            isOver = true;
        } else if (playerScore >= 3) {
            alert("You got the highest score. Well done!");
            isOver = true;
        } else if (computerScore >= 3) {
            alert("Computer got the highest score. Game over!");
            isOver = true;
        }
    } while (!isOver); 
}

/* New version */

/* Upcoming features: 
   - Shrink and grow animations. */

// Creates a fade-in/fade-out permanent toggle state.
function toggleFade(element, timeToToggle) {
    if (element.classList.contains("fade-in")) {
        element.classList.remove("fade-in");
        element.classList.add("fade-out");
    } else {
        element.classList.remove("fade-out");
        element.classList.add("fade-in");
    }
    setTimeout(() => {
        toggleFade(element, timeToToggle);
    }, timeToToggle);
}

// Stars background toggle:
const toggleStars = document.getElementById("stars");
toggleFade(toggleStars, 2000);

// "Click above" toggle:
const toggleText = document.getElementById("clickAbove");
toggleFade(toggleText, 1000);

// When user set 'click' event, a copyright warning message will appear.
const mainScreen = document.querySelector('#main-screen');
const copyrightButton = document.querySelector('#copyright');
copyrightButton.addEventListener('click', () => {
    // Message Pop-Up
    const copyMessage =  document.createElement('div');
    copyMessage.classList.add('copy-message')
    mainScreen.appendChild(copyMessage);
    // Exit Button
    const exitButton = document.createElement('button');
    exitButton.classList.add('exitButton');
    exitButton.textContent = 'X'; 
    copyMessage.appendChild(exitButton);
    // Link Button
    const linkButton = document.createElement('button');
    linkButton.classList.add('linkButton');
    linkButton.textContent = 'Click Here';
    copyMessage.appendChild(linkButton);
    // When user set 'click' event, warning is closed. 
    exitButton.addEventListener('click', () => {
        copyMessage.remove();
    });
    // When user set 'click' event, it opens an hyperlink.
    linkButton.addEventListener('click', () => {
        window.open("https://github.com/Reksee-Firewall/rock-paper-scissors", "_blank");
    });
});

// When user set 'click' event, the versus box will vanish.
const vsButton = document.querySelector('#versus-button');
vsButton.addEventListener('click', () => {
    // Get a reference to the element you want to remove: 
    const versusBox = document.querySelector('#versus-box');
    versusBox.classList.add('fadeOut');
    setTimeout(() => {
        versusBox.remove();
    }, 500);
});

// Start Game

// Draw HUD