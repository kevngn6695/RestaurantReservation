import React from "react";

import "../assets/style/sass/components/card.sass";

function Card(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default React.memo(Card);
