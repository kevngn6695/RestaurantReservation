import React from "react";

import Wrapper from "./Wrapper";

function Pricetag(props) {
  return <Wrapper className={props.className}>{props.children}</Wrapper>;
}

export default React.memo(Pricetag);
