import React from "react";
import { Link, NavLink } from "react-router-dom";

const scrollToTop = () => window.scrollTo(0, 0);

const LinkWithScroll = (props) => <Link {...props} onClick={scrollToTop} />;

export const NavLinkWithScroll = (props) => (
  <NavLink {...props} onClick={scrollToTop} />
);

export default LinkWithScroll;
