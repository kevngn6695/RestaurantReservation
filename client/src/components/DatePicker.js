import React from "react";

import "../assets/style/sass/components/datepicker.sass";

function DatePicker(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default React.memo(DatePicker);
