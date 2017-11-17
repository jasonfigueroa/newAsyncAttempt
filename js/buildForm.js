const buildForm = (sectionId, labelText, textFieldId) => {
  const sectionElement = $(`#${sectionId}`);
  
  sectionElement.html(`<form id="form">
  <label for="${textFieldId}">${labelText}</label>
  <input type="text" id="${textFieldId}">
  </form>
  <input id="submitBtn" type="submit" value="Submit">`);

  const form = document.getElementById('form');
  
  // the following is the magical line to avoid a page refresh on enter when a 
  // textfield is in focus
  form.addEventListener('submit', function(e){e.preventDefault();}, false);

};

module.exports = buildForm;
