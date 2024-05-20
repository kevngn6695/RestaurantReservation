import React, { useState } from "react";

import Card from "./Card";
import Container from "./Container";
import Wrapper from "./Wrapper";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Image from "./Image";
import Button from "./Button";

import { removeLastCapitalizedRest } from "../utils/function";

import "../assets/style/sass/components/courasel.sass";
import Pagination from "./Pagination";

function Courasels(props) {
  const itemsPerPage = 2; // Show 2 items per page
  const totalPages = Math.ceil(props.foodList.length / itemsPerPage);

  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((i) => (i === 0 ? totalPages - 1 : i - 1));
  };

  const handleNext = () => {
    setCurrent((i) => (i === totalPages - 1 ? 0 : i + 1));
  };

  const handlePageClick = (pageIndex) => {
    setCurrent(pageIndex);
  };

  const isVisible = (index) => {
    const startIndex = current * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return index >= startIndex && index < endIndex;
  };

  return (
    <Container className={props.className}>
      <Button className={`tp-spcl-btn prev`} onClick={handlePrev}>
        Prev
      </Button>
      <Wrapper className="tp-spcl-card-wrpr">
        {props.foodList.map(
          (food, i) =>
            isVisible(i) && (
              <Card className={`tp-spcl-card`} key={i}>
                <Wrapper className="tp-spcl-pic-wrpr">
                  <Image className="tp-spcl-img" src={food.picUrl} />
                </Wrapper>

                <Wrapper className="tp-spcl-fd-info-wrpr">
                  <Wrapper className="tp-spcl-fd-info">
                    <Heading className="tp-spcl-fd-ttl" h1>
                      {removeLastCapitalizedRest(food.name)}
                    </Heading>
                    <Heading className="tp-spcl-fd-price">{`${food.price}`}</Heading>
                  </Wrapper>
                  <Paragraph className="tp-spcl-fd-description">
                    {food.description}
                  </Paragraph>
                </Wrapper>
              </Card>
            ),
        )}
      </Wrapper>
      <Pagination
        pages={totalPages}
        current={current}
        setCurrent={setCurrent}
        handlePageClick={handlePageClick}
      />
      <Button className={`tp-spcl-btn next`} onClick={handleNext}>
        Next
      </Button>
    </Container>
  );
}

export default React.memo(Courasels);
