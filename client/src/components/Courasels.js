import React from "react";

import Card from "./Card";
import Container from "./Container";
import Wrapper from "./Wrapper";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Image from "./Image";
import Pricetag from "./Pricetag";

import "../assets/style/sass/components/courasel.sass";

function Courasels(props) {
  console.log("Food List in Courasels:", props.foodList); // Debugging: Log the food list

  return (
    <Container className={props.className}>
      {props.foodList.map((food, i) => (
        <React.Fragment key={i}>
          <Card className={`tp-spcl-card`}>
            <Wrapper className="tp-spcl-pic-wrpr">
              <Image className="tp-spcl-img" src={food.picUrl} />
            </Wrapper>

            <Wrapper className="tp-spcl-fd-info-wrpr">
              <Wrapper className="tp-spcl-fd-info">
                <Heading className="tp-spcl-fd-ttl">{food.name}</Heading>
                <Heading className="tp-spcl-fd-price">{`${food.price}`}</Heading>
              </Wrapper>
              <Paragraph className="tp-spcl-fd-description">
                {food.description}
              </Paragraph>
            </Wrapper>
          </Card>
          <Wrapper className="tp-spcl-price-wrpr">
            <Pricetag className="tp-spcl-price-tag" price={food.price} />
          </Wrapper>
        </React.Fragment>
      ))}
    </Container>
  );
}

export default React.memo(Courasels);
