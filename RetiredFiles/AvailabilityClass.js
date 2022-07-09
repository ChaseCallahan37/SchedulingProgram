import Time from "../scheduling-app/src/Classes/TimeClass";

class Availability {
  constructor() {
    this.days = [
      {
        day: "Monday",
        times: {
          start: new Time(),
          end: new Time(),
        },
      },
      {
        day: "Tuesday",
        times: {
          start: new Time(),
          end: new Time(),
        },
      },
      {
        day: "Wednesday",
        times: {
          start: new Time(),
          end: new Time(),
        },
      },
      {
        day: "Thursday",
        times: {
          start: new Time(),
          end: new Time(),
        },
      },
      {
        day: "Friday",
        times: {
          start: new Time(),
          end: new Time(),
        },
      },
    ];
  }
}

export default Availability;
