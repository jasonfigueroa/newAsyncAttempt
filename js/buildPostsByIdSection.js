const db = require('./db');

const buildPostsByIdSection = () => {
  const postsByIdSection = $('#posts-by-id-section');
  
  postsByIdSection.html(`<form>
  <label for="userId">Search Posts By User Id</label>
  <input type="text" id="userId">
  </form>
  <input id="submitBtn" type="submit" value="Submit">`);

  $('#submitBtn').click(() => {
    $('#posts-by-id-section > article').remove();
    
    const userId = $('#userId').val();
    // console.log(userId);
    db.getPostByUserId(userId).then((posts) => {
      posts.forEach((post) => {
        // a similar version of this is in buildAllPostsSection.js
        // maybe can make this a module
        const article = document.createElement('article');
        article.id = `post_${post.id}`;
  
        $('#posts-by-id-section').append(article);
    
        const title = `<h2>${post.title}</h2>`;
        const bodyWithLineBreaks = post.body.replace(/\n/g, '<br>');
        const body = `<p>${bodyWithLineBreaks}</p>`;
        
        $(`#post_${post.id}`).html(title + body);
      });
      // console.log(post);
    });
  });
};

module.exports = buildPostsByIdSection;