import React, { useState, useEffect } from "react";

import Loading from "../components/Loading";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Heading from "../components/Heading";
import TopSpecial from "../components/TopSpecial";
import Image from "../components/Image";
import Paragraph from "../components/Paragraph";
import Ads from "../components/Ads";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import WorkingHour from "../components/WorkingHour";

function Home(props) {
  return (
    <>
      {props.loading ? (
        <Loading className={`home-loading-container`} />
      ) : (
        <Container className={props.className}>
          <Wrapper className={`hm-txt-wrpr`}>
            <Heading>Delious Meal Gets Together</Heading>
            <Wrapper className={`hm-mn-pic-wrpr`}>
              <Image className={`hm-mn-pic`} />
            </Wrapper>
          </Wrapper>
          <Wrapper>
            <TopSpecial />
          </Wrapper>
          <Wrapper>
            <Ads />
          </Wrapper>
          <Wrapper className={`hm-mn-wrk-hr-wrpr`}>
            <WorkingHour></WorkingHour>
          </Wrapper>
          <Wrapper className={`hm-mn-contact-wrpr`}>
            <Contact />
          </Wrapper>
          <Footer />
        </Container>
      )}
    </>
  );
}

export default React.memo(Home);
