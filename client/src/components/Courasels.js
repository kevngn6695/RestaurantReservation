import React, { useState } from "react";

import Card from "./Card";
import Container from "./Container";
import Wrapper from "./Wrapper";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Image from "./Image";
import Button from "./Button";
import Pagination from "./Pagination";

import { removeLastCapitalizedRest } from "../utils/function";

import "../assets/style/sass/components/courasel.sass";

function Courasels(props) {
  const itemsPerPage = 2; // Show 2 items per page
  const totalPages = Math.ceil(props.foodList.length / itemsPerPage);

  const [current, setCurrent] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");
  const [exitingCards, setExitingCards] = useState([]);

  const handlePrev = () => {
    setSlideDirection("slide-fade-in-right");
    setExitingCards([current * itemsPerPage, current * itemsPerPage + 1]); // Both cards will exit
    setTimeout(() => {
      setCurrent((i) => (i === 0 ? totalPages - 1 : i - 1));
      setExitingCards([]);
    }, 500);
  };

  const handleNext = () => {
    setSlideDirection("slide-fade-in-left");
    setExitingCards([current * itemsPerPage, current * itemsPerPage + 1]); // Both cards will exit
    setTimeout(() => {
      setCurrent((i) => (i === totalPages - 1 ? 0 : i + 1));
      setExitingCards([]);
    }, 500);
  };

  const handlePageClick = (pageIndex) => {
    if (pageIndex > current) {
      setSlideDirection("slide-fade-in-left");
    } else {
      setSlideDirection("slide-fade-in-right");
    }
    setExitingCards([current * itemsPerPage, current * itemsPerPage + 1]); // Both cards will exit
    setTimeout(() => {
      setCurrent(pageIndex);
      setExitingCards([]);
    }, 500);
  };

  const isVisible = (index) => {
    const startIndex = current * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return index >= startIndex && index < endIndex;
  };

  return (
    <Container className={props.className}>
      <Wrapper className={`tp-spcl-carousel-wrpr`}>
        <Button className={`tp-spcl-btn prev`} onClick={handlePrev}></Button>
        <Wrapper className="tp-spcl-card-wrpr">
          {props.foodList.map((food, i) => {
            const isVisibleCard = isVisible(i);
            const isExitingCard = exitingCards.includes(i);
            let animationClass = "";

            if (isExitingCard) {
              animationClass =
                slideDirection === "slide-fade-in-left"
                  ? "slide-fade-out-left"
                  : "slide-fade-out-right";
            } else if (isVisibleCard) {
              animationClass = slideDirection;
            }

            return isVisibleCard || isExitingCard ? (
              <Card
                className={`tp-spcl-card ${animationClass}`}
                onAnimationEnd={() => setSlideDirection("")}
                key={i}
              >
                <Wrapper className="tp-spcl-pic-wrpr">
                  <Image className="tp-spcl-img" src={food.picUrl} />
                </Wrapper>

                <Wrapper className="tp-spcl-fd-info-wrpr">
                  <Heading className="tp-spcl-fd-ttl" h1>
                    {removeLastCapitalizedRest(food.name)}
                  </Heading>
                  <Heading className="tp-spcl-fd-price">{`${food.price}`}</Heading>

                  <Paragraph className="tp-spcl-fd-description">
                    {food.description}
                  </Paragraph>
                </Wrapper>
              </Card>
            ) : null;
          })}
        </Wrapper>
        <Button className={`tp-spcl-btn next`} onClick={handleNext}></Button>
      </Wrapper>

      <Wrapper className="tp-spcl-pagination-wrpr">
        <Pagination
          pages={totalPages}
          current={current}
          setCurrent={setCurrent}
          handlePageClick={handlePageClick}
        />
      </Wrapper>
    </Container>
  );
}

export default React.memo(Courasels);
