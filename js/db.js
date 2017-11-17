const db = Object.create(null, {
  getPosts: {
    value: (callback) => {
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET'
      }).then((posts) => {
        callback(posts);
      });
    }
  },
  getPostByUserId: {
    value: (userId, callback) => {
      $.ajax({
        url: `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        method: 'GET'
      }).then(postsByUserId => {
        callback(postsByUserId);
      });
    }
  },
  getCommentsByPostId: {
    value: (postId, callback) => {
      $.ajax({
        url: `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        method: 'GET'
      }).then(commentsByPostId => {
        callback(commentsByPostId);
      });
    }
  }
});

module.exports = db;