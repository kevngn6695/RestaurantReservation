import React from "react";

function Circle(props) {
  return <div className={props.className}></div>;
}

export default React.memo(Circle);
