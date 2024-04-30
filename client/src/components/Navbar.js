import React from "react";

import "../assets/style/sass/components/navbar.sass";

function Navbar(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default React.memo(Navbar);
