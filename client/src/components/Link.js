import React from "react";

import { motion } from "framer-motion";

function Link(props) {
  return (
    <motion.a className={props.className} href={props.href} {...props}>
      {props.children}
    </motion.a>
  );
}

export default React.memo(Link);
