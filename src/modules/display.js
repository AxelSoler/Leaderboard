import scores from './scores.js';

const displayScores = async (url, board) => {
  const allScores = await scores(url);
  allScores.forEach((element) => {
    board.innerHTML += `<div class='scoreDiv'>
      <h4>${element.user}: ${element.score}</h4>
    </div>`;
  });
};

export default displayScores;