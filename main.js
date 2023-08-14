// Global variables:
const mainScreen = document.querySelector("#main-screen");
const rowOfCards = document.createElement('div');
rowOfCards.classList.add('cardsContainer');
let playerSum = 0;
let computerSum = 0;

// Well, it draws cards. 
const rock = document.createElement('img');
const paper = document.createElement('img');
const scissors = document.createElement('img');
function drawCards() {
    rock.src = 'assets/cards-selection/default-rock.png';
    rock.alt = 'A card with a rock painted in it.'; 
    rock.classList.add('cards');
    rock.classList.add('card-one');
    rowOfCards.appendChild(rock);

    paper.src = 'assets/cards-selection/default-paper.png'
    paper.alt = 'A card with a paper painted in it.';
    paper.classList.add('cards');
    paper.classList.add('card-two');
    rowOfCards.appendChild(paper);

    scissors.src = 'assets/cards-selection/default-scissors.png'
    scissors.alt = 'A card with scissors painted in it.'; 
    scissors.classList.add('cards');
    scissors.classList.add('card-three');
    rowOfCards.appendChild(scissors);

    mainScreen.appendChild(rowOfCards);
    // <--
}

// Draws the in-game UI.
const pageBody = document.querySelector('#content');
const footerHUD = document.createElement('div');
const playerScore = document.createElement('figure'); 
const pScoreImg = document.createElement('img');
let pScoreTxt = document.createElement('span');
const playerIcon = document.createElement('img');
const unknownPlayer = document.createElement('img');
const unknownComputer = document.createElement('img');
const computerScore = document.createElement('figure'); 
const cScoreImg = document.createElement('img');
let cScoreTxt = document.createElement('span');
const computerIcon = document.createElement('img');
function drawFooterHUD() {
    // Draws HUD
    footerHUD.classList.add("footerHUD");
    // Player Score
    pScoreImg.src = 'assets/score-icon.png'; 
    pScoreImg.alt = 'Player score icon.';
    pScoreTxt.textContent = 0;
    playerScore.classList.add("pScoreContainer");
    pScoreTxt.classList.add("pScoreTxt");
    playerScore.appendChild(pScoreImg);
    playerScore.appendChild(pScoreTxt);
    // <--
    // Player Icon 
    playerIcon.src = 'assets/player-icon.png';
    playerIcon.alt = 'Player icon.';
    playerIcon.classList.add('icon');
    playerScore.appendChild(playerIcon);
    // <-- 
    // Unknown Player Cards
    unknownPlayer.src = 'assets/unknown-cards.png'; 
    unknownPlayer.alt = 'Dark color cards of unknown value.';
    unknownPlayer.classList.add("UnkPlayer"); 
    // Unknown Computer Cards
    unknownComputer.src = 'assets/unknown-cards.png'; 
    unknownComputer.alt = 'Dark color cards of unknown value.';
    unknownComputer.classList.add("UnkComputer"); 
    // Computer Score
    cScoreImg.src = 'assets/score-icon.png'; 
    cScoreImg.alt = 'Computer score icon.';
    cScoreTxt.textContent = 0;
    computerScore.classList.add("cScoreContainer");
    cScoreTxt.classList.add("cScoreTxt");
    computerScore.appendChild(cScoreImg);
    computerScore.appendChild(cScoreTxt);
    // <--
    // Computer Icon
    computerIcon.src = 'assets/computer-icon.png';
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

// Reset DOM every time a match ends.
const eventBarrier = document.createElement('div'); 
eventBarrier.setAttribute("id", "eventBarrier");
const youWin = document.createElement('img');
youWin.src = "assets/you-win.png";
youWin.classList.add("gameOver");
const youLoose = document.createElement('img'); 
youLoose.src = "assets/you-loose.png";
youLoose.classList.add("gameOver"); 
function resetMatch() {
    if (playerSum >= 5) {
        eventBarrier.appendChild(youWin);
        playAudio(victoryAudio);
        setTimeout(() => {
            youWin.style.opacity = 1;
        }, 50);
    } else if (computerSum >= 5) {
        eventBarrier.appendChild(youLoose);
        playAudio(overAudio);
        setTimeout(() => {
            youLoose.style.opacity = 1;
        }, 50);
    } else {
        eventBarrier.remove();
        rock.src = 'assets/cards-selection/default-rock.png';
        rock.classList.remove('selected-card');
        paper.src = 'assets/cards-selection/default-paper.png';
        paper.classList.remove('selected-card');
        scissors.src = 'assets/cards-selection/default-scissors.png';
        scissors.classList.remove('selected-card');
    }
}

// Play Sounds
const clickAudio = document.querySelector("#clickAudio")
const overAudio = document.querySelector("#overAudio");
const victoryAudio = document.querySelector("#victoryAudio");
function playAudio(audio) {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}
// A round is displayed.
function playRound(playerSelection=0, computerSelection=0) {
    // We may proceed to the logic. [1] = Rock; [2] = Paper; [3] = Scissors. 
    switch(computerSelection) {
        case 1: 
            rock.src = 'assets/cards-selection/red-rock.png';
            rock.classList.add('selected-card');
            switch(playerSelection) {
                case 1: 
                    rock.src = 'assets/cards-selection/purple-rock.png';
                    setTimeout(() => {
                        resetMatch();
                    }, 2000);
                    break;
                case 2:
                    playerSum++;
                    setTimeout(() => {
                        pScoreTxt.textContent = playerSum;
                        resetMatch();
                    }, 2000);
                    break;
                case 3:
                    computerSum++;
                    setTimeout(() => {
                        cScoreTxt.textContent = computerSum;
                        resetMatch();
                    }, 2000);
                    break;
                default:
                    console.error("This isn't supposed to happen.");
                    break;
            }
            break; 
        case 2:
            paper.src = 'assets/cards-selection/red-paper.png';
            paper.classList.add('selected-card');
            switch(playerSelection) {
                case 1:
                    computerSum++;
                    setTimeout(() => {
                        cScoreTxt.textContent = computerSum;
                        resetMatch();
                    }, 2000);
                    break;
                case 2:
                    paper.src = 'assets/cards-selection/purple-paper.png';
                    setTimeout(() => {
                        resetMatch();
                    }, 2000);
                    break;
                case 3:
                    playerSum++;
                    setTimeout(() => {
                        pScoreTxt.textContent = playerSum;
                        resetMatch();
                    }, 2000);
                    break;
                default:
                    console.error("This isn't supposed to happen."); 
                    break;
            }
            break; 
        case 3:
            scissors.src = 'assets/cards-selection/red-scissors.png';
            scissors.classList.add('selected-card');
            switch(playerSelection) {
                case 1:
                    playerSum++;
                    setTimeout(() => {
                        pScoreTxt.textContent = playerSum;
                        resetMatch();
                    }, 2000);
                    break;
                case 2: 
                    computerSum++;
                    setTimeout(() => {
                        cScoreTxt.textContent = computerSum;
                        resetMatch();
                    }, 2000);
                    break;
                case 3:
                    scissors.src = 'assets/cards-selection/purple-scissors.png';
                    setTimeout(() => {
                        resetMatch();
                    }, 2000);
                    break;
                default:
                    console.error("This isn't supposed to happen."); 
                    break;
            } 
            break;
        default: 
            console.error("This isn't supposed to happen.");
            break; 
    }
}

// Allows the computer to select one of the cards.
function getComputerChoice() {
    const returnInt = Math.floor(Math.random() * 3) + 1;
    return returnInt;
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

// Functions used in Event Listeners
let playerSelection = 0;
function mouseIn(elementNode) {
    if (elementNode.classList.contains('card-one')) {
        if (!rock.classList.contains('selected-card')) {
            rock.src = 'assets/cards-selection/white-rock.png'; 
        }
        rock.classList.add('hovering-card');
    } else if (elementNode.classList.contains('card-two')) {
        if (!paper.classList.contains('selected-card')) {
            paper.src = 'assets/cards-selection/white-paper.png'; 
        }
        paper.classList.add('hovering-card');
    } else if (elementNode.classList.contains('card-three')) {
        if (!scissors.classList.contains('selected-card')) {
            scissors.src = 'assets/cards-selection/white-scissors.png'; 
        }
        scissors.classList.add('hovering-card');
    } else {
        console.error("Invalid elementNode given as argument to the function.");
    }
}
function mouseOut(elementNode) {
    if (elementNode.classList.contains('card-one')) {
        if (!rock.classList.contains('selected-card')) {
            rock.src = 'assets/cards-selection/default-rock.png'; 
        }
        rock.classList.remove('hovering-card');
    } else if (elementNode.classList.contains('card-two')) {
        if (!paper.classList.contains('selected-card')) {
            paper.src = 'assets/cards-selection/default-paper.png'; 
        }
        paper.classList.remove('hovering-card');
    } else if (elementNode.classList.contains('card-three')) {
        if (!scissors.classList.contains('selected-card')) {
            scissors.src = 'assets/cards-selection/default-scissors.png'; 
        }
        scissors.classList.remove('hovering-card');
    } else {
        console.error("Invalid elementNode given as argument to the function.");
    }
}
function mouseClick(elementNode) {
    if (elementNode.classList.contains('card-one')) {
        rock.src = 'assets/cards-selection/blue-rock.png';
        rock.classList.add('selected-card');
        rock.classList.remove('hovering-card');
        playerSelection = 1;
    } else if (elementNode.classList.contains('card-two')) {
        paper.src = 'assets/cards-selection/blue-paper.png';
        paper.classList.add('selected-card');
        paper.classList.remove('hovering-card');
        playerSelection = 2;
    } else if (elementNode.classList.contains('card-three')) {
        scissors.src = 'assets/cards-selection/blue-scissors.png';
        scissors.classList.add('selected-card');
        scissors.classList.remove('hovering-card');
        playerSelection = 3;
    } else {
        console.error("Invalid elementNode given as argument to the function.");
    }
    // Play Audio
    playAudio(clickAudio);
    // First, we'll block the events with a 'pos: absolute' barrier.
    mainScreen.appendChild(eventBarrier);
    playRound(playerSelection, getComputerChoice());
}
// <--

// Stars background toggle:
const toggleStars = document.getElementById("stars");
toggleFade(toggleStars, 2000);

// "Click above" toggle:
const toggleText = document.getElementById("clickAbove");
toggleFade(toggleText, 1000);

// When player set 'click' event, a copyright warning message will appear.
const copyrightButton = document.querySelector('#copyright');
const copyMessage =  document.createElement('div');
const exitButton = document.createElement('button');
const linkButton = document.createElement('button');
copyrightButton.addEventListener('click', () => {
    // Message Pop-Up
    copyMessage.classList.add('copy-message')
    mainScreen.appendChild(copyMessage);
    // Exit Button
    exitButton.classList.add('exitButton');
    exitButton.textContent = 'X'; 
    copyMessage.appendChild(exitButton);
    // Link Button
    linkButton.classList.add('linkButton');
    linkButton.textContent = 'Click Here';
    copyMessage.appendChild(linkButton);
    // When player set 'click' event, warning is closed. 
    exitButton.addEventListener('click', () => {
        copyMessage.remove();
    });
    // When player set 'click' event, it opens an hyperlink.
    linkButton.addEventListener('click', () => {
        window.open("https://github.com/Reksee-Firewall/rock-paper-scissors", "_blank");
    });
});

// When player set 'click' event, the versus box will vanish. Then, the game will start.
const versusBox = document.querySelector('#versus-box');
const vsButton = document.querySelector('#versus-button');
vsButton.addEventListener('click', () => {
    // Get a reference to the element you want to remove: 
    versusBox.classList.add('fadeOut');
    setTimeout(() => {
        versusBox.remove();
        // Start Game
        drawFooterHUD(); 
        drawCards();
    }, 500);
});

// When player hovers over a card, an animation will be displayed.
// Rock Card 
rock.addEventListener('mouseenter', () => mouseIn(rock));
rock.addEventListener('mouseleave', () => mouseOut(rock));
// <--
// Paper Card
paper.addEventListener('mouseenter', () => mouseIn(paper));
paper.addEventListener('mouseleave', () => mouseOut(paper));
// <-- 
// Scissors Card
scissors.addEventListener('mouseenter', () => mouseIn(scissors));
scissors.addEventListener('mouseleave', () => mouseOut(scissors));
// <--
// When player clicks on a card, an animation will be displayed and the match will be set. 
rock.addEventListener('click', () => mouseClick(rock));
paper.addEventListener('click', () => mouseClick(paper));
scissors.addEventListener('click', () => mouseClick(scissors)); 