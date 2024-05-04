import React from "react";

import "../assets/style/sass/components/logo.sass";

function Logo(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default React.memo(Logo);
