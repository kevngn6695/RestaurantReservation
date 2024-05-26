import React from "react";
import Container from "./Container";
import Wrapper from "./Wrapper";
import Heading from "./Heading";
import Line from "./shapes/Line";
import Paragraph from "./Paragraph";
import Button from "./Button";

function Contact(props) {
  return (
    <Container id={props.id} className={props.className}>
      <Wrapper className={`contact-wrpr`}>
        <Wrapper className={`contact-mn-ttl-wrpr`}>
          <Heading className={`contact-mn-ttl`} h3>
            Let's Connect
          </Heading>
        </Wrapper>
        <Wrapper className={`contact-mn-reserve-wrpr`}>
          <Paragraph className={`contact-mn-paragrph`}>
            Reserve a table?
          </Paragraph>
          <Button className={`contact-reserve-btn`}>Reserve</Button>
        </Wrapper>
      </Wrapper>
      <Line className={`contact-line`} />
      <Wrapper>
        <Paragraph></Paragraph>
      </Wrapper>
    </Container>
  );
}

export default React.memo(Contact);
