import React from "react";

import "../assets/style/sass/components/forgetpassword.sass";

function ForgetPassword(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default React.memo(ForgetPassword);
