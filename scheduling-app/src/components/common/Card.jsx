import React from "react";
import Case from "case";
import Calendar from "./Calendar";
import { wrapInDivAndLabel } from "../../Utils/UtilFunctions";
import LabelWithCount from "./LabelWithCount";
import { getRandomId } from "../../Utils/UtilFunctions";

const Card = (props) => {
  const { content, item, onEdit } = props;

  const styles = {
    parentDiv: "card",
    header: "card-header text-white p-3 border text-center fs-3 ",
    body: "card-body text-wrap",
    footer: "card-footer",
  };
  const fields = Object.keys(item);

  const createElement = (field) => {
    switch (field) {
      case "info":
        return wrapInDivAndLabel(field, <span> {item[field]}</span>);
        break;
      case "type":
        return wrapInDivAndLabel(field, <label>{item[field]}</label>);
        break;
      case "constraints":
        const subFields = Object.keys(item[field]);
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
        return wrapInDivAndLabel(
          field,
          <div>
            {item[field].map((i) => (
              <div key={getRandomId()}>
                <label className="label">{i.name}</label>
                <span>: {i.value}</span>
              </div>
            ))}
          </div>
        );
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
      </div>
    </div>
  );
};

export default Card;

// class Card extends Component {
//   state = {
//     styles: {
//       parentDiv: "card",
//       header: "card-header text-white p-3 border text-center fs-3 ",
//       body: "card-body text-wrap",
//       footer: "card-footer",
//     },
//   };
//   render() {
//     const { content } = this.props;
//     const { styles } = this.state;
//     return (
//       <div className={styles.parentDiv}>
//         <div key="header" className={styles.header}>
//           {content.header && content.header.map((head) => head)}
//         </div>
//         <div key="body" className={styles.body}>
//           {content.body && content.body.map((bod) => bod)}
//         </div>
//         <div key="footer" className={styles.footer}>
//           {content.footer && content.footer.map((foot) => foot)}
//         </div>
//       </div>
//     );
//   }
// }

// export default Card;
