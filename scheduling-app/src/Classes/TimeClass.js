class Time {
  constructor(display = { hour: "", minute: "", pm: null }, military = 0) {
    this.display = display;
    this.military = military;
  }
  displayToMilitary() {
    const { hour, minute, pm } = this.display;
    const rawMilitary = `${hour}${minute}`;
    this.military = parseInt(rawMilitary);
    if (pm) {
      this.military += 1200;
    }
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
