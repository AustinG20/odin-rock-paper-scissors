const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const resultsDiv = document.querySelector(".display");

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

function playRound(computerChoice, humanChoice){
    humanChoice = humanChoice.toLowerCase();

    let resultPara = document.querySelector(".result");
    if(resultPara == null){
        resultPara = document.createElement("p");
        resultPara.setAttribute("class", "result");
        resultsDiv.appendChild(resultPara);
    }

    if(humanChoice === computerChoice){
        resultPara.textContent = 'You both threw ' + humanChoice;
    } else if(humanChoice === 'rock' && computerChoice != 'paper'){
        resultPara.textContent = 'You win! Rock beats scissors!'
        return 'human';
    }else if(humanChoice === 'paper' && computerChoice != 'scissors'){
        resultPara.textContent = 'You win! Paper beats rock!'
        return 'human';
    }else if(humanChoice === 'scissors' && computerChoice != 'rock'){
        resultPara.textContent = 'You win! Scissors beats paper!'
        return 'human';
    }else{
        resultPara.textContent = 'You Lose! ' + computerChoice + ' beats ' + humanChoice
        return 'computer';
    }
}

function playGame(){

    rock.addEventListener("click", () => {
        let result = playRound(getComputerChoice(), 'rock');
        updateScore(result);
        checkForWinner();
    });
    paper.addEventListener("click", () => {
        let result = playRound(getComputerChoice(), 'paper');
        updateScore(result);
        checkForWinner();
    });
    scissors.addEventListener("click", () => {
        let result = playRound(getComputerChoice(), 'scissors');
        updateScore(result);
        checkForWinner();
    });
}

function updateScore(result){
    let textSpanScoreOne = document.querySelector(".computerScore");
    
    if(textSpanScoreOne == null){
        const computerSpan = document.createElement("span");
        computerSpan.textContent = "Computer score: ";
        resultsDiv.appendChild(computerSpan);
        
        textSpanScoreOne = document.createElement("span");
        textSpanScoreOne.setAttribute("class", "computerScore");
        textSpanScoreOne.setAttribute("style", "margin-right: 20px;")
        resultsDiv.appendChild(textSpanScoreOne);
        
        const humanSpan = document.createElement("span");
        humanSpan.textContent = "Human score: ";
        resultsDiv.appendChild(humanSpan);
        
        textSpanScoreTwo = document.createElement("span");
        textSpanScoreTwo.setAttribute("class", "humanScore");
        resultsDiv.appendChild(textSpanScoreTwo);

        if(result === 'computer'){
            textSpanScoreOne.textContent = 1;
            textSpanScoreTwo.textContent = 0;
        }else if(result === 'human'){
            textSpanScoreOne.textContent = 0;
            textSpanScoreTwo.textContent = 1;
        }else{
            textSpanScoreOne.textContent = 0;
            textSpanScoreTwo.textContent = 0;
        }
    }else{
        if(result === 'computer'){
            let score = parseInt(textSpanScoreOne.textContent);
            textSpanScoreOne.textContent = ++score;
        }else if(result === 'human'){
            let score = parseInt(textSpanScoreTwo.textContent);
            textSpanScoreTwo.textContent = ++score;
        }
    }
}

function checkForWinner(){
    let computerScoreSpan = document.querySelector(".computerScore");
    let humanScoreSpan = document.querySelector(".humanScore");

    let computerScore = parseInt(computerScoreSpan.textContent);
    let humanScore = parseInt(humanScoreSpan.textContent);

    if(computerScore == 5){
        let winnerPara = document.createElement("p");
        winnerPara.textContent = 'You Lose! Better luck next time!';
        resultsDiv.appendChild(winnerPara);
    }else if(humanScore == 5){
        let winnerPara = document.createElement("p");
        winnerPara.textContent = 'You win!!!';
        resultsDiv.appendChild(winnerPara);
    }
}

