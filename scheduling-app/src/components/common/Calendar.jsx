import React, { useState, useEffect } from "react";
import ScheduleSelector from "react-schedule-selector";
import moment from "moment";
import { timeToInt } from "../../Utils/UtilFunctions";

const Calendar = (props) => {
  const [schedule, setSchedule] = useState([]);

  const { update, name, availability } = props;

  const handleChange = (newSchedule) => {
    setSchedule(newSchedule);
    if (update) {
      update({ name, value: newSchedule });
    }
  };
  const startDate = moment(new Date("1/3/2000"));

  return (
    <ScheduleSelector
      startDate={startDate}
      dateFormat={"ddd"}
      selection={availability ? availability : schedule}
      numDays={5}
      minTime={8}
      maxTime={22}
      hourlyChunks={1}
      onChange={handleChange}
    />
  );
};

export default Calendar;
