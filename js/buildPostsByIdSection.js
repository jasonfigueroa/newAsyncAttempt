const db = require('./db');
const buildForm = require('./buildForm');

const buildPostsByIdSection = () => {

  buildForm('posts-by-id-section', 'Search Posts By User Id', 'userId');

  $('#submitBtn').click(() => {
    $('#posts-by-id-section > article').remove();
    
    const userId = $('#userId').val();
    
    db.getPostByUserId(userId, postsByUserId => {
      postsByUserId.forEach((post) => {
        
        const article = document.createElement('article');
        article.id = `post_${post.id}`;
  
        $('#posts-by-id-section').append(article);
    
        const title = `<h2>${post.title}</h2>`;
        const bodyWithLineBreaks = post.body.replace(/\n/g, '<br>');
        const body = `<p>${bodyWithLineBreaks}</p>`;
        
        $(`#post_${post.id}`).html(title + body);
      });

    });
    
  });
};

module.exports = buildPostsByIdSection;