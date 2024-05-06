import React, { useState, useEffect } from "react";

import List from "./List";
import Container from "./Container";
import Wrapper from "./Wrapper";
import Logo from "./Logo";
import Button from "./Button";

import { createListItem, createItem } from "../utils/init";
import { NavbarProps } from "../utils/type";

import "../assets/style/sass/components/navbar.sass";

function Navbar(props) {
  const [activeLink, setActiveLink] = useState("");

  const listNavItem = [
    createListItem("menu", "Menu"),
    createListItem("event", "Event"),
    createListItem("about", "About"),
    createListItem("blog", "Blog"),
  ];

  const item = createItem("logo", "", "/");

  return (
    <Container className={props.className}>
      {/* Logo Section */}
      <Wrapper className={`nav-logo-wrpr`}>
        <Logo className={item.className} href={item.href}>
          Logo
        </Logo>
        {/* Add today weather and time feature here... */}
      </Wrapper>
      <Wrapper className={`nav-item-wrpr`}>
        <List className={`nav-item-list`} listItem={listNavItem} />
      </Wrapper>
      <Wrapper className={`nav-auth-btn-wrpr`}>
        <Button className={`nav-btn book`}>Reservation</Button>
        {/* <Button className={`nav-btn drk-mode`}></Button> */}
      </Wrapper>
    </Container>
  );
}

Navbar.propTypes = NavbarProps;

export default React.memo(Navbar);
