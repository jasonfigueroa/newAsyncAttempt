const db = require('./db');

const buildAllPostsSection = () => {
  db.getPosts(posts => {
    
    posts.forEach(post => {
      const article = document.createElement('article');
      article.id = `post_${post.id}`;
  
      $('#all-posts-section').append(article);
  
      const title = `<h2>${post.title}</h2>`;
      const bodyWithLineBreaks = post.body.replace(/\n/g, '<br>');
      const body = `<p>${bodyWithLineBreaks}</p>`;
      
      $(`#post_${post.id}`).html(title + body);
    });

  });
};

module.exports = buildAllPostsSection;