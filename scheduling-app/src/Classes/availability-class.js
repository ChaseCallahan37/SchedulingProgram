const availabilityTemplate = [
  {
    day: "Monday",
    times: {
      start: 0,
      end: 0,
    },
  },
  {
    day: "Tuesday",
    times: {
      start: 0,
      end: 0,
    },
  },
  {
    day: "Wednesday",
    times: {
      start: 0,
      end: 0,
    },
  },
  {
    day: "Thursday",
    times: {
      start: 0,
      end: 0,
    },
  },
  {
    day: "Friday",
    times: {
      start: 0,
      end: 0,
    },
  },
];

class Availability {
  constructor(days = availabilityTemplate) {
    this.days = days;
  }
}

export default Availability;

//Model for what each day is looking for
// monday = {
//     day: "Monday",
//     times: {
//         start: 1000
//         end: 1200
//     }
// }
