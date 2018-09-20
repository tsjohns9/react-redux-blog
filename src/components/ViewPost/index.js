import React, { Component } from 'react';
import API from '../../util/API';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Comment from '../Comment';
import LeaveComment from '../LeaveComment';

class ViewPost extends Component {
  constructor(props) {
    super(props);
    this.state = { post: null, comments: null };
  }

  // API call to load specific post data
  componentDidMount() {
    window.scrollTo(0, 0);
    const { id } = this.props.match.params;
    this.getOnePost(id);
  }

  // Saves comment to API and redux store
  postComment = comment => {
    this.setState(() => ({ comments: [...this.state.comments, comment] }));
    API.createComment(comment)
      .then()
      .catch(error => {
        console.log(error);
      });
  };

  // gets post from API
  getOnePost = postId => {
    API.getPostWithComments(postId)
      .then(post => {
        const { comments } = post;

        // userPost is a post created by a user from the redux store
        const { userPost } = this.props;

        // checks if the id matches an id in the redux store. if so, then its a userPost and should be displayed
        // merges default comments with comments left by a user if there are any
        if (this.props.comments.length) {
          this.setState({
            post: userPost ? userPost : post,
            comments: [...comments, ...this.props.comments]
          });
        } else {
          this.setState({
            post: userPost ? userPost : post,
            comments: [...comments]
          });
        }
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
          className=" img-fluid float-none float-md-left mb-5 mb-md-0 mr-md-5 shadow"
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

// export default ViewPost;

const mapStateToProps = (state, props) => {
  const { id } = props.match.params;
  return {
    comments: state.comments.filter(({ postId }) => postId == id),
    userPost: state.posts.filter(({ id: post }) => post == id)[0]
  };
};

export default connect(mapStateToProps)(ViewPost);
