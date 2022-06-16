class Availability {
  constructor(days = null) {
    if (days !== null) {
      this.days = days;
    } else {
      this.days = [
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
