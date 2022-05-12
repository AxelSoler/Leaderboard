import './index.css';
import displayScores from './modules/display.js';
import postImput from './modules/post.js';
import move from './modules/move.js';

const leaderboard = document.getElementById('scoresLeaderboard');
const refreshBtn = document.getElementById('refreshBtn');
const urlAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVgoifqoiwjfb/scores/';

postImput(urlAPI);

refreshBtn.addEventListener('click', () => window.location.reload());

window.onload = () => {
  displayScores(urlAPI, leaderboard);
  setTimeout(move, 1000);
};