import React, { useState } from "react";
import Case from "case";
import Calendar from "./Calendar";
import { wrapInDivAndLabel } from "../../Utils/UtilFunctions";
import LabelWithCount from "./RangeSelect";
import { getRandomId } from "../../Utils/UtilFunctions";

const Card = (props) => {
  const { content, item, onEdit, onRemove } = props;

  const [showPopup, setShowPopup] = useState(false);

  const styles = {
    parentDiv: "card",
    header: "card-header text-white p-3 border text-center fs-3 ",
    body: "card-body text-wrap",
    footer: "card-footer",
  };
  const fields = Object.keys(item);

  const askToDelete = () => {
    alert("Deleting now");
    onRemove(item.id);
  };

  const createElement = (field) => {
    let subFields;
    switch (field) {
      case "info":
        return wrapInDivAndLabel(field, <span> {item[field]}</span>);
        break;
      case "type":
        return wrapInDivAndLabel(field, <label>{item[field]}</label>);
        break;
      case "constraints":
        subFields = Object.keys(item[field]);
        return subFields.map((subField) => {
          return wrapInDivAndLabel(
            subField,
            <span> {item[field][subField]}</span>
          );
        });
        break;
      case "availability":
        return wrapInDivAndLabel(
          field,
          <Calendar availability={item.availability} />
        );
        break;
      case "resources":
        subFields = Object.keys(item[field]);
        return wrapInDivAndLabel(
          field,
          <div>
            {subFields.map((subField) => (
              <div key={getRandomId()}>
                <label className="label">{Case.capital(subField)}</label>
                <span>: {item[field][subField]}</span>
              </div>
            ))}
          </div>
        );
      case "teachingStyle":
        return wrapInDivAndLabel(
          field,
          <span key={item[field]}>{Case.capital(item[field])}</span>
        );
        break;
      default:
        return null;
        break;
    }
  };
  return (
    <div className={styles.parentDiv}>
      <div key="header" className={styles.header}>
        {item && <label>{item.name}</label>}
      </div>
      <div key="body" className={styles.body}>
        {item && fields.map((field) => createElement(field))}
      </div>
      <div key="footer" className={styles.footer}>
        <button className="button" onClick={() => onEdit(item.id)}>
          Edit
        </button>
        {onRemove && (
          <button className="button" onClick={askToDelete}>
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
