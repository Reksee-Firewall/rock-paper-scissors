|| New Update: Rock, Paper & Scissors! 

Your game is going to play against the computer, so begin with a function called 
getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play. Tip: use the console to 
make sure this is returning the expected output before moving to the next step!

Write a function that plays a single round of Rock Paper Scissors. The function should 
take two parameters - the playerSelection and computerSelection - and then return a string 
that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, 
ROCK, RocK or any other variation).

Write a NEW function called game(). Use the previous function inside of this one to play a 
5 round game that keeps score and reports a winner or loser at the end.

|| New Update: Game UI. 

In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

1. Remove the logic that plays exactly five rounds.

2. Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

3. Add a div for displaying results and change all of your console.logs into DOM methods.

4. Display the running score, and announce a winner of the game once one player reaches 5 points.