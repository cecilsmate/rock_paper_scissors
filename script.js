//Make function for random computer choice 1-3 getComputerchoice
function getComputerchoice(){
    let computerSelection = Math.floor(Math.random()*3) + 1;
    return computerSelection;
}
//return output as computerSelection
computerSelection = getComputerchoice();

//Prompt user for input 'rock paper or scissors' playerSelection


//Make input case insensative using .toLowercase
//Assign rock paper scissor 1-3
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
playerSelection = getPlayerselection();
console.log(playRound(playerSelection, computerSelection));
//Write playRound function to take two paramers playerSelection and computerSelection
function playRound(playerSelection, computerSelection){
    if (playerSelection === 1 && computerSelection === 1){
        console.log('Computer also chose rock!  It\'s a tie.');
    }else if (playerSelection === 1 && computerSelection === 2){
        console.log('Compter chose paper, you lose! Paper covers rock.');
    }else if (playerSelection === 1 && computerSelection === 3){
        console.log('Computer chose scissors, you win! Rock beats scissors.');
    }else if (playerSelection === 2 && computerSelection === 1){
        console.log('Computer chose rock, you win! Paper covers rock.');
    }else if (playerSelection === 2 && computerSelection === 2){
        console.log('Computer also chose paper! It\'s a tie');
    }else if (playerSelection === 2 && computerSelection === 3){
        console.log('Computer chose scissors, you lose! Scissors cut paper');
    }else if (playerSelection === 3 && computerSelection === 1){
        console.log('Computer chose rock, you lose! Rock beats paper.');
    }else if (playerSelection === 3 && computerSelection === 2){
        console.log('Computer chose paper, you win! Scissors cut paper.');
    }else {console.log('Computer also chose scissors! It\'s a tie.')}
}