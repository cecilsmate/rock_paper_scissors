computerSelection = getComputerchoice();

let playerSelection;
let playerScore = 0;
let computerScore = 0;

console.log(game());



function game (){
    
    
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerchoice();
        playerSelection = getPlayerselection();
        playRound(playerSelection, computerSelection);
     }
    if (computerScore > playerScore){
        console.log('Computer wins!');
    }else{console.log("You win!");}
    console.log('Computer score is ' + computerScore);
    console.log('Your score is ' + playerScore)
}


















//Prompt user for input 'rock paper or scissors' playerSelection
//Make input case insensative using .toLowercase
//Assign rock paper scissor 1-3 and return as playerSelection
function getPlayerselection(){
    let text = prompt('Choose rock, paper, or scissors!', 'What will it be?');
    if (text.toLowerCase() === 'rock'){
        playerSelection = 1;
    }else if (text.toLowerCase() === 'paper'){
        playerSelection = 2;
    }else if (text.toLowerCase() === 'scissors'){
        playerSelection = 3;
    }else alert('Error: You must choose rock, paper, or scissors!');
    return playerSelection;
}

//Make function for random computer choice 1-3 getComputerchoice
//return output as computerSelection
function getComputerchoice(){
    let computerSelection = Math.floor(Math.random()*3) + 1;
    return computerSelection;
}
//return output as computerSelection

//Write playRound function to take two paramers playerSelection and computerSelection
function playRound(playerSelection, computerSelection){
    if (playerSelection === 1 && computerSelection === 1){
        console.log('Computer also chose rock!  It\'s a tie.');
    }else if (playerSelection === 1 && computerSelection === 2){
        console.log('Computer chose paper, you lose! Paper covers rock.');
        computerScore++;
    }else if (playerSelection === 1 && computerSelection === 3){
        console.log('Computer chose scissors, you win! Rock beats scissors.');
        playerScore++;
    }else if (playerSelection === 2 && computerSelection === 1){
        console.log('Computer chose rock, you win! Paper covers rock.');
        playerScore++;
    }else if (playerSelection === 2 && computerSelection === 2){
        console.log('Computer also chose paper! It\'s a tie');
    }else if (playerSelection === 2 && computerSelection === 3){
        console.log('Computer chose scissors, you lose! Scissors cut paper');
        computerScore++;
    }else if (playerSelection === 3 && computerSelection === 1){
        console.log('Computer chose rock, you lose! Rock beats paper.');
        computerScore++;
    }else if (playerSelection === 3 && computerSelection === 2){
        console.log('Computer chose paper, you win! Scissors cut paper.');
        playerScore++;
    }else {console.log('Computer also chose scissors! It\'s a tie.')}
}
