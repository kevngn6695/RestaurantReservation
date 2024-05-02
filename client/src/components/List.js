import React from "react";

import { ListProps } from "../utils/type";

import "../assets/style/sass/components/list.sass";

function List(props) {
  return (
    <ul className={props.className}>
      {props.ListItem.map((item) => (
        <>
          <li className={item.className}>{item.text}</li>
        </>
      ))}
    </ul>
  );
}

List.propTypes = ListProps;

export default React.memo(List);
