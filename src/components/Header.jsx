import React from "react";
import PropTypes from "prop-types";
import Bellotero from "../assets/bellotero.svg";
import NavItem from "./NavItem";
import "./Header.css";

function Header(props) {
  const { links } = props;
  return(
    <header className="menu-content">
      <img className="brand-logo" alt="logo" src={Bellotero} width="133" height="26" />
      <nav className="menu-nav">
        <ul className="menu-items">
          {links.length > 0 && links.map((link) => {
            return(
              <NavItem key={`${link.route}-${link.text}`} route={link.route}>
                {link.text}
              </NavItem>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  links: PropTypes.array
};

export default Header;