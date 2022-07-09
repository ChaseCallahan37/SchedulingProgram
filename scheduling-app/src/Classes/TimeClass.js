class Time {
  constructor() {
    this.start = "";
    this.end = "";
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
