import React from "react";

import "../assets/style/sass/components/textinput.sass";

function TextInput(props) {
  return (
    <form className={props.classNameForm}>
      <label className={props.classNameLabel} for="">
        {props.text}
      </label>
      <input type={props.type} className={props.classNameInput} />
    </form>
  );
}

export default React.memo(TextInput);
