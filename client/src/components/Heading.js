import React from "react";

import { HeadingProps } from "../utils/type";

import "../assets/style/sass/components/heading.sass";

function Heading(props) {
  return <div>Heading</div>;
}

Heading.propTypes = HeadingProps;

export default React.memo(Heading);
