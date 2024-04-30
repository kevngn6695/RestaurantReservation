import React from "react";

import { HeadingProps } from "../utils/type";

function Heading(props) {
  return <div>Heading</div>;
}

Heading.propTypes = HeadingProps;

export default React.memo(Heading);
