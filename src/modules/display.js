const displayScores = (scores, board) => {
  
  scores.forEach(element => {
    board.innerHTML += 
    `<div class='scoreDiv'>
      <h4>${element.name}: ${element.score}</h4>
    </div>`;
  });
};

export default displayScores;