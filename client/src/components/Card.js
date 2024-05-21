import React from "react";
import Wrapper from "./Wrapper";

import "../assets/style/sass/components/card.sass";

function Card(props) {
  return (
    <Wrapper className={props.className} {...props}>
      {props.children}
    </Wrapper>
  );
}

export default React.memo(Card);
