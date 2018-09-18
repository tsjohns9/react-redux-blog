import React, { Component } from 'react';
import API from '../../util/API';
import Post from '../Post';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: null };
  }

  componentDidMount() {
    API.getPostsWithImages()
      .then(result => {
        this.setState({ posts: result });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        {this.state.posts &&
          this.state.posts.map(post => (
            <Post
              key={post.title}
              title={post.title}
              image={post.smallImage}
              body={post.body}
            />
          ))}
      </div>
    );
  }
}
