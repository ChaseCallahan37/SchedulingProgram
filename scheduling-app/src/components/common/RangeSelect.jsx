import React from "react";
import Case from "case";
import getEnum from "../../Utils/Enums";

//Uses count variable so that each input id can increment
//This is used when passed into the update function for the resources
//field. This expects an array of objects with a name field within each
//object

function RangeSelect(props) {
  const { items, name, update } = props;
  const itemNames = Object.keys(items);

  const handleUpdate = (itemName, value) => {
    const itemsCopy = { ...items };
    itemsCopy[itemName] = value;
    update({ name, value: itemsCopy });
  };

  return (
    <div>
      {itemNames &&
        itemNames.map((itemName) => {
          return (
            <div key={itemName}>
              <label>
                {Case.capital(itemName)}: {items[itemName]}
              </label>
              <input
                name={itemName}
                onChange={(e) => handleUpdate(itemName, e.target.value)}
                className="form-range"
                value={items[itemName]}
                min={0}
                max={5}
                type="range"
              />
            </div>
          );
        })}
    </div>
  );
}

export default RangeSelect;
