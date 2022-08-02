import React, { useState, useEffect } from "react";
import Case from "case";
import Calendar from "./Calendar";
import {
  isInstructorField,
  wrapInDivAndLabel,
} from "../../Utils/UtilFunctions";
import SelectBox from "./SelectBox";
import getEnum from "./../../Utils/Enums";
import TypeSelector from "./TypeSelector";
import RangeSelect from "./RangeSelect";
import CheckboxGroup from "./CheckboxGroup";
import { GETCourses } from "../../Utils/Requests/CourseCalls";
import { getCourses } from "./../../AppInfo/CourseInfo";

const Form = (props) => {
  const [isInstructor, setIsInstructor] = useState(true);
  const [instructorConstraints, setInstructorConstraints] = useState(
    getEnum("InstructorConstraints")
  );
  const [teachingStyles, setTeachingStyles] = useState(
    instructorConstraints.TeachingStyle
  );
  const [taConstraints, setTaConstraints] = useState({});

  useEffect(() => {
    const callCourses = async () => {
      const courses = {};
      const data = await GETCourses();
      data.forEach(
        (course) => (courses[Case.camel(course.name)] = course.name)
      );
      setTaConstraints({ courses });
    };
    callCourses();
  }, []);

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
            <label className="label">{Case.capital(field)}</label>
            <br></br>
            <input
              value={item[field]}
              onChange={(e) => update({ value: e.target.value, name: field })}
              className="global-input"
            />
            <hr></hr>
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
            <label className="label">{Case.capital(field)}</label>
            <Calendar update={update} name={field} availability={item[field]} />
            <hr></hr>
          </div>
        );
        break;
      case "constraints":
        const constraints = isInstructor
          ? instructorConstraints
          : taConstraints;
        const constraintNames = Object.keys(constraints);
        return wrapInDivAndLabel(
          field,
          constraintNames.map((constraintName) => (
            <div key={constraintName}>
              <label className="label">{Case.capital(constraintName)}</label>
              <CheckboxGroup
                update={(value) => {
                  const newConstraint = { [constraintName]: value };
                  const copyConstraints = [...item[field]];
                  const index = copyConstraints.findIndex(
                    (constraint) => constraint[constraintName]
                  );
                  index !== -1
                    ? (copyConstraints[index] = newConstraint)
                    : copyConstraints.push(newConstraint);
                  const data = { name: field, value: copyConstraints };
                  update({ name: field, value: copyConstraints });
                }}
                value={item[field].find((c) =>
                  c[constraintName] ? c[constraintName] : null
                )}
                name={constraintName}
                items={constraints[constraintName]}
              />
            </div>
          ))
        );
        break;
      case "resources":
        return wrapInDivAndLabel(
          field,
          <RangeSelect items={item[field]} name={field} update={update} />
        );
        break;
      case "teachingStyle":
        const items = Object.keys(teachingStyles);
        return wrapInDivAndLabel(
          field,
          <TypeSelector update={update} name={field} items={items} />
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
