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
                    post.title.length > 15
                      ? post.title.slice(0, 15).trim() + '...'
                      : post.title;
                  post.body =
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

export default API;
