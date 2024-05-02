import React from "react";

import "../assets/style/sass/components/logout.sass";

function Logout(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default React.memo(Logout);
