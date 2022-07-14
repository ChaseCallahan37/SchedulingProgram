import React, { Component } from "react";
import Time from "../../Classes/TimeClass";
import "./BlankAvailability.css";

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
  update = (e) => {
    const { name, value, id } = e.target;

    const availability = [...this.props.availability];
    availability.find((searchDay) => {
      if (searchDay.title === id) {
        searchDay[name] = value;
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
            <div key={day.title}>
              <h4>{day.title}</h4>
              <h6 className="start-end">Start</h6>
              <input
                value={day.times[0].start}
                key="start"
                type="time"
                className="avail-inputs"
                onChange={this.update}
                id={`${day.title}`}
                name="start"
              />
              <h6 className="start-end">End</h6>
              <input
                value={day.times[0].end}
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
