const buildAllPostsSection = require('./buildAllPostsSection');
const buildPostsByIdSection = require('./buildPostsByIdSection');
const buildCommentsByIdSection = require('./buildCommentsByIdSection');
const clearSections = require('./clearSections');


$(document).ready(function () {
  
  // add eventlisteners
  $('#all-posts-link').click(() => {
    clearSections();
    buildAllPostsSection();
  });

  $('#posts-by-link').click(() => {
    clearSections();
    buildPostsByIdSection();
  });

  $('#comments-by-link').click(() => {
    clearSections();
    buildCommentsByIdSection();
  });

});