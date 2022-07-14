import React from "react";
import Calendar from "./Calendar";

function Form(props) {
  const { item, update } = props;
  let fieldNames;
  if (item) {
    fieldNames = Object.keys(item);
  }

  const renderElement = (field) => {
    switch(field){
        case "availability":
            return <Calendar update={update} name/>
    }


  return (
    <div>
      {fieldNames &&
        fieldNames.map((field) => {
            return (
          <div key={field}>
            <label>{field}</label>
            {renderElement(field)}
          </div>
        )})}
    </div>
  );
}

export default Form;
