import React, { useState, useEffect } from "react";

import { createListItem } from "../utils/init";

import { motion } from "framer-motion";

import "../assets/style/sass/components/navscroll.sass";

function NavScroll(props) {
  const [activeLink, setActiveLink] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltip, setTooltip] = useState("");
  const LinkList = [
    createListItem("txt-sect", "home", "#txt-sect"),
    createListItem("tp-spcl-sect", "", "#tp-spcl-sect"),
    // createListItem("wrk-hr-sect", "", "#wrk-hr-sect"),
    createListItem("ads-sect", "", "#ads-sect"),
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

  const handleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  const handleTooltipMouseEnter = (text) => {
    setTooltip(text);
  };

  const handleMouseLeave = () => {
    setTooltip("");
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.nav className={props.className}>
      <motion.ul className="nav-scroll-list">
        <motion.div className="line"></motion.div>
        {LinkList.map((item) => (
          <>
            <motion.a className="nav-scroll-link" href={`${item.href}`}>
              {/* {item.text} */}
              <motion.li
                className={`nav-scroll-item ${
                  activeLink === item.className ? "active" : ""
                } ${showTooltip ? "open" : "closed"} `}
                onMouseEnter={() => handleTooltipMouseEnter(item.text)}
                onMouseLeave={handleMouseLeave}
              >
                {showTooltip === tooltip && (
                  <motion.div className={`nav-scroll-tltip`}>
                    {item.text}
                  </motion.div>
                )}
              </motion.li>
            </motion.a>
          </>
        ))}
        <div className="line"></div>
      </motion.ul>
    </motion.nav>
  );
}

NavScroll.propTypes = {};
export default React.memo(NavScroll);
