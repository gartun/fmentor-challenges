/* ####### Polyfills for ... ####### */
require("./polyfills.js");

/* ####### ... -you guessed it right!- for IE ####### */

const bindEventToCheckBoxes = require("./funcs/bindEventToCheckBoxes.js");
const bindEventToRemoveBtns = require("./funcs/bindEventToRemoveBtns.js");
const updateTheLeftNumber = require("./funcs/updateTheLeftNumber.js");
const clearCompletedAll = require("./funcs/clearCompletedAll.js");
const { addNewTodo } = require("./funcs/addNewTodo.js");
const { updateTodos } = require("./funcs/updateTodos.js");
const { bindDragEventsToItems } = require("./funcs/bindDragEventsToItems.js");

const modeBtn = document.querySelector(".mode"),
  addCheckbox = document.getElementById("add-checkbox"),
  newTodo = document.getElementById("new-todo"),
  clearCompletedBtn = document.getElementsByClassName("clear-completed")[0],
  filterWords = [].slice.call(document.getElementsByClassName("filter"));

clearCompletedBtn.addEventListener("click", clearCompletedAll);

/* ###### BG mode... ###### */
modeBtn.addEventListener("click", function () {
  const bodyClassList = [].slice.call(document.body.classList);

  if (bodyClassList.indexOf("dark") > -1) {
    document.body.classList.remove("dark");
    document.querySelector(".mode > img").src = "./images/icon-moon.svg";
  } else {
    document.body.classList.add("dark");
    document.querySelector(".mode > img").src = "./images/icon-sun.svg";
  }
});
/* ###### ...BG mode ###### */

filterWords.forEach(function (filt) {
  filt.addEventListener("click", function () {
    const filterWord = this.innerText.toLowerCase();

    updateTodos(filterWord);
  });
});

newTodo.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    validateInp();
  }
});

addCheckbox.addEventListener("click", validateInp);

function validateInp() {
  const val = newTodo.value;
  if (val && val.trim() !== "") {
    addNewTodo(val);
    newTodo.value = "";
    return;
  }

  alert("Girdi alanını boş bıraktınız;");
}

function updateUI() {
  bindEventToCheckBoxes();
  bindEventToRemoveBtns();
  bindDragEventsToItems();
  updateTheLeftNumber();
}

// DOMContentLoaded may fire before the script has a chance to run
// so it is wise to check before adding a listener.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", updateUI);
} else {
  updateUI();
}
