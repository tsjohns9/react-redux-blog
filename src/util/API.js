import { trimExt } from 'upath';

const API = {};

API.getPosts = () => {
  return new Promise((resolve, reject) => {
    return fetch('https://jsonplaceholder.typicode.com/posts?_page=1')
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

API.getPostsWithImages = () => {
  return new Promise((resolve, reject) => {
    API.getPosts()
      .then(posts => {
        API.getImages()
          .then(images => {
            posts.forEach((post, index) => {
              post.smallImage = images[index].thumbnailUrl;
              post.bigImage = images[index].url;
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
  });
};

export default API;
