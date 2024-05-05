import React from "react";

function Ads(props) {
  return <div className={props.className}></div>;
}

export default React.memo(Ads);
