const updateTheLeftNumber = require("./updateTheLeftNumber.js");
const { toggleCheckBox } = require("./addNewTodo.js");

module.exports = function() {
  const allCheckBoxes = [].slice.call(document.getElementsByClassName("complete-checkbox"));

  allCheckBoxes.forEach(function(cbox) {
    cbox.addEventListener("click", function() {
      toggleCheckBox(this);

      updateTheLeftNumber();
    })
  })
}
