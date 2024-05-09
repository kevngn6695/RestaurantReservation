import React from "react";

import Heading from "./Heading";
import Wrapper from "./Wrapper";
import Paragraph from "./Paragraph";

import { FooterProps } from "../utils/type";

import { motion } from "framer-motion";

function Footer(props) {
  return (
    <motion.footer className={`footer ${props.className}`}>
      <Heading></Heading>
      <Wrapper className="footer-copyright-wrpr">
        <Paragraph>
          Copyright &copy; 2020-{props.currentYear}. All Rights Reserved.
        </Paragraph>
      </Wrapper>
    </motion.footer>
  );
}

Footer.propTypes = FooterProps;

export default React.memo(Footer);
