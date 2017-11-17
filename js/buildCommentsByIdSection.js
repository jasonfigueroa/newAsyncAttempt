const db = require('./db');
const buildForm = require('./buildForm');

const buildCommentsByPostIdSection = () => {
  
  buildForm('comments-by-id-section', 'Search Comments By Post Id', 'postId');

  $('#submitBtn').click(() => {
    
    $('#comments-by-id-section > article').remove();
    
    const postId = $('#postId').val();

    db.getCommentsByPostId(postId, comments => {
      comments.forEach((comment) => {
        
        const article = document.createElement('article');
        article.id = `comment_${comment.id}`;
  
        $('#comments-by-id-section').append(article);
    
        const name = `<h2>${comment.name}</h2>`;
        const email = `<h3>${comment.email}</h3>`;
        const bodyWithLineBreaks = comment.body.replace(/\n/g, '<br>');
        const body = `<p>${bodyWithLineBreaks}</p>`;
        
        $(`#comment_${comment.id}`).html(name + email + body);
      });
    });
    
  });
};

module.exports = buildCommentsByPostIdSection;