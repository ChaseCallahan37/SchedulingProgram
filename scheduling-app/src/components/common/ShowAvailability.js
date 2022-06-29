import React from "react";

const ShowAvailability = (props) => {
  const { availability } = props;
  return (
    <div>
      {availability.map((day) => (
        <div className="saved-availability" key={day.title}>
          <label className="saved-day">{day.title}</label>
          <div className="saved-time">
            {!!day.times && (
              <label className="saved-start-time">
                Start: {`${day.times.start.hour}:${day.times.start.minute}`}
              </label>
            )}
            {!!day.times && (
              <label>
                {" "}
                End: {`${day.times.end.hour}:${day.times.end.minute}`}
              </label>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowAvailability;
