import React from "react";

const ShowAvailability = (props) => {
  const { availability } = props;
  return (
    <div>
      {availability.days &&
        availability.days.map((d) => (
          <div className="saved-availability" key={d.day}>
            <label className="saved-day">{d.day}</label>
            <div className="saved-time">
              {!!d.times && (
                <label className="saved-start-time">
                  Start: {d.times.start}
                </label>
              )}
              {!!d.times && <label> End: {d.times.end}</label>}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShowAvailability;
