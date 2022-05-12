import './index.css';
import displayScores from './modules/display.js';
import postImput from './modules/post.js';

const leaderboard = document.getElementById('scoresLeaderboard');
const refreshBtn = document.getElementById('refreshBtn');
const urlAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVgoifqoiwjfb/scores/';

postImput(urlAPI);

refreshBtn.addEventListener('click', () => window.location.reload());

window.onload = () => {
  displayScores(urlAPI, leaderboard);
};

function move() {
  const scoreMove = document.querySelectorAll('h4');

  scoreMove.forEach((element) => {
    const time = Math.floor(Math.random() * (6 - 3)) + 3;
    element.style.animationDuration = `${time}s`;
  });
}

setTimeout(move, 1000);