import React, { useState } from "react";
import Case from "case";
import "./CheckboxGroup.css";

function CheckboxGroup(props) {
  const [chosen, setChosen] = useState([]);

  const { items, name, update, value } = props;
  const itemNames = Object.keys(items);

  const handleUpdate = (e) => {
    const { value } = e.target;
    const copyChosen = [...chosen];
    const index = copyChosen.findIndex((chose) => chose === value);
    index !== -1 ? copyChosen.splice(index, 1) : copyChosen.push(value);
    setChosen(copyChosen);
    update(copyChosen);
  };
  console.log(value);
  return (
    <div onChange={handleUpdate}>
      {itemNames &&
        itemNames.map((itemName) => (
          <div key={itemName}>
            <label>{Case.capital(itemName)}</label>
            <input
              onChange={() => {}}
              checked={
                value &&
                value[name] &&
                value[name].includes(Case.camel(itemName))
                  ? true
                  : false
              }
              type="checkbox"
              value={itemName}
              className="resource-checkbox"
            />
          </div>
        ))}
    </div>
  );
}

export default CheckboxGroup;
