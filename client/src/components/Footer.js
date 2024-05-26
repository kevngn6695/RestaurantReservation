import React from "react";

import Heading from "./Heading";
import Wrapper from "./Wrapper";
import Paragraph from "./Paragraph";
import Logo from "./Logo";

import { FooterProps } from "../utils/type"; // Ensure FooterProps is properly defined
import { motion } from "framer-motion";
import Link from "./Link";

function Footer(props) {
  const listLink = [
    {
      name: "Services",
      links: [
        { name: "Pricing", url: "", className: "" },
        { name: "Tracking", url: "", className: "" },
        { name: "Report", url: "", className: "" },
        { name: "Term of services", url: "", className: "" },
      ],
    },
    {
      name: "Company",
      links: [
        { name: "Location", url: "", className: "" },
        { name: "Get in Touch", url: "", className: "" },
        { name: "Career", url: "", className: "" },
      ],
    },
    {
      name: "About Us",
      address: "2219 King Arthur, San Croisant CA 90000",
      email: "info@gg.com",
      links: [],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer className={`footer ${props.className}`}>
      <Wrapper>
        <Logo />
        <Heading>Company Name</Heading>
      </Wrapper>
      {listLink.map((item, index) => (
        <Wrapper key={index}>
          <Wrapper>
            <Heading>{item.name}</Heading>
          </Wrapper>
          <Wrapper>
            {item.links && item.links.length > 0 ? (
              item.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  className={link.className}
                  href={link.url}
                >
                  {link.name}
                </Link>
              ))
            ) : (
              <Paragraph>{item.address}</Paragraph>
            )}
          </Wrapper>
        </Wrapper>
      ))}
      <Wrapper className="footer-copyright-wrpr">
        <Paragraph className="footer-copyright-paragrph">
          Copyright &copy; 2020-{currentYear}. All Rights Reserved.
        </Paragraph>
      </Wrapper>
    </motion.footer>
  );
}

Footer.propTypes = FooterProps;

export default React.memo(Footer);
