import React, { useState, useEffect } from "react";

import Container from "./Container";
import Wrapper from "./Wrapper";

import { LoadingProps } from "../utils/type";

import "../assets/style/sass/components/loading.sass";

function Loading(props) {
  return (
    <Container className={props.className}>
      <Wrapper className={`loading-element-wrapper`}>
        <Wrapper className={`loading-three-dot-wrapper`}>
          <div className="loading-element">Loading...</div>
        </Wrapper>
      </Wrapper>
    </Container>
  );
}

Loading.propTypes = LoadingProps;

export default React.memo(Loading);
