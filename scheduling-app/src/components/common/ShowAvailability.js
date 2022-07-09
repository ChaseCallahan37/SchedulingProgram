import React from "react";
import { getRandomId } from "../../Utils/UtilFunctions";

const ShowAvailability = (props) => {
  const { availability } = props;

  return (
    <div key={getRandomId()}>
      {availability.map((day) => (
        <div key={day.title} className="saved-availability">
          <label key="top-label" className="saved-day">
            {day.title}
          </label>
          <div key="inner-div" className="saved-time">
            {!!day.start && (
              <label key="label-1" className="saved-start-time">
                Start: {`${day.start}`}
              </label>
            )}
            {!!day.end && <label key="label-2"> End: {`${day.end}`}</label>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowAvailability;
