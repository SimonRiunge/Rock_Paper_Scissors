let playerWinsCount=0;
let computerWinsCount=0;

function getComputerChoice(){
    const computerOptionsList=['Rock','Paper','Scissors'];
    let randomChoiceIndex=Math.floor(Math.random() * computerOptionsList.length);
    
    return computerOptionsList[randomChoiceIndex].toLowerCase();
}

//returns the player's choice
function getPlayerChoice(){
let playerChoice = prompt("Please enter your selection:");
return playerChoice.toLocaleLowerCase();
}

function playRound(playerSelection,computerSelection){
//The three possibilities when the player selects a rock

 if (playerSelection==='rock' && computerSelection==="rock"){
    console.log(playerWins, computerWins);
    return `It's a tie, ${playerSelection} matches ${computerSelection}`;
 }

 else if (playerSelection==='rock' && computerSelection==="paper"){
    computerWins+=1;
    console.log(playerWins, computerWins);
    return `You lose, ${computerSelection} beats ${playerSelection}`;
}

else if (playerSelection==='rock' && computerSelection==='scissors'){
    playerWins+=1;
    console.log(playerWins, computerWins);
    return `You win, ${playerSelection} beates ${computerSelection}`;
}        

//The three possibilities when the player selects "paper"

 else if (playerSelection==='paper' && computerSelection==="paper"){
    console.log(playerWins, computerWins);
    return `It's a tie, ${playerSelection} matches ${computerSelection}`;
 }

 else if (playerSelection==='paper' && computerSelection==="scissors"){
    computerWins+=1;
    console.log(playerWins, computerWins);
    return `You lose, ${computerSelection} beats ${playerSelection}`;
}

else if (playerSelection==='paper' && computerSelection==='rock'){
    playerWins+=1;
    console.log(playerWins, computerWins);
    return `You win, ${playerSelection} beates ${computerSelection}`;
} 

//The three possibilities when the player selects "scissors"

 else if (playerSelection==='scissors' && computerSelection==="scissors"){
    console.log(playerWins, computerWins);
    return `It's a tie, ${playerSelection} matches ${computerSelection}`;
 }

 else if (playerSelection==='scissors' && computerSelection==="rock"){
    computerWins+=1;
    console.log(playerWins, computerWins);
    return `You lose, ${computerSelection} beats ${playerSelection}`;
}

else if (playerSelection==='scissors' && computerSelection==='paper'){
    playerWins+=1;
    console.log(playerWins, computerWins);
    return `You win, ${playerSelection} beats ${computerSelection}`;
} 

else{
    return "No valid selection made";
}

}

function game(){  
    let player,computer;
    for (let i=0; i<5;i++){
        player=getPlayerChoice();
        computer=getComputerChoice();
        console.log(playRound(player,computer));
    }
if (playerWins > computerWins){
    console.log(`You have won. Score Player: ${playerWins} vs Computer: ${computerWins}`);
}
else if (playerWins < computerWins){
    console.log(`You have lost. Score Player: ${playerWins} vs Computer: ${computerWins}`);
}
else {
    console.log(`It's a tie. Score Player: ${playerWins} vs Computer: ${computerWins}`);
}
}

game();
