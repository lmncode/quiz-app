//render select options
categories.map((category) =>
  renderList(categoryOptions, category, categoryPlaceholder)
);
difficultyList.map((difficulty) =>
  renderList(difficultyOptions, difficulty, difficultyPlaceholder)
);
timerText.textContent = remainingTime;

//start quiz
async function startQuiz(e) {
  selectedCategory = categoryOptions.dataset.value;
  selectedDifficulty = difficultyOptions.dataset.value;
  warning.textContent = "";

  e.preventDefault();
  if (!selectedCategory) {
    warning.textContent = "Please select category";
    return;
  } else if (!selectedDifficulty) {
    warning.textContent = "Please select difficulty";
    return;
  }

  let questions = await getQuestions(selectedCategory, selectedDifficulty);

  // timer();
}

startBtn.addEventListener("click", startQuiz);
