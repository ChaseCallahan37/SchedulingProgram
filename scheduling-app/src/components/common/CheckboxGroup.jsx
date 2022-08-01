import React from "react";
import Case from "case";
import "./CheckboxGroup.css";

function CheckboxGroup(props) {
  const { items, name, update } = props;
  const itemNames = Object.keys(items);

  const handleUpdate = (e) => {
    const { value } = e.target;
  };
  return (
    <div>
      {itemNames &&
        itemNames.map((itemName) => (
          <div key={itemName}>
            <label>{Case.capital(itemName)}</label>
            <input
              type="checkbox"
              value={itemName}
              onChange={(e) => handleUpdate(e)}
              className="resource-checkbox"
            />
          </div>
        ))}
    </div>
  );
}

export default CheckboxGroup;
