import Time from "./TimeClass";

class Day {
  constructor(title = "") {
    this.title = title;
    this.start = "";
    this.end = "";
  }
  setStart = (start) => {
    this.times[0].start = start;
  };
  setEnd = (end) => {
    this.times[0].end = end;
  };
}

export default Day;
