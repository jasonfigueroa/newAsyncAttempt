const buildForm = (sectionId, labelText, textFieldId) => {
  const sectionElement = $(`#${sectionId}`);
  
  sectionElement.html(`<form>
  <label for="${textFieldId}">${labelText}</label>
  <input type="text" id="${textFieldId}">
  </form>
  <input id="submitBtn" type="submit" value="Submit">`);

  // $('#submitBtn').click(() => {
  //   $(`#${sectionId} > article`).remove();
  // });
};

module.exports = buildForm;
