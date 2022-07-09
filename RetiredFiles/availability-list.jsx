import React, { Component } from "react";
import { createBlankAvailability } from "./AvailabilityClass";
import Time from "../scheduling-app/src/Classes/TimeClass";

const defaultTimes = [
  800, 815, 830, 845, 900, 915, 930, 945, 1000, 1015, 1030, 1045, 1100, 1115,
  1130, 1145, 1200, 1215, 1230, 1245, 1300, 1315, 1330, 1345, 1400, 1415, 1430,
  1445, 1500, 1515, 1530, 1545, 1600, 1615, 1630, 1645, 1700,
];

class AvailabilityList extends Component {
  state = {
    hours: [],
    minutes: [],
    pm: null,
  };
  componentDidMount() {
    const time = new Time();
    this.setState({
      hours: time.generateHours(),
      minutes: time.generateMinutes(),
    });
  }
  updateChange = (d, content, field) => {
    // const availability = { ...item.availability };
    // availability.days.find((day) => {
    //   if (day.day === d.day) {
    //     day.times[field] = content;
    //     return true;
    //   }
    // });
    // update("availability", availability);
  };

  render() {
    const { item, update } = this.props;
    const { hours, minutes, pm } = this.state;

    return (
      <div>
        <label className="label">Availability</label>
        {item.availability.days.map((d) => {
          return (
            <div className="availability-list" key={d.day}>
              <label className="day-of-week">{d.day}</label>
              <div className="availability-dropdown">
                <select
                  onChange={(e) => {
                    // updateChange(d, e.target.value, "start");
                  }}
                >
                  <option></option>
                  {hours.map((h) => {
                    return <option key={h}>{h}</option>;
                  })}
                </select>
                <select>
                  {minutes.map((m) => (
                    <option>{m}</option>
                  ))}
                </select>
                <select
                  onChange={(e) => {
                    // updateChange(d, e.target.value, "end");
                  }}
                >
                  <option></option>
                  {hours.map((t) => {
                    return <option key={t}>{t}</option>;
                  })}
                </select>
                <select>
                  {minutes.map((m) => (
                    <option>{m}</option>
                  ))}
                </select>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AvailabilityList;
