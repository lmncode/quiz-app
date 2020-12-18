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

  //fetch questions
  questions = await getQuestions(selectedCategory, selectedDifficulty);
  console.log(questions);
  renderQuestion(questions[questionIndex]);

  // timer();
}

startBtn.addEventListener("click", startQuiz);

function renderQuestion(item) {
  //render question
  question.textContent = item.question;

  //define correct answer
  for (const [correctAnswerKey, correctAnswerValue] of Object.entries(
    item.correct_answers
  )) {
    if (correctAnswerValue === "true") correctAnswer = correctAnswerKey;
  }

  for (const [answerKey, answerValue] of Object.entries(item.answers)) {
    if (answerValue) {
      //check answer is not null
      const listItem = document.createElement("li");
      listItem.textContent = answerValue;
      listItem.addEventListener("click", () => onAnswerCLick(answerKey));
      answerList.appendChild(listItem);
    }
  }
}

function onAnswerCLick(answer) {
  answerList.textContent = "";
  if (correctAnswer.replace("_correct", "") === answer) {
    questionIndex++;
    renderQuestion(questions[questionIndex]);
  } else {
    lostHeartCount++;
    changeHeartColor();
  }
}

function changeHeartColor() {
  for (let i = 0; i < lostHeartCount; i++) {
    console.log(lostHeartCount, i);
    hearts.children[i].style.color = "rgba(255,0,0,0.5)";
  }
}
