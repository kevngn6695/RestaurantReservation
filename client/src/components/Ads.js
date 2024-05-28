import React from "react";

import Container from "./Container";
import Wrapper from "./Wrapper";
import Image from "./Image";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

import GoogleBadge from "../assets/media/images/icons/google-badge-get-on-it-color.png";
import AppleBadge from "../assets/media/images/icons/apple-badge-download-on-white.png";

function Ads(props) {
  const ImgList = [
    { className: "apple-bdg-img", src: AppleBadge },
    { className: "google-bdg-img", src: GoogleBadge },
  ];
  return (
    <Container id={props.id} className={props.className}>
      <Wrapper className={`ads-wrpr`}>
        {/* Put multiple pics here */}
        <Wrapper className={`ads-pic-wrpr`}></Wrapper>
        <Wrapper className={`ads-info-wrpr`}>
          <Wrapper className={`ads-info-ttl-wrpr`}>
            <Heading className={`ads-info-ttl`} h1>
              App is Available
            </Heading>
            <Paragraph className={`ads-info-paragrph`}></Paragraph>
            <Wrapper className={`ads-ver-phone-wrpr`}>
              <Image />
              <Image />
            </Wrapper>
            <Wrapper className={`ads-info-pic-wrpr`}>
              {ImgList.map((item, i) => (
                <Image className={item.className} src={item.src} />
              ))}
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Container>
  );
}

export default React.memo(Ads);
