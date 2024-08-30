

document.querySelector('.rock-btn').addEventListener('click', () => {
  playGame('rock');
});
document.querySelector('.paper-btn').addEventListener('click', () => {
  playGame('paper');
});
document.querySelector('.scissors-btn').addEventListener('click', () => {
  playGame('scissors');
});

let isAutoPlay = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlay) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlay = true;
  } else {
    clearInterval(intervalId);
    isAutoPlay = false;
  }
}

let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
updateScore();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScore();

  document.querySelector('.js-result').innerHTML = `${result}`;
  document.querySelector('.js-move').innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
}

function pickComputerMove() {
  let computerMove = '';
  const random_num = Math.random();

  if (random_num >= 0 && random_num < 1 / 3) {
    computerMove = 'rock';
  } else if (random_num >= 1 / 3 && random_num < 2 / 3) {
    computerMove = 'paper';
  } else if (random_num >= 2 / 3 && random_num < 1) {
    computerMove = 'scissors';
  }
  return computerMove;
}

function updateScore() {
  document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}
// document.querySelector('.rock-btn').
//    addEventListener('click',()=>{
//     palyGame('rock');
//    })
//    document.querySelector('.paper-btn').
//    addEventListener('click',()=>{
//     palyGame('paper');
//    })
//    document.querySelector('.scissors-btn').
//    addEventListener('click',()=>{
//     palyGame('scissors');
//    })
   
//    let isAutoPlay = false;
//    let intervalId;
   
//    function autoPlay(){
//      if(!isAutoPlay){
//       intervalId = setInterval(function(){
//         const playerMove = pickComputerMove();
//         palyGame(playerMove);
//       },1000);
//       isAutoPlay = true;
//      }else{
//       clearInterval(intervalId);
//       isAutoPlay = false;
//      }
    
//    }

    
     
//      let score=JSON.parse(localStorage.getItem('score'));

//      updateScore();

//      function palyGame(playerMove){
//        const computerMove= pickComputerMove();

//         let result='';

//        if(playerMove=== 'scissors'){

//         if(computerMove === 'rock'){
//         result='You lose.';
//         }else if(computerMove === 'paper'){
//         result='You win.';
//         }else if (computerMove ==='Scissors' ){
//         result='Tie.';
//         }
//        }else if(playerMove=== 'paper'){

//          if(computerMove === 'rock'){
//          result='You win.';
//          }else if(computerMove === 'paper'){
//           result='Tie.';
//          }else if (computerMove ==='Scissors' ){
//          result='You lose.';
//            }

//        }else if(playerMove==='rock'){

//          if(computerMove ==='rock'){
//          result='Tie.';
//          }else if(computerMove ==='paper'){
//          result='You lose.';
//          }else if (computerMove ==='Scissors' ){
//          result='You win.';
//          }
//        }
//          if(result === 'You win.'){
//            score.wins+=1;
//          } else if(result === 'You lose.'){
//            score.losses+=1;
//          } else if(result === 'Tie.'){
//            score.ties+=1;
//          }


//          localStorage.setItem('score',JSON.stringify(score));
//          updateScore();

//          document.querySelector('.js-result').innerHTML = `${result}`;
//          document.querySelector('.js-move').innerHTML 
//           = `You
//           <img src="images/${playerMove}-emoji.png" class="move-icon">
//           <img src="images/${computerMove}-emoji.png" class="move-icon">
//           Computer`;
         
//   }

       
//   function pickComputerMove(){
//       let computerMove='';
//      const random_num=Math.random();
     
//      if(random_num >= 0 && random_num  < 1/3){
//      computerMove ='rock';
//      }else if(random_num >= 1/3 && random_num < 2/3){
//      computerMove ='paper';
//      }else if(random_num > 2/3 && random_num < 1) {
//      computerMove ='Scissors';
//      }
//      return computerMove;
//    }

//    function updateScore(){
//     document.querySelector('.js-score')
//    .innerHTML = `wins:${score.wins},losses:${score.losses},ties:${score.ties}`;
//    }