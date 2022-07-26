import React from "react";
import getEnum from "../../Utils/Enums";

//Uses count variable so that each input id can increment
//This is used when passed into the update function for the resources
//field. This expects an array of objects with a name field within each
//object

function RangeSelect(props) {
  const { items, updateField, update, name, disabled } = props;
  const Type = getEnum("Type");
  const typeFields = Object.keys(Type);

  const handleUpdate = (e) => {
    const index = e.target.id;
    const copyItems = [...items];
    copyItems[index] = { name: e.target.name, value: 0 };
    copyItems[index][updateField] = e.target.value;
    update({
      name,
      value: copyItems,
    });
  };

  let count = 0;
  return (
    <div onChange={handleUpdate}>
      {typeFields &&
        typeFields.map((type) => {
          const el = (
            <div key={type}>
              <label className="label">{type}:</label>
              {disabled ? (
                <input
                  disabled
                  name={type}
                  id={count}
                  type="range"
                  className="form-range"
                  min="0"
                  max="5"
                />
              ) : (
                <input
                  name={type}
                  id={count}
                  type="range"
                  className="form-range"
                  min="0"
                  max="5"
                />
              )}
            </div>
          );
          count++;
          return el;
        })}
    </div>
  );
}

export default RangeSelect;
