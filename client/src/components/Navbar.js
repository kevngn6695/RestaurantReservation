import React from "react";

import List from "./List";
import Container from "./Container";

import { generateListItem } from "../utils/init";
import { NavbarProps } from "../utils/type";

import "../assets/style/sass/components/navbar.sass";

function Navbar(props) {
  const ListItem = [generateListItem()];
  return (
    <Container className={props.className}>
      <List ListItem={ListItem}></List>
    </Container>
  );
}

Navbar.propTypes = NavbarProps;

export default React.memo(Navbar);
