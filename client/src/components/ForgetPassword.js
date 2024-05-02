import React from "react";

import { ForgetPasswordProps } from "../utils/type";

import "../assets/style/sass/components/forgetpassword.sass";

function ForgetPassword(props) {
  return <div className={props.className}>{props.children}</div>;
}

ForgetPassword.propTypes = ForgetPasswordProps;

export default React.memo(ForgetPassword);
