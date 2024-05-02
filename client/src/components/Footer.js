import React from "react";

import { FooterProps } from "../utils/type";

function Footer(props) {
  return (
    <footer className={`footer ${props.className}`}>
      <p></p>
    </footer>
  );
}

Footer.propTypes = FooterProps;

export default React.memo(Footer);
