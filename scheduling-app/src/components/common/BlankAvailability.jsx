import React, { Component } from "react";
import { createBlankAvailability } from "./../../Classes/availability-class";
import Time from "../../Classes/TimeClass";

const defaultTimes = [
  800, 815, 830, 845, 900, 915, 930, 945, 1000, 1015, 1030, 1045, 1100, 1115,
  1130, 1145, 1200, 1215, 1230, 1245, 1300, 1315, 1330, 1345, 1400, 1415, 1430,
  1445, 1500, 1515, 1530, 1545, 1600, 1615, 1630, 1645, 1700,
];

class BlankAvailability extends Component {
  state = {
    times: {
      hours: [],
      minutes: [],
    },
  };
  componentDidMount() {
    const timeGenerator = new Time();
    const times = { ...this.state.times };
    times.hours = timeGenerator.generateHours();
    times.minutes = timeGenerator.generateMinutes();
    this.setState({ times });
  }
  //   updateChange = (d, content, field) => {
  //     // const availability = { ...item.availability };
  //     // availability.days.find((day) => {
  //     //   if (day.day === d.day) {
  //     //     day.times[field] = content;
  //     //     return true;
  //     //   }
  //     // });
  //     // update("availability", availability);
  //   };
  // updateHour = (e) => {
  //   const amount = e.target.value;
  //   if (!amount || amount.match(/^\d{0,2}$/)) {
  //     if (amount < 13) {
  //       const blank = { ...this.state.blank };
  //       blank.hour = e.target.value;
  //       this.setState({ blank });
  //     }
  //   } else {
  //     e.preventDefault();
  //   }
  // };
  // updateMinute = (e) => {
  //   const amount = e.target.value;
  //   if (!amount || amount.match(/^\d{0,2}$/)) {
  //     if (amount < 60) {
  //       const blank = { ...this.state.blank };
  //       blank.minute = e.target.value;
  //       this.setState({ blank });
  //     }
  //   } else {
  //     e.preventDefault();
  //   }
  // };
  validateInput = (value, path) => {
    if (!value) return true;

    if (value.match(/^\d{0,2}$/)) {
      if (path[1] === "minute" && value >= 60) {
        return false;
      } else if (path[1] === "hour" && value >= 13) {
        return false;
      }
    } else {
      return false;
    }

    return true;
  };
  update = (e) => {
    const { name, value, id } = e.target;
    const path = name.split(".");

    const validValue = this.validateInput(value, path);

    if (validValue) {
      const availability = [...this.props.availability];
      const day = availability.find((a) => {
        if (a.title === id) {
          a.times[path[0]][path[1]] = value;
          return true;
        }
        return false;
      });
      this.props.update("availability", availability);
    }
  };

  render() {
    const { availability, update } = this.props;
    const { template, blank } = this.state;
    return (
      <div>
        {availability &&
          availability.map((day) => (
            <div>
              <h4>{day.title}</h4>
              <h5>From</h5>
              <label>Hours</label>
              <input
                onChange={this.update}
                id={`${day.title}`}
                name="start.hour"
                value={day.times.start.hour}
              />
              <label>Minutes</label>
              <input
                onChange={this.update}
                id={`${day.title}`}
                name="start.minute"
                value={day.times.start.minute}
              />
              <h5>To</h5>
              <label>Hours</label>
              <input
                onChange={this.update}
                id={`${day.title}`}
                name="end.hour"
                value={day.times.end.hour}
              />
              <label>Minutes</label>
              <input
                onChange={this.update}
                id={`${day.title}`}
                name="end.minute"
                value={day.times.end.minute}
              />
            </div>
          ))}
      </div>
    );
  }
}

export default BlankAvailability;
