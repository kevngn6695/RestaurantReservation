import React from "react";

import Loading from "../components/Loading";
import Container from "../components/Container";
import Heading from "../components/Heading";
import TopSpecial from "../components/TopSpecial";
import Wrapper from "../components/Wrapper";
import Image from "../components/Image";
import Ads from "../components/Ads";
import Contact from "../components/Contact";
import WorkingHour from "../components/WorkingHour";
import NavScroll from "../components/NavScroll";

function Home(props) {
  return (
    <>
      <NavScroll className={`hm-nav-scroll-container`} />
      {props.loading ? (
        <Loading className={`hm-loading-container`} />
      ) : (
        <Container className={props.className}>
          <Container id={`txt-sect`} className={`hm-txt-container`}>
            <Heading>Delious Meal Gets Together</Heading>
            <Wrapper className={`hm-pic-wrpr`}>
              <Image className={`hm-pic`} />
            </Wrapper>
          </Container>
          <TopSpecial id={`tp-spcl-sect`} className={`hm-tp-spcl-container`} />
          <Ads id={`ads-sect`} className={`hm-ads-container`} />
          <WorkingHour id={`wrk-hr-sect`} className={`hm-wrk-hr-container`} />
          <Contact id={`contact-sect`} className={`hm-contact-container`} />
        </Container>
      )}
    </>
  );
}

export default React.memo(Home);
