import React from "react";

import Button from "./Button";

import "../assets/style/sass/components/pagination.sass";

function Pagination(props) {
  return (
    <React.Fragment className={props.className}>
      {Array.from({ length: props.pages }).map((_, i) => (
        <Button
          key={i}
          className={`pag-btn ${i === props.current ? "active" : ""}`}
          onClick={() => props.handlePageClick(i)}
        >
          <span
            className={`pag-indicator ${
              i === props.current ? "pag-indicator-animate" : ""
            }`}
          />
        </Button>
      ))}
    </React.Fragment>
  );
}

export default React.memo(Pagination);
