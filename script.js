playGame();

function getComputerChoice(){
    let randNum = Math.random();

    if(randNum >= 0 && randNum < 0.33){
        return 'rock';
    }else if(randNum >= 0.33 && randNum < 0.66){
        return 'paper';
    }else{
        return 'scissors';
    }
}

function getHumanChoice(){
    return prompt("Will you choose rock, paper, or scissors?");
}

function playRound(computerChoice, humanChoice){
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice){
        console.log('You both threw ' + humanChoice);
    } else if(humanChoice === 'rock' && computerChoice != 'paper'){
        console.log('You win! Rock beats scissors!');
        return 'human';
    }else if(humanChoice === 'paper' && computerChoice != 'scissors'){
        console.log('You win! Paper beats rock!');
        return 'human';
    }else if(humanChoice === 'scissors' && computerChoice != 'rock'){
        console.log('You win! Scissors beats paper!');
        return 'human';
    }else{
        console.log('You Lose! ' + computerChoice + ' beats ' + humanChoice);
        return 'computer';
    }
}

function playGame(){
    let computerScore = 0;
    let humanScore = 0;
    
    for(let i = 0; i < 5; i++){
        let result = playRound(getComputerChoice(), getHumanChoice());

        if(result === 'computer'){
            computerScore++;
        }else if(result === 'human'){
            humanScore++;
        }
    }

    console.log('GAME OVER!!!!')

    if(humanScore > computerScore){
        console.log('You win!!! Final Scores')
        console.log('Your score: ' + humanScore);
        console.log('Computer\'s score: ' + computerScore);
    }else if(humanScore < computerScore) {
        console.log('You Lose! Better luck next time! Final Scores');
        console.log('Computer\'s score: ' + computerScore);
        console.log('Your score: ' + humanScore);
    }else{
        console.log('You Tied! Better luck next time! Final Scores');
        console.log('Computer\'s score: ' + computerScore);
        console.log('Your score: ' + humanScore);
    }
}