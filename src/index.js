import './index.css'
import scores from "./modules/scores.js";
import displayScores from './modules/display.js';

const leaderboard = document.getElementById('scoresLeaderboard');

window.onload = () => {
  displayScores(scores, leaderboard);
};