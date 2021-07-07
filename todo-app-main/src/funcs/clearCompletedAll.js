const updateTheLeftNumber = require("./updateTheLeftNumber.js"); 
const { updateTodos } = require("./updateTodos.js");

module.exports = function() {
  const activeFilter = document.getElementsByClassName("active-filter")[0].innerText;
  const checkedBoxes = [].slice.call(document.getElementsByClassName("checked"));

  if(checkedBoxes.length > 0) {
    checkedBoxes.forEach(function(cbox) {
      cbox.parentElement.remove();

      updateTheLeftNumber();

      // switch to all filter after cleaning all completed todos
      if(activeFilter.toLowerCase() === "completed") updateTodos("all");
    });
  }
}