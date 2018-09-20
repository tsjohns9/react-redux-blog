// handles all http requests to the API

const API = {};

API.getPosts = pageNumber => {
  return new Promise((resolve, reject) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}`)
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
};

API.getPostComments = postId => {
  return new Promise((resolve, reject) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
};

API.getImages = (image = '?_page=1') => {
  return new Promise((resolve, reject) => {
    return fetch(`https://jsonplaceholder.typicode.com/photos/${image}`)
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
};

API.getAuthors = (authorId = '') => {
  return new Promise((resolve, reject) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`)
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
};

API.getOnePost = postId => {
  return new Promise((resolve, reject) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
};

API.getPostWithComments = (postId, userId) => {
  return new Promise((resolve, reject) => {
    API.getOnePost(postId)
      .then(post => {
        post.body = post.body.charAt(0).toUpperCase() + post.body.slice(1);
        API.getAuthors(post.userId)
          .then(author => {
            post.author = author.name;
            API.getImages(postId)
              .then(image => {
                post.bigImage = image.url;
                API.getPostComments(postId)
                  .then(comments => {
                    post.comments = comments;
                    resolve(post);
                  })
                  .catch(reject);
              })
              .catch(reject);
          })
          .catch(reject);
      })
      .catch(reject);
  });
};

API.getPostsWithImages = pageNumber => {
  return new Promise((resolve, reject) => {
    API.getAuthors()
      .then(authors => {
        API.getPosts(pageNumber)
          .then(posts => {
            API.getImages()
              .then(images => {
                posts.forEach((post, index) => {
                  post.smallImage = images[index].thumbnailUrl;
                  post.bigImage = images[index].url;
                  post.author = authors.filter(
                    ({ id }) => post.userId == id
                  )[0].name;
                  post.title =
                    post.title.charAt(0).toUpperCase() + post.title.slice(1);
                  post.body = post.body.charAt(0).toUpperCase() + post.body.slice(1);
                  post.shortTitle =
                    post.title.length > 15
                      ? post.title.slice(0, 15).trim() + '...'
                      : post.title;
                  post.shortBody =
                    post.body.length > 30
                      ? post.body.slice(0, 30).trim() + '...'
                      : post.body;
                });
                resolve(posts);
              })
              .catch(reject);
          })
          .catch(reject);
      })
      .catch(reject);
  });
};

API.createComment = comment => {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      body: JSON.stringify({ ...comment }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
};

export default API;
