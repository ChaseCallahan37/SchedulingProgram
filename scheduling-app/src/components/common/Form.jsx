import React, { useState } from "react";
import Case from "case";
import Calendar from "./Calendar";
import {
  isInstructorField,
  wrapInDivAndLabel,
} from "../../Utils/UtilFunctions";
import SelectBox from "./SelectBox";
import getEnum from "./../../Utils/Enums";
import TypeSelector from "./TypeSelector";
import LabelWithCount from "./RangeSelect";
import RangeSelect from "./RangeSelect";

const Form = (props) => {
  const [isInstructor, setIsInstructor] = useState(false);

  const { item, update } = props;
  let fieldNames;
  if (item) {
    fieldNames = Object.keys(item);
  }

  const renderElement = (field) => {
    switch (field) {
      case "name":
      case "info":
        return (
          <div>
            <label className="label">{Case.capital(field)}:</label>
            <input
              value={item[field]}
              onChange={(e) => update({ value: e.target.value, name: field })}
            />
          </div>
        );
        break;
      case "type":
        const values = Object.keys(getEnum(field));
        return wrapInDivAndLabel(
          field,
          <TypeSelector
            update={(data) => {
              if (data.value.toLowerCase() === "instructor") {
                setIsInstructor(true);
              } else {
                setIsInstructor(false);
              }
              update(data);
            }}
            name={field}
            items={values}
          />
        );
        break;
      case "availability":
        return (
          <div>
            <label>{Case.capital(field)}</label>
            <Calendar update={update} name={field} availability={item[field]} />
          </div>
        );
        break;
      case "constraints":
        if (isInstructor) {
          const subFields = Object.keys(item[field]);
          return subFields.map((subField) => {
            const Enum = getEnum(subField);
            if (!isInstructor) {
              if (isInstructorField(subField)) {
                return null;
              }
            }
            return wrapInDivAndLabel(
              subField,
              <SelectBox
                items={Enum}
                update={update}
                name={`${field}.${subField}`}
              />,
              <input
                onChange={(e) =>
                  update({ name: `${field}${subField}`, value: e.target.value })
                }
                value={item[field][subField]}
              ></input>
            );
          });
        }
        break;
      case "resources":
        return wrapInDivAndLabel(
          field,
          <div>
            <LabelWithCount
              updateField="value"
              update={update}
              name={field}
              items={item[field]}
            />
          </div>
        );
        break;
      case "teachingStyle":
        return (
          <div>
            <p>This is teaching style</p>
          </div>
        );
        break;
      default:
        return null;

        break;
    }
  };
  return (
    <div>
      {fieldNames &&
        fieldNames.map((field) => {
          return <div key={field}>{renderElement(field)}</div>;
        })}
    </div>
  );
};

export default Form;
