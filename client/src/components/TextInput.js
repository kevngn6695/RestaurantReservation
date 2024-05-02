import React from "react";

import { TextInputProps } from "../utils/type";

import "../assets/style/sass/components/textinput.sass";

function TextInput(props) {
  return (
    <form className={props.classNameForm}>
      {props.ListInput.map((item) => {
        <>
          <label
            className={`props.classNameLabel ${item.name}`}
            for={item.name}
          >
            {item.text}
          </label>
          <input
            type={item.type}
            className={`props.classNameInput ${item.name}`}
            placeholder={item.placeholder}
            value={item.value}
            required={item.required}
            onChange={item.onChange}
          />
        </>;
      })}
    </form>
  );
}

TextInput.propTypes = TextInputProps;

export default React.memo(TextInput);
