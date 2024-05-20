import React from "react";

import Button from "./Button";

import "../assets/style/sass/components/pagination.sass";

function Pagination(props) {
  return (
    <div className="pagination">
      {Array.from({ length: props.pages }).map((_, i) => (
        <Button
          key={i}
          className={i === props.current ? "active" : ""}
          onClick={() => props.handlePageClick(i)}
        >
          {i + 1}
        </Button>
      ))}
    </div>
  );
}

export default React.memo(Pagination);
