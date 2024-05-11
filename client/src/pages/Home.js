import React from "react";

import Loading from "../components/Loading";
import Container from "../components/Container";
import Heading from "../components/Heading";
import TopSpecial from "../components/TopSpecial";
import Wrapper from "../components/Wrapper";
import Image from "../components/Image";
import Ads from "../components/Ads";
import Contact from "../components/Contact";
import Button from "../components/Button";
import WorkingHour from "../components/WorkingHour";
import NavScroll from "../components/NavScroll";

import Pic from "../assets/media/images/images/willington1.png";
import { WrapperProps } from "../utils/type";

function Home(props) {
  return (
    <>
      {props.loading ? (
        <Loading className={`hm-loading-container`} />
      ) : (
        <Container className={props.className}>
          <NavScroll className={`hm-nav-scroll-container`} />
          <Container id={`txt-sect`} className={`hm-txt-container`}>
            <Wrapper className={`hm-pic-wrpr`}>
              <Wrapper className={`hm-heading-wrpr`}>
                <Heading className={`hm-heading`} h1>
                  Delious Meal Gets Together
                </Heading>
                <Button className={`hm-menu-nav-btn`}>View Menu</Button>
              </Wrapper>
              <Image className={`hm-pic`} src={Pic} />
            </Wrapper>
          </Container>
          <TopSpecial id={`tp-spcl-sect`} className={`hm-tp-spcl-container`} />
          <WorkingHour id={`wrk-hr-sect`} className={`hm-wrk-hr-container`} />
          <Ads id={`ads-sect`} className={`hm-ads-container`} />
          <Contact id={`contact-sect`} className={`hm-contact-container`} />
        </Container>
      )}
    </>
  );
}

export default React.memo(Home);
