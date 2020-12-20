function reset() {
  question.textContent = "";
  answerList.textContent = "";
  remainingTime = time;
  wrongAnswer = 0;
  score = 0;
  firstClick = true;

  timerText.textContent = remainingTime;
  scoreText.textContent = score;
  startBtn.disabled = false;
  hearts
    .querySelectorAll("li")
    .forEach((item) => item.classList.remove("lost"));
  wrapperSelect.classList.remove("hide");
  timerText.classList.remove("red");
  changeHeartColor();
  closeModal();
}
reset();

//render select options
categories.map((category) =>
  renderList(categoryOptions, category, categoryPlaceholder)
);
difficultyList.map((difficulty) =>
  renderList(difficultyOptions, difficulty, difficultyPlaceholder)
);

//start quiz
async function startQuiz(e) {
  e.preventDefault();
  selectedCategory = categoryOptions.dataset.value;
  selectedDifficulty = difficultyOptions.dataset.value;
  warning.textContent = "";

  if (!selectedCategory) {
    warning.textContent = "Please select category";
    return;
  } else if (!selectedDifficulty) {
    warning.textContent = "Please select difficulty";
    return;
  }

  wrapperSelect.classList.add("hide");
  startBtn.disabled = true;

  //fetch questions
  questions = await getQuestions(selectedCategory, selectedDifficulty);

  renderQuestion(questions[questionIndex]);
  timer();
}

retryBtn.addEventListener("click", reset);
startBtn.addEventListener("click", startQuiz);
