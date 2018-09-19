import React, { Component } from 'react';
import API from '../../util/API';
import { Link } from 'react-router-dom';
import Comment from '../Comment';
import LeaveComment from '../LeaveComment';

class ViewPost extends Component {
  constructor(props) {
    super(props);
    this.state = { post: null, comments: null };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getOnePost(id);
  }

  postComment = comment => {
    this.setState(() => ({ comments: [...this.state.comments, comment] }));
    API.createComment(comment)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  getOnePost = postId => {
    API.getPostWithComments(postId)
      .then(post => {
        const { comments } = post;
        this.setState({ post, comments });
      })
      .catch(error => {
        this.setState({ error: 'An error occured while retrieving the post' });
      });
  };

  render() {
    if (!this.state.post) {
      return <div className="loader" />;
    }
    const { bigImage, title, userId, author, body, id } = this.state.post;
    return (
      <section className="container">
        <img
          className=" img-fluid float-none float-md-left mb-5 mb-md-0 mr-md-5"
          src={bigImage}
          alt={title}
        />
        <aside className="clearfix mb-5">
          <h1 className="mb-4">{title}</h1>
          <Link to={`/author/${userId}`}>
            <p>Written by {author}</p>
          </Link>
          <p>{body}</p>
        </aside>
        {this.state.comments && (
          <div>
            <h3>This post has {this.state.comments.length} comments</h3>
            <hr />
            {this.state.comments.map(({ id, name, body }, index) => (
              <Comment key={index} name={name} body={body} />
            ))}
          </div>
        )}
        <LeaveComment postComment={this.postComment} postId={id} />
      </section>
    );
  }
}

export default ViewPost;
