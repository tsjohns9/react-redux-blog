import './index.css';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavBtn from './NavBtn';

const buttons = [
  { location: '/', text: 'Home', style: 'nav-link btn-secondary nav-transition' },
  {
    location: '/create/post',
    text: 'New Post',
    style: 'nav-link btn-secondary nav-transition'
  },
  {
    location: '/about',
    text: 'About Me',
    style: 'nav-link bg-danger text-white nav-transition'
  }
];

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { reveal: false };
    this.location = () => window.location.pathname;
  }

  reveal = () => this.setState({ reveal: !this.state.reveal });

  render() {
    return (
      <header className="header mb-5">
        <nav
          style={{ fontSize: '17px' }}
          className="navbar navbar-expand navbar-light bg-white"
        >
          <div className="container">
            <Link to="/" className="navbar-brand">
              Trevor Johnson
            </Link>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul role="navigation" className="navbar-nav ml-auto">
                {buttons.map(({ location, text, style }) => (
                  <NavBtn key={text} style={style} location={location} text={text} />
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <div className="header-img ">
          <div className="overlay">
            <div className="text-center text-white">
              <h1 className="text-white">
                {this.location() === '/about' ? 'Trevor Johnson' : 'Hire Smart'}
              </h1>
              <p className="my-3" style={{ fontSize: '17px' }}>
                {this.location() === '/about'
                  ? 'Web Application Developer'
                  : 'Make an informed decision about the talent you want to employ'}
              </p>
              <button onClick={this.reveal} className="btn btn-danger my-3">
                Contact
              </button>
              <div
                className={`${this.state.reveal ? 'fade' : ''}`}
                style={{ fontSize: '19px', opacity: 0 }}
              >
                <p>602 481 4816</p>
                <p>johnsontrevor55@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
