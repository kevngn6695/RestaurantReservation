import React from "react";

import Wrapper from "./Wrapper";
import Button from "./Button";
import Image from "./Image";

function Tab(props) {
  return (
    <Wrapper className={props.className}>
      {props.tabList.map((item) => (
        <Button className="tab-btn">
          <Image className={item.name} src={item.url} />
        </Button>
      ))}
    </Wrapper>
  );
}

export default React.memo(Tab);
