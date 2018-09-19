import React, { Component } from 'react';

class LeaveComment extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', body: '' };
  }

  addComment = e => {
    e.preventDefault();
    const comment = { postId: this.props.postId, ...this.state };
    if (!comment.name) {
      comment.name = 'Anonymous User';
    }
    this.props.postComment(comment);
  };

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="mt-4">
        <h3 className="mb-4">Leave a Comment</h3>
        <form>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="inputName">
                  Name <small>(optional)</small>
                </label>
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
                <label htmlFor="emailInput">
                  Email address <small>(optional)</small>
                </label>
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
              value={this.state.body}
              onChange={this.handleInputChange}
              name="body"
              className="form-control"
              id="inputTextArea"
              rows="3"
            />
          </div>
          <button onClick={this.addComment} className="btn btn-primary">
            Post Comment
          </button>
        </form>
      </div>
    );
  }
}

export default LeaveComment;
