import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostContext from '../Home/PostContext';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <article className="row my-5 pb-4 text-center text-md-left">
        <div className="col-md-5 mb-3 mb-sm-3">
          <img className="img-fluid" src={this.props.image} alt={this.props.title} />
        </div>

        <div className="col-md-7 border-bottom pb-3 pb-sm-3">
          <h3 className="mb-2">{this.props.title}</h3>
          <p>{this.props.body}</p>
          <p>Author: {this.props.author}</p>
          <Link
            to={{
              pathname: `/post/${this.props.id}`,
              state: this.props.allData
            }}
          >
            <button className="btn btn-secondary">View</button>
          </Link>
        </div>
      </article>
    );
  }
}
