import React from "react";

import Wrapper from "./Wrapper";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Card from "./Card";
import Container from "./Container";
import Image from "./Image";

import "../assets/style/sass/components/topspecial.sass";

function TopSpecial(props) {
  const recommendations = [{ name: "", description: "", picUrl: "", price: 0 }];
  return (
    <Container id={props.id} className={props.className}>
      <Wrapper className="tp-spcl-wrpr">
        <Wrapper className="tp-spcl-food-wrpr">
          <Card className="tp-spcl-food" />
        </Wrapper>

        <Wrapper className="tp-spcl-ttl-wrpr">
          <Heading>Top Choices in Town</Heading>
          <Paragraph></Paragraph>
        </Wrapper>

        <Wrapper className="tp-spcl-list">
          {recommendations.map((food) => (
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
            </>
          ))}
        </Wrapper>
      </Wrapper>
    </Container>
  );
}

export default React.memo(TopSpecial);
