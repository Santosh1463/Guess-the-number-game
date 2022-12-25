'use strict';
let secret = Math.trunc(Math.random() * 10) + 1;
let score = 10;
let highscore = 0;
let but = document.querySelector('.guess');

function display(text) {
  document.querySelector('.message').textContent = text;
}

document.querySelector('.check').addEventListener('click', function () {
  let guessnumber = Number(document.querySelector('.guess').value);

  if (!guessnumber || guessnumber > 10) {
    display('Invaid Input!');
  } else if (guessnumber == secret) {
    display('You won!!');
    but.disabled = true;
    document.querySelector('.number').textContent = secret;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.msg2').style.height = '2rem';
    document.querySelector('.msg2').textContent = 'Click again champ!!';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessnumber != secret) {
    display(guessnumber > secret ? 'Too high!!' : 'Too low!!');
    score--;
    document.querySelector('.score').textContent = score;
    if (score == 0) {
      display('Ahh!!You lost the game');
      document.querySelector('.number').textContent = secret;
      document.querySelector('.msg2').style.height = '3rem';
      document.querySelector('.msg2').textContent = 'Click again!!';
      document.querySelector('body').style.backgroundColor = '#ff0000';
      but.disabled = true;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secret = Math.trunc(Math.random() * 10) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  but.disabled = false;
  document.querySelector('body').style.backgroundColor = '#222';
  display('Start Guessing');
  document.querySelector('.msg2').textContent = ' ';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.msg2').style.height = '3rem';
});
