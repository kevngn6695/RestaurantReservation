import React from "react";

import Wrapper from "./Wrapper";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Container from "./Container";
import Courasels from "./Courasels";
import Tab from "./Tab";

import Lobster from "../assets/media/images/images/tp-spcl-food/lobster-meal.png";
import NewYorkSteak from "../assets/media/images/images/tp-spcl-food/new-york-steak-meal.png";
import SalmonSteak from "../assets/media/images/images/tp-spcl-food/salmon-steak-meal.png";
import TomahawkSteak from "../assets/media/images/images/tp-spcl-food/tomahawk-steak-meal.png";
import WellingtonSteak from "../assets/media/images/images/tp-spcl-food/wellington-steak-meal.png";

import { TopSpecialProps } from "../utils/type";

import "../assets/style/sass/components/topspecial.sass";

function TopSpecial(props) {
  const tabList = [];
  const foodList = [
    {
      name: "wellington-steak-meal",
      picUrl: WellingtonSteak,
      description: "Wellington",
      price: 80,
    },
    {
      name: "lobster-meal",
      picUrl: Lobster,
      description: "Lobster",
      price: 90,
    },
    {
      name: "new-york-steak-meal",
      picUrl: NewYorkSteak,
      description: "New York Steak",
      price: 85,
    },
    {
      name: "salmon-steak-meal",
      picUrl: SalmonSteak,
      description: "Salmon Steak",
      price: 75,
    },
    {
      name: "tomahawk-steak-meal",
      picUrl: TomahawkSteak,
      description: "Tomahawk Steak",
      price: 95,
    },
  ];

  return (
    <Container id={props.id} className={props.className}>
      <Wrapper className="tp-spcl-wrpr">
        <Wrapper>
          <Tab tabList={tabList} />
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
