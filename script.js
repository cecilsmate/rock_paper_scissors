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

//Write playRound function to take two paramers playerSelection and computerSelection
function playRound(playerSelection, computerSelection){
    if (playerSelection === 1){
       if (computerSelection === 1){
        console.log('You both chose rock! It\'s a tie.');
       } else if (computerSelection === 2){
        console.log('You lose! Paper beats rock.');
       } else if (computerSelection === 3){
        console.log('You win! Rock beats paper.');
       }
    }else console.log('I haven\'t finished this part yet');
    }

    console.log(playerSelection);
    console.log(computerSelection);