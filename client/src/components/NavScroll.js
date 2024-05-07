import React, { useState, useEffect } from "react";

import { createListItem } from "../utils/init";

import "../assets/style/sass/components/navscroll.sass";

function NavScroll(props) {
  const [activeLink, setActiveLink] = useState("");

  const LinkList = [
    createListItem("txt-sect", "Home", "#txt-sect"),
    createListItem("tp-spcl-sect", "Top Special", "#tp-spcl-sect"),
    createListItem("ads-sect", "Ads", "#ads-sect"),
    createListItem("wrk-hr-sect", "Working Hour", "#wrk-hr-sect"),
    createListItem("contact-sect", "Contact", "#contact-sect"),
  ];

  const handleScroll = () => {
    const scrollPos = window.scrollY;

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const scrollTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= scrollTop && scrollPos < scrollTop + sectionHeight) {
        setActiveLink(section.id);
      }
    });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={props.className}>
      <ul className="nav-scroll-list">
        {LinkList.map((item) => (
          <li
            className={`nav-scroll-item ${
              activeLink === item.className ? "active" : ""
            }`}
          >
            <a className="nav-scroll-link" href={`${item.href}`}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default React.memo(NavScroll);
