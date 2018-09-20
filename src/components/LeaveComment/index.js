import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../redux/actions/actions';

class LeaveComment extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', body: '', error: null };
  }

  // gets the text are input for error checking. used for a ref.
  textInput = null;

  // used to post a comment
  addComment = e => {
    e.preventDefault();
    // sets the values that will be saved in the store for the comment
    const comment = { postId: this.props.postId, ...this.state };

    delete comment.error;

    // error checking
    if (!comment.body) {
      this.textInput.focus();
      this.setState({ error: 'Please fill out the comment field' });
      return;
    }

    // sets default name if not provided
    if (!comment.name) {
      comment.name = 'Anonymous User';
    }

    // saves data to store. clears form.
    this.props.dispatch(addComment(comment));
    this.props.postComment(comment);
    this.setState({ name: '', email: '', body: '', error: null });
  };

  // gets form values on change and sets in state. clears errors if valid.
  handleInputChange = event => {
    const { value, name } = event.target;
    if (name === 'body' && value) {
      this.setState({ [name]: value, error: null });
    }
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
            <label htmlFor="inputTextArea">
              Comment <small>(required)</small>
            </label>
            <textarea
              ref={element => (this.textInput = element)}
              value={this.state.body}
              onChange={this.handleInputChange}
              name="body"
              className="form-control "
              id="inputTextArea"
              rows="3"
            />
            {this.state.error && <p className="text-danger">{this.state.error}</p>}
          </div>
          <button onClick={this.addComment} className="btn btn-primary shadow">
            Post Comment
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(LeaveComment);
