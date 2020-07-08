import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function NavItem({route, children}) {
  console.log('route > ',route)
  return(
    <li className="menu-item">
      <span className="nav-indicator" />
      <Link
        to={`/${route}`}
      >
        {children}
      </Link>
    </li>
  )
};

NavItem.propTypes = {
  route: PropTypes.string
};

export default NavItem;