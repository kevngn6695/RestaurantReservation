import React from "react";

import "../assets/style/sass/components/loading.sass";

function Loading(props) {
  return <div className={props.className}>Loading</div>;
}

export default React.memo(Loading);
