import './index.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.location = () => window.location.pathname;
    this.state = { reveal: false, active: this.location() };
  }

  // used for displaying contact information when button is pressed
  reveal = () => this.setState({ reveal: !this.state.reveal });

  // sets the active status to the nav tab
  componentDidUpdate() {
    if (this.state.active !== this.location()) {
      this.setState({
        active: this.location()
      });
    }
  }

  render() {
    return (
      <header className="header mb-5">
        <nav className="navbar navbar-expand  navbar-light bg-white">
          <div className="container nav-flex">
            <Link to="/" className="navbar-brand mb-3" style={{ fontSize: '25px' }}>
              Trevor Johnson
            </Link>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul role="navigation" className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={`nav-link btn-secondary nav-transition shadow-hover ${this
                      .state.active === '/' && 'active-nav'}`}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/create/post"
                    className={`nav-link btn-secondary nav-transition shadow-hover ${this
                      .state.active === '/create/post' && 'active-nav'}`}
                  >
                    New Post
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link bg-danger text-white nav-transition shadow-hover"
                    style={{ borderBottom: 'solid 1px transparent' }}
                  >
                    About Me
                  </Link>
                </li>
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
              <p className="my-3">
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
