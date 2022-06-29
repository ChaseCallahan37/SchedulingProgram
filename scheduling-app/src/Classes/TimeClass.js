class Time {
  constructor(
    { hour, minute, pm, military } = {
      hour: "",
      minute: "",
      pm: null,
      military: 0,
    }
  ) {
    this.hour = hour;
    this.minute = minute;
    this.pm = pm;
    this.military = military;
  }
  displayToMilitary() {
    const rawMilitary = `${this.hour}${this.minute}`;
    this.military = parseInt(rawMilitary);
    if (this.pm) {
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
