import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavBtn from './NavBtn';

const buttons = [
  { location: '/', text: 'Home' },
  { location: '/create/post', text: 'New Post' },
  { location: '/about', text: 'About Me' }
];

const Navbar = () => {
  return (
    <Fragment>
      <nav
        style={{ fontSize: '17px' }}
        className="navbar navbar-expand navbar-dark bg-primary"
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            Navbar
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {buttons.map(({ location, text }) => (
                <NavBtn key={text} location={location} text={text} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
