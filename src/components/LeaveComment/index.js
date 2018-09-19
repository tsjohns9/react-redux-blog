import React, { Component } from 'react';
import API from '../../util/API';
import Post from '../Post';
import PageTabs from '../PageTabs';
import { connect } from 'react-redux';

class LeaveComment extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', comment: '' };
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="mt-4">
        <h3>Leave a Comment</h3>
        <form role="leave comment">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="inputName">Name</label>
                <input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  type="text"
                  name="name"
                  className="form-control"
                  id="inputName"
                  aria-describedby="input-name"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="emailInput">Email address</label>
                <input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  type="email"
                  name="email"
                  className="form-control"
                  id="emailInput"
                  aria-describedby="input-email"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputTextArea">Comment</label>
            <textarea
              value={this.state.comment}
              onChange={this.handleInputChange}
              name="comment"
              className="form-control"
              id="inputTextArea"
              rows="3"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Post Comment
          </button>
        </form>
      </div>
    );
  }
}

export default LeaveComment;
