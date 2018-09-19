import { trimExt } from 'upath';

const API = {};

API.getPosts = pageNumber => {
  return new Promise((resolve, reject) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}`)
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
};

API.getOnePost = postId => {
  return new Promise((resolve, reject) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts${postId}`)
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

API.getImages = () => {
  return new Promise((resolve, reject) => {
    return fetch('https://jsonplaceholder.typicode.com/photos?_page=1')
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
};

API.getAuthors = authorId => {
  return new Promise((resolve, reject) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/`)
      .then(response => response.json())
      .then(resolve)
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
                  post.author = authors[post.userId].name;
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
  fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    ...comment,
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(json => console.log(json));
};

export default API;
