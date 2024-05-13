import React from "react";

function Pricetag(props) {
  return <div className={props.className}>{props.price}</div>;
}

export default React.memo(Pricetag);
