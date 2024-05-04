import React from "react";

import { ListProps } from "../utils/type";

import "../assets/style/sass/components/list.sass";

function List(props) {
  return (
    <ul className={props.className}>
      {props.ListItem.map((item) => (
        <div className={`item-wrapper`}>
          <li className={`item ${item.className}`}>{item.text}</li>
        </div>
      ))}
    </ul>
  );
}

List.propTypes = ListProps;

export default React.memo(List);
