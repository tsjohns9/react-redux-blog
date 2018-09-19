import React from 'react';
import { Link } from 'react-router-dom';
const NavBtn = ({ location, text, style }) => {
  return (
    <li className="nav-item">
      <Link to={location} className={style}>
        {text}
      </Link>
    </li>
  );
};

export default NavBtn;
