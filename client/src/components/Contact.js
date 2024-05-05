import React from "react";

function Contact(props) {
  return <div>{props.children}</div>;
}

export default React.memo(Contact);
