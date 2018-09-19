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
    <header>
      <nav
        style={{ fontSize: '17px' }}
        className="navbar navbar-expand navbar-dark bg-primary mb-5"
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            My Blog
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul role="navigation" className="navbar-nav ml-auto">
              {buttons.map(({ location, text }) => (
                <NavBtn
                  key={text}
                  style="nav-link"
                  location={location}
                  text={text}
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
