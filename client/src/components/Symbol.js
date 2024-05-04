import React from "react";

function Symbol(props) {
  return <img className={props.className} src={props.src} />;
}

export default React.memo(Symbol);
