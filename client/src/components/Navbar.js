import React from "react";

import List from "./List";
import Container from "./Container";
import Wrapper from "./Wrapper";
import Logo from "./Logo";
import Button from "./Button";

import { generateListItem } from "../utils/init";
import { NavbarProps } from "../utils/type";

import "../assets/style/sass/components/navbar.sass";

function Navbar(props) {
  const ListItem = [
    generateListItem("menu", "Menu"),
    generateListItem("event", "Event"),
    generateListItem("about", "About"),
    generateListItem("blog", "Blog"),
  ];
  return (
    <Container className={props.className}>
      {/* Logo Section */}
      <Wrapper className={`nav-logo-wrapper`}>
        <Logo />
        {/* Add today weather and time feature here... */}
      </Wrapper>
      <Wrapper className={`nav-item-wrapper`}>
        <List ListItem={ListItem} />
      </Wrapper>
      <Wrapper className={`nav-auth-btn-wrapper`}>
        <Button className={`nav-auth-btn`}>Login</Button>
        <Button className={`nav-book-btn`}>Reservation</Button>
      </Wrapper>
    </Container>
  );
}

Navbar.propTypes = NavbarProps;

export default React.memo(Navbar);
