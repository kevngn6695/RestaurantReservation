import React, { useState, useEffect } from "react";

import Loading from "../components/Loading";
import Container from "../components/Container";

function Home(props) {
  return (
    <>
      {props.loading ? (
        <Loading className={`home-loading-container`} />
      ) : (
        <Container className={props.className}>Home</Container>
      )}
    </>
  );
}

export default React.memo(Home);
