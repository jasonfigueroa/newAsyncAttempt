const db = require('./db');
const buildForm = require('./buildForm');

const buildCommentsByPostIdSection = () => {
  // const commentsByIdSection = $('#comments-by-id-section');
  
  // commentsByIdSection.html(`<form>
  // <label for="postId">Search Comments By Post Id</label>
  // <input type="text" id="postId">
  // </form>
  // <input id="submitBtn" type="submit" value="Submit">`);
  
  buildForm('comments-by-id-section', 'Search Comments By Post Id', 'postId');

  $('#submitBtn').click(() => {
    $('#comments-by-id-section > article').remove();
    
    const postId = $('#postId').val();
    // console.log(postId);
    db.getCommentsByPostId(postId).then((comments) => {
      comments.forEach((comment) => {
        // a similar version of this is in buildAllPostsSection.js
        // maybe can make this a module
        const article = document.createElement('article');
        article.id = `comment_${comment.id}`;
  
        $('#comments-by-id-section').append(article);
    
        const name = `<h2>${comment.name}</h2>`;
        const email = `<h3>${comment.email}</h3>`;
        const bodyWithLineBreaks = comment.body.replace(/\n/g, '<br>');
        const body = `<p>${bodyWithLineBreaks}</p>`;
        
        $(`#comment_${comment.id}`).html(name + email + body);
      });
      // console.log(post);
    });
  });
};

module.exports = buildCommentsByPostIdSection;