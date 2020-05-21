const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
  player: 0,
  computer: 0
}

// playing the game
function play(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

// computers random choice
function getComputerChoice() {
  const rand = Math.random();
  if(rand < 0.34)  {
    return 'rock';
  } else if(rand <= 0.67) {
    return 'paper'
  } else {
    return 'scissors';
  }
}

// determining the winner
function getWinner(p, c) {
  if(p === c) {
    return 'draw';
  } else if(p === 'rock'){
    if(c === 'paper') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if(p === 'paper') {
    if(c === 'scissors') {
      return 'computer'
    } else {
      return 'player';
    }
  } else if(p === 'scissors') {
    if(c === 'rock') {
      return 'computer'
    } else {
      return 'player';
    }
  }
}

//displaying the winner
function showWinner(winner, computerChoice) {
  if(winner === 'player') {
    scoreboard.player++;
    result.innerHTML = `
      <h1 class='text-win'>You Win</h1>
      <i class="fas fa-hand-${computerChoice} fa-5x"></i>
      <p>Computer chose <strong>${computerChoice}</strong></p>
    `;
  } else if(winner === 'computer') {
    scoreboard.computer++;
    result.innerHTML = `
      <h1 class='text-lose'>You Lose</h1>
      <i class="fas fa-hand-${computerChoice} fa-5x"></i>
      <p>Computer chose <strong>${computerChoice}</strong></p>
    `;
  } else {
    result.innerHTML = `
      <h1>You Drew</h1>
      <i class="fas fa-hand-${computerChoice} fa-5x"></i>
      <p>Computer chose <strong>${computerChoice}</strong></p>
    `;
  }
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;
  
  modal.style.display = 'block';
}

//getting rid of the modal box
function clearModal(e) {
  if(e.target == modal) {
    modal.style.display = 'none';
  }
}

//restarting the game
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  restart.style.display = 'none';
  score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
   `
}

choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);