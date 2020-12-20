function timer() {
  timerId = setInterval(() => {
    remainingTime--;

    if (remainingTime < 10) {
      timerText.classList.add("red");
      timerText.textContent = `0${remainingTime}`;
    } else {
      timerText.textContent = remainingTime;
    }
    if (remainingTime < 1) {
      onWrongAnswer();
    }
  }, 1000);
}
