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

/***/ "./src/funcs/addNewTodo.js":
/*!*********************************!*\
  !*** ./src/funcs/addNewTodo.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var updateTheLeftNumber = __webpack_require__(/*! ./updateTheLeftNumber */ \"./src/funcs/updateTheLeftNumber.js\");\n\nvar _require = __webpack_require__(/*! ./updateTodos */ \"./src/funcs/updateTodos.js\"),\n    updateTodos = _require.updateTodos;\n\nvar todoUL = document.getElementsByClassName(\"todo-ul\")[0];\n\nfunction toggleCheckBox(elem) {\n  elem.classList.toggle(\"checked\");\n  elem.parentElement.classList.toggle(\"completed\");\n  updateTheLeftNumber();\n}\n\nfunction addNewTodo(todo) {\n  var activeFilter = document.getElementsByClassName(\"active-filter\")[0].innerText;\n  /*\r\n    <p role=\"listitem\">\r\n      <span role=\"checkbox\" class=\"complete-checkbox\" tabindex=\"0\"></span>\r\n      <span>Finish the alSanaİş app</span>\r\n      <button>&times;</button>\r\n    </p>\r\n  */\n\n  var p = document.createElement(\"p\");\n  p.setAttribute(\"role\", \"listitem\");\n  p.setAttribute(\"class\", \"todo-item\");\n  var checkboxSpan = document.createElement(\"span\");\n  checkboxSpan.setAttribute(\"role\", \"checkbox\");\n  checkboxSpan.setAttribute(\"class\", \"complete-checkbox\");\n  checkboxSpan.setAttribute(\"tabindex\", \"0\");\n  checkboxSpan.addEventListener(\"click\", function () {\n    toggleCheckBox(this);\n  });\n  var textSpan = document.createElement(\"span\"); // we have to create the text node this way, adding a space up front\n  // to prevent the text from getting too close to checkbox\n\n  var text = document.createTextNode(\" \".concat(todo)); // add text to textSpan\n\n  textSpan.appendChild(text); // create button\n\n  var btn = document.createElement(\"button\");\n  btn.innerText = \"x\";\n  btn.addEventListener(\"click\", function () {\n    removeItem(p);\n  }); // add all of these to parent p element\n\n  p.appendChild(checkboxSpan);\n  p.appendChild(textSpan);\n  p.appendChild(btn); // add the p to the ul, as a first element at the top\n\n  todoUL.insertBefore(p, todoUL.firstElementChild); // update the left number\n\n  updateTheLeftNumber(); // when we add a new todo, if active filter is completed\n  // we are switching it to all because the new todo is\n  // being added to list even though filter is completed and\n  // that's not what we want.\n\n  if (activeFilter.toLowerCase() === \"completed\") updateTodos(\"all\");\n}\n\nmodule.exports = {\n  addNewTodo: addNewTodo,\n  toggleCheckBox: toggleCheckBox\n};\n\n//# sourceURL=webpack://src/./src/funcs/addNewTodo.js?");

/***/ }),

/***/ "./src/funcs/bindEventToCheckBoxes.js":
/*!********************************************!*\
  !*** ./src/funcs/bindEventToCheckBoxes.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var updateTheLeftNumber = __webpack_require__(/*! ./updateTheLeftNumber.js */ \"./src/funcs/updateTheLeftNumber.js\");\n\nvar _require = __webpack_require__(/*! ./addNewTodo.js */ \"./src/funcs/addNewTodo.js\"),\n    toggleCheckBox = _require.toggleCheckBox;\n\nmodule.exports = function () {\n  var allCheckBoxes = [].slice.call(document.getElementsByClassName(\"complete-checkbox\"));\n  allCheckBoxes.forEach(function (cbox) {\n    cbox.addEventListener(\"click\", function () {\n      toggleCheckBox(this);\n      updateTheLeftNumber();\n    });\n  });\n};\n\n//# sourceURL=webpack://src/./src/funcs/bindEventToCheckBoxes.js?");

/***/ }),

