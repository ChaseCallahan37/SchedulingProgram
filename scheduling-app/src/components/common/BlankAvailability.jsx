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
    template: {
      hours: [],
      minutes: [],
    },
    blank: {
      hour: "",
      minute: "",
      pm: null,
    },
  };
  componentDidMount() {
    const time = new Time();
    this.setState({
      hours: time.generateHours(),
      minutes: time.generateMinutes(),
    });
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
  updateHour = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{0,2}$/)) {
        if(amount < 13){
            const blank = { ...this.state.blank };
            blank.hour = e.target.value;
            this.setState({ blank });
        }
    } else {
      e.preventDefault();
    }
  };
  updateMinute = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{0,2}$/)) {
        if(amount < 60){
            const blank = { ...this.state.blank };
            blank.minute = e.target.value;
            this.setState({ blank });
        }
    } else {
      e.preventDefault();
    }
  };

  render() {
    const { item, update } = this.props;
    const { template, blank } = this.state;

    return (
      <div>
        <label>Hours</label>
        <input value={blank.hour} onChange={this.updateHour} />
        Down
        <label>Minute</label>
        <input value={blank.minute} onChange={this.updateMinute} />
      </div>
    );
  }
}

export default BlankAvailability;
