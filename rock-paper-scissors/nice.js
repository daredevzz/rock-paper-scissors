let choice = 0;
let mChoice = 0;
let humanScore = 0;
let computerScore = 0;

function getPlayerChoice(){
    choice = prompt('rock, paper Or scissors?');
    choice = choice.toLowerCase();
    console.log(choice);    
}

function getMachineChoice(){
    mChoice = Math.floor(Math.random()*3)
    switch (mChoice){
        case 0:
            mChoice = 'rock'
            break;
        case 1:
            mChoice = 'paper'
            break;
        case 2:
            mChoice = 'scissors'
            break;
        default:
            console.log('Error detected')
    }
}

function playStatus(){
    
    getPlayerChoice();
    getMachineChoice();

    if(choice == 'rock' && mChoice == 'rock'){
        console.log(`Your choice is ${choice} and the computer's chocie is ${mChoice}.`)
        console.log('Tie, Play Again ')
        return 'tie'
    } 
    else if(choice == 'rock' && mChoice == 'paper'){
        console.log(`Your choice is ${choice} and the computer's chocie is ${mChoice}.`)
        console.log('You lose, paper beats rock!')
        return 'defeat'
    }
     else if(choice == 'rock' && mChoice == 'scissors'){
        console.log(`Your choice is ${choice} and the computer's chocie is ${mChoice}.`)
        console.log('You win, rock beats scissors!')
        return 'victory'
    }
     else  if(choice == 'paper' && mChoice == 'rock'){
        console.log(`Your choice is ${choice} and the computer's chocie is ${mChoice}.`)
        console.log('You win, paper beats rock!')
        return 'victory'
    } 
    else if(choice == 'paper' && mChoice == 'paper'){
        console.log(`Your choice is ${choice} and the computer's chocie is ${mChoice}.`)
        console.log('Tie, Play Again ')
        return 'tie'
    }
     else if(choice == 'paper' && mChoice == 'scissors'){
        console.log(`Your choice is ${choice} and the computer's chocie is ${mChoice}.`)
        console.log('You lose, scissors beats paper!')
        return 'defeat'
    } else  if(choice == 'scissors' && mChoice == 'rock'){
        console.log(`Your choice is ${choice} and the computer's chocie is ${mChoice}.`)
        console.log('You lose, rock beats scissors!')
        return 'defeat'
    } 
    else if(choice == 'scissors' && mChoice == 'paper'){
        console.log(`Your choice is ${choice} and the computer's chocie is ${mChoice}.`)
        console.log('You win, scissors beats paper!')
        return 'victory'
    }
     else if(choice == 'scissors' && mChoice == 'scissors'){
        console.log(`Your choice is ${choice} and the computer's chocie is ${mChoice}.`)
        console.log('Tie, Play Again ')
        
        return 'tie'
    } 

}

function playGame(){
    choice = 0;
    mChoice = 0;
    humanScore = 0;
    computerScore = 0;
    
    let round1 = playStatus();

    switch (round1){
        case 'tie':
            console.log(`Your score is ${humanScore}, computer score is ${computerScore}`)
            break;
        case 'victory':
            humanScore+=1;
            console.log(`Your score is ${humanScore}, computer score is ${computerScore}`)
            break;
        case 'defeat':
            computerScore+=1;
            console.log(`Your score is ${humanScore}, computer score is ${computerScore}`)
            break;
        default:
            console.log('Error detected')
    }

    let round2 = playStatus();
    switch (round2){
        case 'tie':
            console.log(`Your score is ${humanScore}, computer score is ${computerScore}`)
            break;
        case 'victory':
            humanScore+=1;
            console.log(`Your score is ${humanScore}, computer score is ${computerScore}`)
            break;
        case 'defeat':
            computerScore+=2;
            console.log(`Your score is ${humanScore}, computer score is ${computerScore}`)
            break;
        default:
            console.log('Error detected')
    }
    let round3 = playStatus();
    switch (round3){
        case 'tie':
            console.log(`Your score is ${humanScore}, computer score is ${computerScore}`)
            break;
        case 'victory':
            humanScore+=1;
            console.log(`Your score is ${humanScore}, computer score is ${computerScore}`)
            break;
        case 'defeat':
            computerScore+=2;
            console.log(`Your score is ${humanScore}, computer score is ${computerScore}`)
            break;
        default:
            console.log('Error detected')
    }
    let round4 = playStatus();
    switch (round4){
        case 'tie':
            console.log(`Your score is ${humanScore}, computer score is ${computerScore}`)
            break;
        case 'victory':
            humanScore+=1;
            console.log(`Your score is ${humanScore}, computer score is ${computerScore}`)
            break;
        case 'defeat':
            computerScore+=2;
            console.log(`Your score is ${humanScore}, computer score is ${computerScore}`)
            break;
        default:
            console.log('Error detected')
    }
    let round5 = playStatus();
    switch (round5){
        case 'tie':
            console.log(`Your score is ${humanScore}, computer score is ${computerScore}`)
            break;
        case 'victory':
            humanScore+=1;
            console.log(`Your score is ${humanScore}, computer score is ${computerScore}`)
            break;
        case 'defeat':
            computerScore+=2;
            console.log(`Your score is ${humanScore}, computer score is ${computerScore}`)
            break;
        default:
            console.log('Error detected')
    }

    if (humanScore > computerScore){
        console.log('Human wins!')
    } else{
        console.log('Computer wins!')

    }


}

playGame();









