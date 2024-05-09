import React from "react";

import Wrapper from "./Wrapper";

import { ProgressBarProps } from "../utils/type";

function ProgressBar(props) {
  return <Wrapper className="progress-bar-wrpr"></Wrapper>;
}

ProgressBar.propTypes = ProgressBarProps;

export default React.memo(ProgressBar);
