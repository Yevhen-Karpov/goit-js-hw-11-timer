const daysEl = document.querySelector('[data-value="days"]');
const hoursEl = document.querySelector('[data-value="hours"]');
const minsEl = document.querySelector('[data-value="mins"]');
const secsEl = document.querySelector('[data-value="secs"]');
const startBtn = document.querySelector("start");
const stopBtn = document.querySelector("stop");

const options = {
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};
class Timer {
  constructor(finishDate) {
    this.finishDate = finishDate;
    this.int.Id = null;
    this.deltaTime = 0;
  }
  start() {
    this.intId = setInterval(() => {
      let currentTime = Date.now();
      this.deltaTime = this.finishDate - currentTime;
      const days = Math.floor(this.deltaTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor(
        (this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secs = Math.floor((this.deltaTime % (1000 * 60)) / 1000);
    }, 1000);
  }
  stop() {
    clearInterval(this.intId);
  }
}
