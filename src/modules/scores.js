const scores = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const allScores = data.result;
  return allScores;
};

export default scores;