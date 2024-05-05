import React from "react";

import "../assets/style/sass/components/logo.sass";

function Logo(props) {
  return (
    <a href={props.href} {...props}>
      {props.children}
    </a>
  );
}

export default React.memo(Logo);
