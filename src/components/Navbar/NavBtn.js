import React from 'react';
import { Link } from 'react-router-dom';
const NavBtn = ({ location, text }) => {
  return (
    <li className="nav-item active">
      <Link to={location} className="nav-link">
        {text}
      </Link>
    </li>
  );
};

export default NavBtn;
