import React from "react";

function SelectBox(props) {
  const { update, name, items: propItems } = props;
  const items =
    typeof propItems !== Array ? Object.keys(propItems) : [...propItems];
  const makeOption = () => {
    const optionsRender = items.map((item) => {
      return <option key={item}>{item}</option>;
    });
    return optionsRender;
  };

  return (
    <div>
      <select onChange={(e) => update({ name, value: e.target.value })}>
        <option key="blank">{}</option>
        {makeOption()}
      </select>
    </div>
  );
}

export default SelectBox;

// <SelectBox options={[1,2,3,4]}/>
