import React from "react";
import "./TypeSelector.css";

function TypeSelector(props) {
  const { update, name, items } = props;
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      {items &&
        items.map((item) => (
          <button
            key={item}
            onClick={(e) => update({ name, value: e.target.innerText })}
            type="button"
            className="btn btn-secondary"
          >
            {item}
          </button>
        ))}
    </div>
  );
}

export default TypeSelector;