/***/ "./src/funcs/bindEventToRemoveBtns.js":
/*!********************************************!*\
  !*** ./src/funcs/bindEventToRemoveBtns.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var removeItem = __webpack_require__(/*! ./removeItem */ \"./src/funcs/removeItem.js\");\n\nmodule.exports = function () {\n  var rmvBtns = [].slice.call(document.getElementsByClassName(\"rmv-btn\"));\n  rmvBtns.forEach(function (rmvBtn) {\n    rmvBtn.addEventListener(\"click\", function () {\n      removeItem(rmvBtn.parentElement);\n    });\n  });\n};\n\n//# sourceURL=webpack://src/./src/funcs/bindEventToRemoveBtns.js?");

/***/ }),

/***/ "./src/funcs/clearCompletedAll.js":
/*!****************************************!*\
  !*** ./src/funcs/clearCompletedAll.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var updateTheLeftNumber = __webpack_require__(/*! ./updateTheLeftNumber.js */ \"./src/funcs/updateTheLeftNumber.js\");\n\nvar _require = __webpack_require__(/*! ./updateTodos.js */ \"./src/funcs/updateTodos.js\"),\n    updateTodos = _require.updateTodos;\n\nmodule.exports = function () {\n  var activeFilter = document.getElementsByClassName(\"active-filter\")[0].innerText;\n  var checkedBoxes = [].slice.call(document.getElementsByClassName(\"checked\"));\n\n  if (checkedBoxes.length > 0) {\n    checkedBoxes.forEach(function (cbox) {\n      cbox.parentElement.remove();\n      updateTheLeftNumber(); // switch to all filter after cleaning all completed todos\n\n      if (activeFilter.toLowerCase() === \"completed\") updateTodos(\"all\");\n    });\n  }\n};\n\n//# sourceURL=webpack://src/./src/funcs/clearCompletedAll.js?");

/***/ }),

/***/ "./src/funcs/removeItem.js":
/*!*********************************!*\
  !*** ./src/funcs/removeItem.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var updateTheLeftNumber = __webpack_require__(/*! ./updateTheLeftNumber.js */ \"./src/funcs/updateTheLeftNumber.js\");\n\nmodule.exports = function (elem) {\n  elem.remove();\n  updateTheLeftNumber();\n};\n\n//# sourceURL=webpack://src/./src/funcs/removeItem.js?");

/***/ }),

/***/ "./src/funcs/updateTheLeftNumber.js":
/*!******************************************!*\
  !*** ./src/funcs/updateTheLeftNumber.js ***!
  \******************************************/
/***/ (function(module) {

eval("module.exports = function () {\n  var completeCheckBoxes = [].slice.call(document.getElementsByClassName(\"complete-checkbox\"));\n  var numSpan = document.getElementById(\"item-left\");\n  var checkedBoxes = [].slice.call(document.getElementsByClassName(\"checked\"));\n  var left = completeCheckBoxes.length - checkedBoxes.length;\n  numSpan.innerText = left;\n};\n\n//# sourceURL=webpack://src/./src/funcs/updateTheLeftNumber.js?");

/***/ }),

/***/ "./src/funcs/updateTodos.js":
/*!**********************************!*\
  !*** ./src/funcs/updateTodos.js ***!
  \**********************************/
