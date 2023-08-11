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

function startHUD() {
    // Draw HUD
    const pageBody = document.querySelector('#content');
    const footerHUD = document.createElement('div');
    footerHUD.classList.add("footerHUD");

    // Player Score
    playerScore = document.createElement('figure'); 
    pScoreImg = document.createElement('img');
    pScoreImg.src = 'data/score-icon.png'; 
    pScoreImg.alt = 'Player score icon.';
    pScoreTxt = document.createElement('span');
    pScoreTxt.textContent = 0;

    playerScore.classList.add("pScoreContainer");
    pScoreTxt.classList.add("pScoreTxt");

    playerScore.appendChild(pScoreImg);
    playerScore.appendChild(pScoreTxt);
    // <--

    // Player Icon 
    playerIcon = document.createElement('img');
    playerIcon.src = 'data/player-icon.png';
    playerIcon.alt = 'Player icon.';
    playerIcon.classList.add('icon');
    playerScore.appendChild(playerIcon);
    // <-- 

    // Unknown Player Cards
    unknownPlayer = document.createElement('img');
    unknownPlayer.src = 'data/unknown-cards.png'; 
    unknownPlayer.alt = 'Dark color cards of unknown value.';
    unknownPlayer.classList.add("UnkPlayer"); 

    // Unknown Computer Cards
    unknownComputer = document.createElement('img');
    unknownComputer.src = 'data/unknown-cards.png'; 
    unknownComputer.alt = 'Dark color cards of unknown value.';
    unknownComputer.classList.add("UnkComputer"); 

    // Computer Score
    computerScore = document.createElement('figure'); 
    cScoreImg = document.createElement('img');
    cScoreImg.src = 'data/score-icon.png'; 
    cScoreImg.alt = 'Computer score icon.';
    cScoreTxt = document.createElement('span');
    cScoreTxt.textContent = 0;

    computerScore.classList.add("cScoreContainer");
    cScoreTxt.classList.add("cScoreTxt");

    computerScore.appendChild(cScoreImg);
    computerScore.appendChild(cScoreTxt);
    // <--

    // Computer Icon
    computerIcon = document.createElement('img');
    computerIcon.src = 'data/computer-icon.png';
    computerIcon.alt = 'Computer icon.';
    computerIcon.classList.add('icon');
    computerScore.appendChild(computerIcon);
    // <-- 

    // Append items to HUD
    footerHUD.appendChild(playerScore);
    footerHUD.appendChild(unknownPlayer);
    footerHUD.appendChild(unknownComputer);
    footerHUD.appendChild(computerScore);
    pageBody.appendChild(footerHUD);
}

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

// When user set 'click' event, the versus box will vanish. Then, the game will start.
const vsButton = document.querySelector('#versus-button');
vsButton.addEventListener('click', () => {
    // Get a reference to the element you want to remove: 
    const versusBox = document.querySelector('#versus-box');
    versusBox.classList.add('fadeOut');
    setTimeout(() => {
        versusBox.remove();
        // Start Game
        startHUD(); 
    }, 500);
});
