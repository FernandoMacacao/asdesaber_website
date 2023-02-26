import React from "react";
import { Link, NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
  scroll.scrollToTop({ duration: 500, smooth: "smooth" });
};

const LinkWithScroll = (props) => <Link {...props} onClick={scrollToTop} />;

export const NavLinkWithScroll = (props) => (
  <NavLink {...props} onClick={scrollToTop} />
);

export default LinkWithScroll;
