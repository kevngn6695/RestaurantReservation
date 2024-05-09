import React from "react";

import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

function Menu(props) {
  // Mock data
  const ListFood = [
    {
      name: "",
      description: "",
      ingredients: [{ name: "", type: "", quantity: 0 }],
      price: 0,
      ftime: 0,
      rating: 0,
    },
    {
      name: "",
      description: "",
      ingredients: [{ name: "", type: "", quantity: 0 }],
      price: 0,
      ftime: 0,
      rating: 0,
    },
    {
      name: "",
      description: "",
      ingredients: [{ name: "", type: "", quantity: 0 }],
      price: 0,
      ftime: 0,
      rating: 0,
    },
  ];

  return (
    <Container className={props.className}>
      <Wrapper className={`menu-ttl-wrpr`}>
        <Heading className={`menu-ttl`}>Menu</Heading>
      </Wrapper>
      <Wrapper className={`menu-info-wrpr`}>
        {ListFood.map((food) => (
          <>
            <Wrapper className={`menu-info`}>
              <Wrapper className={`menu-fd-info-wrpr`}>
                <Heading className={`menu-fd-name`}>{food.name}</Heading>
                <Paragraph className={`menu-fd-ftime`}>
                  {food.ftime} {food.ftime > 0 ? "mins" : "min"}
                </Paragraph>
              </Wrapper>
              <Wrapper className={`menu-fd-ingrdnt-wrpr`}>
                {food.ingredients.map((ingredient) => (
                  <>
                    <Heading className={`menu-fd-ingrdnt`}>
                      ingredient.name
                    </Heading>
                  </>
                ))}
              </Wrapper>
            </Wrapper>
            <Wrapper className={`menu-fd-price-wrpr`}>
              <Heading className={`menu-fd-totl`}>Total</Heading>
              <Heading className={`menu-fd-prce`}>{food.price}</Heading>
            </Wrapper>
          </>
        ))}
      </Wrapper>
    </Container>
  );
}

export default React.memo(Menu);
