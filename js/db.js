const db = Object.create(null, {
  getPosts: {
    value: () => {
      return $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET'
      });
    }
  },
  getPostByUserId: {
    value: (userId) => {
      return $.ajax({
        url: `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        method: 'GET'
      });
    }
  },
  getCommentsByPostId: {
    value: (postId) => {
      return $.ajax({
        url: `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        method: 'GET'
      });
    }
  }
});

module.exports = db;