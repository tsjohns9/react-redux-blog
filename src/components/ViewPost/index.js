import React, { Component } from 'react';
import API from '../../util/API';
import Post from '../Post';
import PageTabs from '../PageTabs';
import { connect } from 'react-redux';
import { setPage } from '../../redux/actions/actions';
import { Link } from 'react-router-dom';
import Comment from '../Comment';
import LeaveComment from '../LeaveComment';
import { getPost } from '../../redux/actions/actions';

class ViewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.data = this.props.location.state;
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.pageToSearch !== this.props.pageToSearch) {
  //     this.getPosts(this.pageToSearch());
  //   }
  // }

  componentDidMount() {
    this.getPostComments(this.data.id);
  }

  getPostComments = postId => {
    API.getPostComments(postId)
      .then(result => {
        this.setState({ comments: result });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log(this.state);
    return (
      <section className="container">
        <img
          className=" img-fluid float-none float-md-left mb-5 mb-md-0 mr-md-5"
          src={this.data.bigImage}
        />
        <aside className="clearfix mb-5">
          <h1 className="mb-4">{this.data.title}</h1>
          <Link to={`/author/${this.data.userId}`}>
            <p>Written by {this.data.author}</p>
          </Link>
          <p>{this.data.body}</p>
        </aside>
        {this.state.comments && (
          <div>
            <h3>This post has {this.state.comments.length} comments</h3>
            <hr />
            {this.state.comments.map(({ id, name, body }) => (
              <Comment key={id} name={name} body={body} />
            ))}
          </div>
        )}
        <LeaveComment />
      </section>
    );
  }
}

export default ViewPost;
