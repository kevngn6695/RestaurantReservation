import React, { useState, useEffect } from "react";

import Loading from "../components/Loading";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";

function Home(props) {
  return (
    <>
      {props.loading ? (
        <Loading className={`home-loading-container`} />
      ) : (
        <Container className={props.className}>
          <Wrapper className={`home-wrapper`}></Wrapper>
        </Container>
      )}
    </>
  );
}

export default React.memo(Home);
