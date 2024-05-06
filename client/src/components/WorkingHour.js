import React from "react";

import Container from "./Container";

function WorkingHour(props) {
  return <Container id={props.id} className={props.className}></Container>;
}

export default React.memo(WorkingHour);
