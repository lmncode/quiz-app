categories.map((category) =>
  renderList(categoryOptions, category, categoryPlaceholder)
);
difficultyList.map((difficulty) =>
  renderList(difficultyOptions, difficulty, difficultyPlaceholder)
);

startBtn.addEventListener("click", startQuiz);

function startQuiz(e) {
  e.preventDefault();
  selectedCategory = categoryOptions.dataset.value;
  selectedDifficulty = difficultyOptions.dataset.value;
  console.log(selectedCategory);
  console.log(selectedDifficulty);
}
