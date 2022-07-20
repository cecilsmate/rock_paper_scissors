//Make function for random computer choice 1-3 getComputerchoice
function getComputerchoice(){
    let computerSelection = Math.floor(Math.random()*3) + 1;
    return computerSelection;
}
//return output as computerSelection
computerSelection = getComputerchoice();

//Prompt user for input 'rock paper or scissors' playerSelection
playerSelection = prompt('Choose rock, paper, or scissors!', 'Type here');
//Make input case insensative using .toLowercase
//Assign rock paper scissor 1-3

//Write playRound function to take two paramers playerSelection and computerSelection
//Write playRound to return outcome string based on < > === win lose tie

//console.log(playRound(playerSelection, computerSelection))