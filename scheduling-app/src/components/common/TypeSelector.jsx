import React from "react";
import "./TypeSelector.css";

function TypeSelector(props) {
  const { update, name } = props;
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button
        onClick={(e) => update({ name, value: e.target.innerText })}
        type="button"
        className="btn btn-secondary"
      >
        Instructor
      </button>
      <button
        onClick={(e) => update({ name, value: e.target.innerText })}
        type="button"
        className="btn btn-secondary"
        id="button-group-two"
      >
        TA
      </button>
    </div>
  );
}

export default TypeSelector;
