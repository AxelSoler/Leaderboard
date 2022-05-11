const inputName = document.getElementById('inputName');
const inputScore = document.getElementById('inputScore');
const submitBtn = document.getElementById('submitBtn');
const form = document.getElementById('addScore');

const postImput = (url) => {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: inputName.value.trim(),
        score: inputScore.value.trim(),
      }),
    })
      .then((response) => response.json())
      form.reset();
  });
};

export default postImput;