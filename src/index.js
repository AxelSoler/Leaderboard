import './index.css';
import scores from './modules/scores.js';
import displayScores from './modules/display.js';
import postImput from './modules/post.js';

const leaderboard = document.getElementById('scoresLeaderboard');
const refreshBtn = document.getElementById('refreshBtn');
const form = document.getElementById('addScore');
const urlAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVgoifqoiwjfa/scores/';

postImput(urlAPI);