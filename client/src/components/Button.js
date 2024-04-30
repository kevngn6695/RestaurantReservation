import React from "react";

import { ButtonProps } from "../utils/type";

import "../assets/style/sass/components/button.sass";

function Button(props) {
  return (
    <button className={props.children} {...props}>
      {props.children}
    </button>
  );
}

Button.propTypes = ButtonProps;

export default React.memo(Button);
