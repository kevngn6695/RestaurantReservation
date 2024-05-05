import React from "react";

import List from "./List";
import Container from "./Container";
import Wrapper from "./Wrapper";
import Logo from "./Logo";
import Button from "./Button";

import { createListMenuItem } from "../utils/init";
import { NavbarProps } from "../utils/type";

import "../assets/style/sass/components/navbar.sass";

function Navbar(props) {
  const ListItem = [
    createListMenuItem("menu", "Menu"),
    createListMenuItem("event", "Event"),
    createListMenuItem("about", "About"),
    createListMenuItem("blog", "Blog"),
  ];
  return (
    <Container className={props.className}>
      {/* Logo Section */}
      <Wrapper className={`nav-logo-wrpr`}>
        <Logo className={`logo`}>Logo</Logo>
        {/* Add today weather and time feature here... */}
      </Wrapper>
      <Wrapper className={`nav-item-wrpr`}>
        <List className={`nav-item-list`} ListItem={ListItem} />
      </Wrapper>
      <Wrapper className={`nav-auth-btn-wrpr`}>
        <Button className={`nav-btn book`}>Reservation</Button>
        <Button className={`nav-btn drk-mode`}></Button>
      </Wrapper>
    </Container>
  );
}

Navbar.propTypes = NavbarProps;

export default React.memo(Navbar);
