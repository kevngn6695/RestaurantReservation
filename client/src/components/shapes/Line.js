import React from "react";

function Line(props) {
  return <div className={props.className}></div>;
}

export default React.memo(Line);
