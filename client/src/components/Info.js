import React from "react";

import Wrapper from "./Wrapper";
import Heading from "./Heading";
import Link from "./Link";
import Paragraph from "./Paragraph";

function Info(props) {
  return (
    <Wrapper className={props.className}>
      <Wrapper className={`info-ttl-wrpr`}>
        <Heading>Address</Heading>
      </Wrapper>
      <Wrapper className={`info-wrpr`}>
        <Paragraph>3000 Lincoln Rd, Suite 330 Washington</Paragraph>
        <Link>(444) 304-1000</Link>
        <Link>info@email.com</Link>
      </Wrapper>
    </Wrapper>
  );
}

export default React.memo(Info);
