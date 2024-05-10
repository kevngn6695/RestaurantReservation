import React from "react";

import "../assets/style/sass/components/image.sass";

function Image(props) {
  return <img className={props.className} src={props.src} />;
}

export default React.memo(Image);
