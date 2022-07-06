import Time from "./TimeClass";

class Availability {
  constructor(days = null) {
    if (days !== null) {
      this.days = days;
    } else {
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
}

export const createBlankAvailability = (days = null) => {
  if (!!days) {
    return { ...new Availability([...days]) };
  } else {
    const newAvailability = new Availability();
    return { ...newAvailability };
  }
};

export default Availability;

//Model for what each day is looking for
// monday = {
//     day: "Monday",
//     times: {
//         start: 1000
//         end: 1200
//     }
// }

const availability = [
  {
    title: "Monday",
    times: {
      start: new Time(),
      end: new Time(),
    },
  },
  {
    title: "Tuesday",
    times: {
      start: new Time(),
      end: new Time(),
    },
  },
  {
    title: "Wednesday",
    times: {
      start: new Time(),
      end: new Time(),
    },
  },
  {
    title: "Thursday",
    times: {
      start: new Time(),
      end: new Time(),
    },
  },
  {
    title: "Friday",
    times: {
      start: new Time(),
      end: new Time(),
    },
  },
];

export const getBlankAvailability = () => {
  return [...availability];
};
