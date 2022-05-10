import './index.css';
import scores from './modules/scores.js';
import displayScores from './modules/display.js';

const leaderboard = document.getElementById('scoresLeaderboard');
const refreshBtn = document.getElementById('refreshBtn');
refreshBtn.addEventListener('click', () => window.location.reload());

window.onload = () => {
  displayScores(scores, leaderboard);
};