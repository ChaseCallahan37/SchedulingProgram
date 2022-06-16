import React from "react";
import { createBlankAvailability } from "./../../Classes/availability-class";

const defaultTimes = [
  800, 815, 830, 845, 900, 915, 930, 945, 1000, 1015, 1030, 1045, 1100, 1115,
  1130, 1145, 1200, 1215, 1230, 1245, 1300, 1315, 1330, 1345, 1400, 1415, 1430,
  1445, 1500, 1515, 1530, 1545, 1600, 1615, 1630, 1645, 1700,
];

const AvailabilityList = (props) => {
  const [time, setTime] = React.useState([...defaultTimes]);
  const { item, update } = props;

  const updateChange = (d, content, field) => {
    const availability = { ...item.availability };
    availability.days.find((day) => {
      if (day.day === d.day) {
        day.times[field] = content;
        return true;
      }
    });
    update("availability", availability);
  };
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
                  updateChange(d, e.target.value, "start");
                }}
              >
                <option></option>
                {time.map((t) => {
                  return <option key={t}>{t}</option>;
                })}
              </select>
              <select
                onChange={(e) => {
                  updateChange(d, e.target.value, "end");
                }}
              >
                <option></option>
                {time.map((t) => {
                  return <option key={t}>{t}</option>;
                })}
              </select>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvailabilityList;
