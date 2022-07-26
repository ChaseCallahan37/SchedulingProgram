import React from "react";
import getEnum from "../../Utils/Enums";

function RangeSelect(props) {
  const { update, name, items, updateField } = props;

  const Type = getEnum("type");
  const typeFields = Object.keys(Type);

  const handleUpdate = (e) => {
    const index = e.target.id;

    const copyItems = [...items];
    debugger;
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
            <div>
              <label for="customRange2" class="form-label">
                {type}
              </label>
              <input
                type="range"
                class="form-range"
                min="0"
                max="5"
                id={count}
                name={type}
              ></input>
            </div>
          );
          count++;
          return el;
        })}
    </div>
  );
}

export default RangeSelect;