/***/ (function(module) {

eval("var filterWords = [].slice.call(document.getElementsByClassName(\"filter\"));\n\nfunction updateTodos(filter) {\n  var todoItems = [].slice.call(document.getElementsByClassName(\"todo-item\"));\n  var completedTodosLen = document.getElementsByClassName(\"completed\").length; // if there's no completed todo, then immediately \n  // switch to 'all' filter so UI looks good.\n\n  if (filter === \"completed\" && completedTodosLen === 0) filter = \"all\";\n\n  if (filter === \"all\") {\n    todoItems.forEach(function (item) {\n      item.classList.remove(\"d-none\");\n    });\n  } else if (filter === \"completed\") {\n    todoItems.forEach(function (item) {\n      if (item.classList.contains(\"completed\")) {\n        item.classList.remove(\"d-none\");\n      } else {\n        item.classList.add(\"d-none\");\n      }\n    });\n  } else {\n    todoItems.forEach(function (item) {\n      if (!item.classList.contains(\"completed\")) {\n        item.classList.remove(\"d-none\");\n      } else {\n        item.classList.add(\"d-none\");\n      }\n    });\n  }\n\n  updateFilterClass(filter);\n}\n\nfunction updateFilterClass(filtWord) {\n  filterWords.forEach(function (filterSpan) {\n    if (filterSpan.innerText.toLowerCase() === filtWord) {\n      filterSpan.classList.add(\"active-filter\");\n    } else {\n      filterSpan.classList.remove(\"active-filter\");\n    }\n  });\n}\n\nmodule.exports = {\n  updateTodos: updateTodos\n};\n\n//# sourceURL=webpack://src/./src/funcs/updateTodos.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("/* ####### Polyfills for ... ####### */\nElement.prototype.remove = Element.prototype.remove || function () {\n  this.parentElement && this.parentElement.removeChild(this);\n};\n/* ####### ... -you guessed it right!- for IE ####### */\n\n\nvar bindEventToCheckBoxes = __webpack_require__(/*! ./funcs/bindEventToCheckBoxes.js */ \"./src/funcs/bindEventToCheckBoxes.js\");\n\nvar bindEventToRemoveBtns = __webpack_require__(/*! ./funcs/bindEventToRemoveBtns.js */ \"./src/funcs/bindEventToRemoveBtns.js\");\n\nvar updateTheLeftNumber = __webpack_require__(/*! ./funcs/updateTheLeftNumber.js */ \"./src/funcs/updateTheLeftNumber.js\");\n\nvar removeItem = __webpack_require__(/*! ./funcs/removeItem.js */ \"./src/funcs/removeItem.js\");\n\nvar clearCompletedAll = __webpack_require__(/*! ./funcs/clearCompletedAll.js */ \"./src/funcs/clearCompletedAll.js\");\n\nvar _require = __webpack_require__(/*! ./funcs/addNewTodo.js */ \"./src/funcs/addNewTodo.js\"),\n    addNewTodo = _require.addNewTodo;\n\nvar _require2 = __webpack_require__(/*! ./funcs/updateTodos.js */ \"./src/funcs/updateTodos.js\"),\n    updateTodos = _require2.updateTodos;\n\nvar modeBtn = document.querySelector(\".mode\"),\n    addCheckbox = document.getElementById(\"add-checkbox\"),\n    newTodo = document.getElementById(\"new-todo\"),\n    clearCompletedBtn = document.getElementsByClassName(\"clear-completed\")[0],\n    filterWords = [].slice.call(document.getElementsByClassName(\"filter\")); // If the device is not wider than 1024 px, remove the laptop filters\n// as they stop our queries before we reach the second filters group, phone filters\n// if(!window.matchMedia('(min-width: 1024px)').matches) {\n//   laptopFilters.remove()\n// }\n\nclearCompletedBtn.addEventListener(\"click\", clearCompletedAll);\n/* ###### BG mode... ###### */\n\nmodeBtn.addEventListener(\"click\", function () {\n  var bodyClassList = [].slice.call(document.body.classList);\n\n  if (bodyClassList.indexOf(\"dark\") > -1) {\n    document.body.classList.remove(\"dark\");\n    document.querySelector(\".mode > img\").src = \"./images/icon-moon.svg\";\n  } else {\n    document.body.classList.add(\"dark\");\n    document.querySelector(\".mode > img\").src = \"./images/icon-sun.svg\";\n  }\n});\n/* ###### ...BG mode ###### */\n\nfilterWords.forEach(function (filt) {\n  filt.addEventListener(\"click\", function () {\n    var filterWord = this.innerText.toLowerCase();\n    updateTodos(filterWord);\n  });\n});\nnewTodo.addEventListener(\"keydown\", function (e) {\n  if (e.keyCode === 13) {\n    validateInp();\n  }\n});\naddCheckbox.addEventListener(\"click\", validateInp);\n\nfunction validateInp() {\n  var val = newTodo.value;\n  if (val && val.trim() !== \"\") addNewTodo(val);\n  newTodo.value = \"\";\n}\n\nfunction updateUI() {\n  bindEventToCheckBoxes();\n  bindEventToRemoveBtns();\n  updateTheLeftNumber();\n} // DOMContentLoaded may fire before the script has a chance to run\n// so it is wise to check before adding a listener.\n\n\nif (document.readyState === 'loading') {\n  document.addEventListener(\"DOMContentLoaded\", updateUI);\n} else {\n  updateUI();\n}\n\n//# sourceURL=webpack://src/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;