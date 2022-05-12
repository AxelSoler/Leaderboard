const move = () => {
  const scoreMove = document.querySelectorAll('h4');

  scoreMove.forEach((element) => {
    const time = Math.floor(Math.random() * (16 - 6) / 2) + 3;
    element.style.animationDuration = `${time}s`;
  });
}

export default move;