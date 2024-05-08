import React, { useState, useEffect } from "react";

import { createListItem } from "../utils/init";

import "../assets/style/sass/components/navscroll.sass";

function NavScroll(props) {
  const [activeLink, setActiveLink] = useState("");
  const [mouseOver, setMouseOver] = useState(false);

  const LinkList = [
    createListItem("txt-sect", "home", "#txt-sect"),
    createListItem("tp-spcl-sect", "", "#tp-spcl-sect"),
    createListItem("ads-sect", "", "#ads-sect"),
    createListItem("wrk-hr-sect", "", "#wrk-hr-sect"),
    createListItem("contact-sect", "", "#contact-sect"),
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

  const handleMouseOver = () => {
    setMouseOver(true);
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
        <div className="line"></div>
        {LinkList.map((item) => (
          <>
            <a
              className="nav-scroll-link"
              href={`${item.href}`}
              onMouseMove={handleMouseOver}
            >
              {/* {item.text} */}
              <li
                className={`nav-scroll-item ${
                  activeLink === item.className ? "active" : ""
                }`}
              >
                {mouseOver && (
                  <div className="nav-scroll-tltip">{item.text}</div>
                )}
              </li>
            </a>
          </>
        ))}
        <div className="line"></div>
      </ul>
    </nav>
  );
}

export default React.memo(NavScroll);
