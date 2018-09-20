import React, { Component } from 'react';
import API from '../../util/API';
import Post from '../Post';
import PageTabs from '../PageTabs';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: null };
    this.pageToSearch = () => this.props.pageToSearch + 1;
    this.userPosts = this.props.userPosts;
  }

  componentDidUpdate(prevProps) {
    // if the page changes, searches for posts based on the new page
    if (prevProps.pageToSearch !== this.props.pageToSearch) {
      this.getPosts(this.pageToSearch());
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    // gets posts based on the current page
    this.getPosts(this.pageToSearch());
  }

  getPosts = () => {
    // get specified page from posts
    API.getPostsWithImages(this.pageToSearch())
      .then(result => {
        console.log(result);
        // this.userPosts are posts created by users. joins user posts with posts retrieved from API
        this.setState({ posts: [...this.userPosts, ...result].slice(0, 9) });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    if (!this.state.posts) {
      return <div className="loader" />;
    }
    return (
      <section className="container">
        {this.state.posts &&
          this.state.posts.map(post => (
            <Post
              key={post.title}
              title={post.shortTitle}
              image={post.smallImage}
              body={post.shortBody}
              author={post.author}
              id={post.id}
              {...this.props}
            />
          ))}
        <PageTabs />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    pageToSearch: state.activeTab,
    userPosts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
