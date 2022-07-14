class Time {
  constructor({ start = "", end = "" } = { start: "", end: "" }) {
    this.start = "";
    this.end = "";
  }
  getStartInt() {
    const time = this.start.split(":");
    let intTime = parseInt(time[0]);
    intTime += parseInt(time[1]);
    return intTime;
  }
  generateHours() {
    let time = [];
    for (let i = 1; i < 13; i++) {
      time.push(i);
    }
    return time;
  }
  generateMinutes() {
    let time = [];
    for (let i = 1; i < 61; i++) {
      time.push(i);
    }
    return time;
  }
}

export default Time;
