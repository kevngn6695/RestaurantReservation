import React from "react";

import Wrapper from "./Wrapper";
import Heading from "./Heading";

function Pricetag(props) {
  return (
    <Wrapper className={props.className}>
      <Heading h1>${props.price}</Heading>
    </Wrapper>
  );
}

export default React.memo(Pricetag);
