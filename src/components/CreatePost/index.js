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

  titleInput = null;
  textInput = null;
  form = null;

  addPost = e => {
    e.preventDefault();
    const post = {
      id: 51,
      userId: 1,
      body: this.state.body,
      title: this.state.title
    };

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
    console.log(this.state);
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
