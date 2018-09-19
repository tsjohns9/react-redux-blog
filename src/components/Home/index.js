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
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pageToSearch !== this.props.pageToSearch) {
      this.getPosts(this.pageToSearch());
    }
  }

  componentDidMount() {
    this.getPosts(this.pageToSearch());
  }

  getPosts = page => {
    // get specified page from posts
    API.getPostsWithImages(this.pageToSearch())
      .then(result => {
        this.setState({ posts: result });
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
    pageToSearch: state.activeTab
  };
};

export default connect(mapStateToProps)(Home);
