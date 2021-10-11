const refs = {
  days: document.querySelector('.value[data-value="days"]'),
  hours: document.querySelector('.value[data-value="hours"]'),
  mins: document.querySelector('.value[data-value="mins"]'),
  secs: document.querySelector('.value[data-value="secs"]'),
  timerSelect: document.getElementById("timer-1"),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intID = null;
    this.deltaTime = 0;
  }

  intID = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = this.targetDate - currentTime;

    this.startTimer(deltaTime);
    this.finishTimer(deltaTime);
  }, 1000);

  startTimer(deltaTime) {
    const days = this.pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(
      Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60))
    );
    const seconds = this.pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${seconds}`;
  }

  finishTimer(deltaTime) {
    if (deltaTime < 0) {
      clearInterval(this.intID);
      refs.timerSelect.textContent = "Время вышло";
    }
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date(`oct 14, 2021,`),
});
