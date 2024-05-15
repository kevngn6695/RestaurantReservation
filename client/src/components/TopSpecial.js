import React from "react";

import Wrapper from "./Wrapper";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Card from "./Card";
import Container from "./Container";
import Courasels from "./Courasels";
import Tab from "./Tab";

import { TopSpecialProps } from "../utils/type";

import "../assets/style/sass/components/topspecial.sass";

function TopSpecial(props) {
  const tabList = [];
  const foodList = [
    { name: "wellington", description: "wellington", picUrl: "", price: 80 },
  ];
  return (
    <Container id={props.id} className={props.className}>
      <Wrapper className="tp-spcl-wrpr">
        <Wrapper>
          <Tab tabList={tabList} />
        </Wrapper>
        <Wrapper className="tp-spcl-food-wrpr">
          <Card className="tp-spcl-food" />
        </Wrapper>

        <Wrapper className="tp-spcl-ttl-wrpr">
          <Heading>Top Choices in Town</Heading>
          <Paragraph></Paragraph>
        </Wrapper>

        <Wrapper className="tp-spcl-list-wrpr">
          <Courasels foodList={foodList} />
        </Wrapper>
      </Wrapper>
    </Container>
  );
}

TopSpecial.propTypes = TopSpecialProps;

export default React.memo(TopSpecial);
