import './index.css';
import React, { Component } from 'react';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: null };
  }

  render() {
    return (
      <section className="container">
        <h2 className="text-center mb-3">Why Me?</h2>
        <div className="row">
          <div className="col-md-6 bg-1" />
          <div className="col-md-6">
            <p>
              I am a web application developer with a raging hunger for success. I
              spend my days incessantly learning so that I may out-perform my peers,
              and advance my technical skills to be among the best in the industry. I
              am not simply looking for a job. I am searching for an opportunity to
              utilize my talent to serve others in an impactful way.
            </p>
            <p>
              I am driven to perform this work because I know that the skills I have
              can make a difference in the lives of others who use my products, and
              the people who I work with. Although self-study is crucial to shine in
              any position, I am seeking a team of software developers who can mentor
              me so that I can truly reach the vision that I have for myself.
            </p>
            <p>
              I design solutions, and I solve problems. I have a comprehensive
              knowledge of the development process, including planning, design,
              testing, and deployment, and I am proficient in building full stack,
              responsive web application connected to a RESTful API. I possess
              detailed knowledge on HTTP interactions and the client-server
              relationship due to my current role as a web developer, and my previous
              role as an senior technical support representative for Bluehost.com,
              where I performed advanced troubleshooting for Linux server issues. My
              technical stack includes React, Redux, Jest, ES6 JavaScript, MySQL,
              MongoDB, CSS, HTML, Git, Bash, and NodeJS.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
