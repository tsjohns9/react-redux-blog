import React, { Component } from 'react';
import API from '../../util/API';
import { connect } from 'react-redux';
import { addPost } from '../../redux/actions/actions';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      title: '',
      bodyErr: null,
      titleErr: null,
      success: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // used to focus input fields if there is an error with a ref
  titleInput = null;
  textInput = null;
  form = null;

  addPost = e => {
    e.preventDefault();

    // sets the values for the post to save in the redux store
    const post = {
      id: 51,
      userId: 1,
      author: 'Leanne Graham',
      shortBody: '',
      smallImage: 'https://via.placeholder.com/150/56a8c2',
      bigImage: 'https://via.placeholder.com/600/56a8c2',
      body: this.state.body,
      title: this.state.title
    };
    post.shortTitle =
      post.title.length > 15 ? post.title.slice(0, 15).trim() + '...' : post.title;
    post.shortBody =
      post.body.length > 30 ? post.body.slice(0, 30).trim() + '...' : post.body;

    // error checking
    if (!post.title) {
      this.titleInput.focus();
      this.setState({ titleErr: 'Please add a title' });
      return;
    }

    if (!post.body) {
      this.textInput.focus();
      this.setState({ bodyErr: 'Please fill out the post' });
      return;
    }

    // clears form and state on success
    this.props.dispatch(addPost(post));
    this.setState({
      title: '',
      body: '',
      bodyErr: null,
      titleErr: null,
      success: true
    });
    this.form.reset();
  };

  // gets values from form on change. clears errors if valid.
  onChange = event => {
    const { value, name } = event.target;
    if (name === 'body' && value) {
      this.setState({ [name]: value, bodyErr: null, success: null });
    }
    if (name === 'title' && value) {
      this.setState({ [name]: value, titleErr: null, success: null });
    }
    this.setState({ [name]: value });
  };

  render() {
    return (
      <section className="container">
        <h2>Have something to say? Share it below!</h2>
        <form ref={element => (this.form = element)}>
          <div className="form-group">
            <label htmlFor="inputName">
              Title <small>(required)</small>
            </label>
            <input
              ref={element => (this.titleInput = element)}
              value={this.state.title}
              onChange={this.onChange}
              type="text"
              name="title"
              className="form-control"
              id="inputName"
              aria-describedby="input-name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputTextArea">
              Body <small>(required)</small>
            </label>
            <textarea
              ref={element => (this.textInput = element)}
              onChange={this.onChange}
              name="body"
              className="form-control "
              id="inputTextArea"
              rows="3"
            />
            {this.state.bodyErr && (
              <p className="text-danger">{this.state.bodyErr}</p>
            )}
            {this.state.titleErr && (
              <p className="text-danger">{this.state.titleErr}</p>
            )}
            {this.state.success && <p className="text-success">SUCCESS</p>}
          </div>
          <button onClick={this.addPost} className="btn btn-primary shadow">
            Post Comment
          </button>
        </form>
      </section>
    );
  }
}

export default connect()(CreatePost);
