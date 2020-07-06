import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function NavItem({route, children}) {
  return(
    <li className="menu-item">
      <Link
        to={route}
      >
        <span className="nav-indicator" />
        {children}
      </Link>
    </li>
  )
};

NavItem.propTypes = {
  route: PropTypes.string
};

export default NavItem;