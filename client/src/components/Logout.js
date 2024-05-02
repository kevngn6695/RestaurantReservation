import React from "react";

import Wrapper from "./Wrapper";
import Button from "./Button";

import { LogoutProps } from "../utils/type";

import "../assets/style/sass/components/logout.sass";

function Logout(props) {
  return (
    <Wrapper className={props.className}>
      <Button onClick={props.onClick}>Logout</Button>
    </Wrapper>
  );
}

Logout.propTypes = LogoutProps;

export default React.memo(Logout);
