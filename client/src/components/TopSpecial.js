import React from "react";

import "../assets/style/sass/components/topspecial.sass";
import Wrapper from "./Wrapper";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Card from "./Card";

function TopSpecial(props) {
  return (
    <>
      <Wrapper className="top-spcl-wrpr">
        <Wrapper className="top-spcl-food-wrpr">
          <Card className="top-spcl-food" />
        </Wrapper>

        <Wrapper>
          <Heading>Top Choices in Town</Heading>
          <Paragraph></Paragraph>
        </Wrapper>

        <Wrapper></Wrapper>
      </Wrapper>
    </>
  );
}

export default React.memo(TopSpecial);
