import React from "react";

function SelectBox(props) {
  const { items, update, name } = props;

  const makeOption = () => {
    const optionsRender = items.map((item) => {
      return <option key={item}>{item}</option>;
    });
    return optionsRender;
  };

  return (
    <div>
      <select onChange={(e) => update({name, value: e.target.value})}>
        <option key="blank">{}</option>
        {makeOption()}
      </select>
    </div>
  );
}

export default SelectBox;

// <SelectBox options={[1,2,3,4]}/>
