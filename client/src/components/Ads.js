import React from "react";

import Container from "./Container";

function Ads(props) {
  return <Container id={props.id} className={props.className}></Container>;
}

export default React.memo(Ads);
