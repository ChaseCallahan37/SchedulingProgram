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
  // update = () => {};
  update = (e) => {
    const { name, value, id } = e.target;
    const time = value.split(":");

    const availability = [...this.props.availability];
    availability.find((searchDay) => {
      if (searchDay.title === id) {
        searchDay.times[name].hour = time[0];
        searchDay.times[name].minute = time[1];
        return true;
      }
      return false;
    });
    const event = { target: { name: "availability", value: availability } };
    this.props.update(event);
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
              <h6 className="start-end">Start</h6>
              <input
                key="start"
                type="time"
                className="avail-inputs"
                onChange={this.update}
                id={`${day.title}`}
                name="start"
              />
              <h6 className="start-end">End</h6>
              <input
                key="end"
                type="time"
                className="avail-inputs"
                onChange={this.update}
                id={`${day.title}`}
                name="end"
              />
              <hr></hr>
            </div>
          ))}
      </div>
    );
  }
}

export default BlankAvailability;
