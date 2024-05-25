import React from "react";

import Wrapper from "./Wrapper";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Container from "./Container";
import Courasels from "./Courasels";

import BoiledLobster from "../assets/media/images/images/tp-spcl-food/boiled-lobster-meal.png";
import NewYorkSteak from "../assets/media/images/images/tp-spcl-food/new-york-steak-meal.png";
import SalmonSteak from "../assets/media/images/images/tp-spcl-food/salmon-steak-meal.png";
import TomahawkSteak from "../assets/media/images/images/tp-spcl-food/tomahawk-steak-meal.png";
import WellingtonSteak from "../assets/media/images/images/tp-spcl-food/wellington-steak-meal.png";

import { TopSpecialProps } from "../utils/type";

import "../assets/style/sass/components/topspecial.sass";

function TopSpecial(props) {
  const totalPages = 2;
  const foodList = [
    {
      name: "wellington-steak-meal",
      picUrl: WellingtonSteak,
      description: "Madeira sauce",
      price: 80,
    },
    {
      name: "boiled-lobster-meal",
      picUrl: BoiledLobster,
      description: "butter and lemon",
      price: 90,
    },
    {
      name: "new-york-steak-meal",
      picUrl: NewYorkSteak,
      description: "peppercorn or béarnaise",
      price: 85,
    },
    {
      name: "salmon-steak-meal",
      picUrl: SalmonSteak,
      description: "bbq sauce",
      price: 75,
    },
    {
      name: "tomahawk-steak-meal",
      picUrl: TomahawkSteak,
      description: "classic béarnaise sauce",
      price: 95,
    },
  ];

  return (
    <Container id={props.id} className={props.className}>
      <Wrapper className="tp-spcl-wrpr">
        <Wrapper className="tp-spcl-list-wrpr">
          <Courasels
            className="tp-spcl-carousel"
            foodList={foodList}
            totalPages={totalPages}
          />
        </Wrapper>
        <Wrapper className="tp-spcl-ttl-wrpr">
          <Heading className={`tp-spcl-ttl`} h1>
            We have top delicious choices in town
          </Heading>
          <Paragraph className="tp-spcl-paragrph">
            Beef Wellington is a top culinary choice, known for its luxurious
            combination of tender beef fillet encased in a layer of savory
            mushroom duxelles and wrapped in golden, flaky puff pastry.
          </Paragraph>
        </Wrapper>
      </Wrapper>
    </Container>
  );
}

TopSpecial.propTypes = TopSpecialProps;

export default React.memo(TopSpecial);
