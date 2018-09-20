import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // used on the home page to display the post preview information
  render() {
    return (
      <article className="row my-5 pb-4 text-center text-md-left">
        <div className="col-md-5 mb-3 mb-sm-3">
          <img
            className="img-fluid shadow"
            src={this.props.image}
            alt={this.props.title}
          />
        </div>

        <div className="col-md-7 border-bottom pb-3 pb-sm-3">
          <h3 className="mb-2">{this.props.title}</h3>
          <p>{this.props.body}</p>
          <p>Author: {this.props.author}</p>
          <Link to={`/post/${this.props.id}`}>
            <button className="btn btn-secondary shadow-hover">View</button>
          </Link>
        </div>
      </article>
    );
  }
}
