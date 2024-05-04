import React from "react";

import { ListProps } from "../utils/type";

import "../assets/style/sass/components/list.sass";

function List(props) {
  return (
    <ul className={props.className}>
      {props.ListItem.map((item) => (
        <div className={`item-wrpr`}>
          <li className={`item ${item.className}`}>
            <a className={`item-link ${item.className}`} href={item.href}>
              {item.text}
            </a>
          </li>
        </div>
      ))}
    </ul>
  );
}

List.propTypes = ListProps;

export default React.memo(List);
