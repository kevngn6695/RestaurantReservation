import React from "react";
import Container from "./Container";

function Contact(props) {
  return (
    <Container id={props.id} className={props.className}>
      {props.children}
    </Container>
  );
}

export default React.memo(Contact);
