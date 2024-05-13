import React from "react";

import Card from "./Card";
import Container from "./Container";
import Wrapper from "./Wrapper";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Image from "./Image";

import "../assets/style/sass/components/courasel.sass";
import Pricetag from "./Pricetag";

function Courasels(props) {
  return (
    <Container className={props.className}>
      {props.foodList.map((food) => (
        <>
          <Card className={`tp-spcl-card`}>
            <Wrapper className="tp-spcl-pic-wrpr">
              <Image className="tp-spcl-img" url={food.picUrl} />
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
        </>
      ))}
    </Container>
  );
}

export default React.memo(Courasels);
