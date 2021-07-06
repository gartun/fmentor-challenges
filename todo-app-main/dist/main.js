/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function() {

eval("var modeBtn = document.querySelector(\".mode\"),\n    addCheckbox = document.getElementById(\"add-checkbox\"),\n    newTodo = document.getElementById(\"new-todo\"),\n    todoUL = document.getElementsByClassName(\"todo-ul\")[0];\nmodeBtn.addEventListener(\"click\", function () {\n  var bodyClassList = [].slice.call(document.body.classList);\n\n  if (bodyClassList.indexOf(\"dark\") > -1) {\n    document.body.classList.remove(\"dark\");\n    document.querySelector(\".mode > img\").src = \"./images/icon-moon.svg\";\n  } else {\n    document.body.classList.add(\"dark\");\n    document.querySelector(\".mode > img\").src = \"./images/icon-sun.svg\";\n  }\n});\n\nfunction bindEventToCheckBoxes() {\n  var completeCheckBoxes = [].slice.call(document.getElementsByClassName(\"complete-checkbox\"));\n  completeCheckBoxes.forEach(function (cbox) {\n    cbox.addEventListener(\"click\", function () {\n      this.classList.toggle(\"checked\");\n      updateTheLeftNumber();\n    });\n  });\n}\n\nfunction updateTheLeftNumber() {\n  var completeCheckBoxes = [].slice.call(document.getElementsByClassName(\"complete-checkbox\"));\n  var numSpan = document.getElementsByClassName(\"left-num\")[0];\n  var checkedBoxes = [].slice.call(document.getElementsByClassName(\"checked\"));\n  var left = completeCheckBoxes.length - checkedBoxes.length;\n  numSpan.innerText = left;\n}\n\nfunction updateTodos(filter) {\n  var completeCheckBoxes = [].slice.call(document.getElementsByClassName(\"complete-checkbox\"));\n\n  if (filter === \"all\") {\n    completeCheckBoxes.forEach(function (cbox) {\n      cbox.parentElement.classList.remove(\"d-none\");\n    });\n  }\n}\n\nfunction filterTodos(filter) {\n  if (/all/g.test(filter)) {}\n}\n\nnewTodo.addEventListener(\"keydown\", function (e) {\n  if (e.keyCode === 13) {\n    validateInp();\n  }\n});\naddCheckbox.addEventListener(\"click\", validateInp);\n\nfunction validateInp() {\n  var val = newTodo.value;\n  if (val && val.trim() !== \"\") addNewTodo(val);\n  newTodo.value = \"\";\n}\n\nfunction addNewTodo(todo) {\n  /*\r\n    <p role=\"listitem\">\r\n      <span role=\"checkbox\" class=\"complete-checkbox\" tabindex=\"0\"></span>\r\n      <span>Finish the alSanaİş app</span>\r\n      <button>&times;</button>\r\n    </p>\r\n  */\n  var p = document.createElement(\"p\");\n  p.setAttribute(\"role\", \"listitem\");\n  var checkboxSpan = document.createElement(\"span\");\n  checkboxSpan.setAttribute(\"role\", \"checkbox\");\n  checkboxSpan.setAttribute(\"class\", \"complete-checkbox\");\n  checkboxSpan.setAttribute(\"tabindex\", \"0\");\n  var textSpan = document.createElement(\"span\"); // we have to create the text node this way, adding a space up front\n  // to prevent the text from getting too close to checkbox\n\n  var text = document.createTextNode(\" \".concat(todo)); // add text to textSpan\n\n  textSpan.appendChild(text); // create button\n\n  var btn = document.createElement(\"button\");\n  btn.innerText = \"x\"; // add all of these to parent p element\n\n  p.appendChild(checkboxSpan);\n  p.appendChild(textSpan);\n  p.appendChild(btn); // add the p to the ul, as a first element at the top\n\n  todoUL.insertBefore(p, todoUL.firstElementChild); // update the UI\n\n  updateUI();\n}\n\nfunction updateUI() {\n  bindEventToCheckBoxes();\n  updateTheLeftNumber();\n} // DOMContentLoaded may fire before the script has a chance to run\n// so it is wise to check before adding a listener.\n\n\nif (document.readyState === 'loading') {\n  document.addEventListener(\"DOMContentLoaded\", updateUI);\n} else {\n  updateUI();\n}\n\n//# sourceURL=webpack://src/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;