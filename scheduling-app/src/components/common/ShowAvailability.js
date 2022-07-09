import React from "react";

const ShowAvailability = (props) => {
  const { availability } = props;

  return (
    <div>
      {availability.map((day) => (
        <div className="saved-availability" key={day.title}>
          <label className="saved-day">{day.title}</label>
          <div className="saved-time">
            {!!day.start && (
              <label className="saved-start-time">
                Start: {`${day.start}`}
              </label>
            )}
            {!!day.end && <label> End: {`${day.end}`}</label>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowAvailability;
