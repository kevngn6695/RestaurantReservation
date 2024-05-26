import React from "react";

import Container from "./Container";
import Wrapper from "./Wrapper";
import Image from "./Image";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Courasels from "./Courasels";

function Ads(props) {
  return (
    <Container id={props.id} className={props.className}>
      <Wrapper className={`ads-wrpr`}>
        {/* <Courasels></Courasels> */}
        <Wrapper className={`ads-info-wrpr`}>
          <Wrapper className={`ads-info-ttl-wrpr`}>
            <Heading className={`ads-info-ttl`} h1>
              App is Available
            </Heading>
            <Paragraph className={`ads-info-paragrph`}></Paragraph>
          </Wrapper>
          <Wrapper className={`ads-ver-phone-wrpr`}>
            <Image />
            <Image />
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Container>
  );
}

export default React.memo(Ads);
