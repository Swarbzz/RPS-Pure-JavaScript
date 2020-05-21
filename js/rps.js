const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('modal');
const scoreboard = {
  player: 0,
  computer: 0
}

function play(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
}

choices.forEach(choice => choice.addEventListener('click', play));