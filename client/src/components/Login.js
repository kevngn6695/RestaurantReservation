import React from "react";

import "../assets/style/sass/components/login.sass";

function Login(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default React.memo(Login);
