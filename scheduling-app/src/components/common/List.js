import React from "react";
import Case from "case";

function List(props) {
  const { items, name } = props;
  return (
    <div key={name}>
      <ul>
        {items && items.map((item) => <li key={item}>{Case.capital(item)}</li>)}
      </ul>
    </div>
  );
}

export default List;
