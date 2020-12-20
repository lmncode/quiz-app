const getCoins = () => remainingTime + coins;

const calcScore = () => (score += getCoins());

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
      listItem.addEventListener("click", (e) => onAnswerCLick(e, answerKey));
      answerList.appendChild(listItem);
    }
  }
}

function onAnswerCLick(e, answer) {
  if (firstClick) {
    if (correctAnswer.replace("_correct", "") === answer) {
      e.target.classList.add("correct");
      scoreText.textContent = calcScore();
      next();
    } else {
      e.target.classList.add("wrong");
      onWrongAnswer();
    }
  } else {
    return;
  }
  firstClick = false;
}

function changeHeartColor() {
  for (let i = 0; i < wrongAnswer; i++) {
    hearts.children[i].classList.add("lost");
  }
}

function next() {
  setTimeout(() => {
    clearInterval(timerId);
    answerList.textContent = "";
    questionIndex++;
    timerText.classList.remove("red");
    if (questionIndex > questions.length - 1) {
      openModal();
      return;
    }
    remainingTime = time;
    renderQuestion(questions[questionIndex]);
    timer();
    firstClick = true;
  }, 500);
}

function onWrongAnswer() {
  wrongAnswer++;
  changeHeartColor();
  if (wrongAnswer < 3) {
    next();
  } else {
    clearInterval(timerId);
    openModal();
  }
}
