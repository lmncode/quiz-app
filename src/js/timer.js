function timer() {
  timerId = setInterval(() => {
    remainingTime--;
    timerText.textContent = `${
      remainingTime < 10 ? `0${remainingTime}` : remainingTime
    }`;
    if (remainingTime < 1) {
      clearInterval(timerId);
    }
  }, 1000);
}
