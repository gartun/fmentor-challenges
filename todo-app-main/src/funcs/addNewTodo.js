const updateTheLeftNumber = require("./updateTheLeftNumber");
const { updateTodos } = require("./updateTodos");

const todoUL = document.getElementsByClassName("todo-ul")[0];

function toggleCheckBox(elem) {
  elem.classList.toggle("checked");
  elem.parentElement.classList.toggle("completed");

  updateTheLeftNumber();
}

function addNewTodo(todo) {
const activeFilter = document.getElementsByClassName("active-filter")[0].innerText;
  /*
    <p role="listitem">
      <span role="checkbox" class="complete-checkbox" tabindex="0"></span>
      <span>Finish the alSanaİş app</span>
      <button>&times;</button>
    </p>
  */
  const p = document.createElement("p");
  p.setAttribute("role", "listitem");
  p.setAttribute("class", "todo-item");

  const checkboxSpan = document.createElement("span");
  checkboxSpan.setAttribute("role", "checkbox");
  checkboxSpan.setAttribute("class", "complete-checkbox");
  checkboxSpan.setAttribute("tabindex", "0");
  checkboxSpan.addEventListener("click", function() {
    toggleCheckBox(this);
  })

  const textSpan = document.createElement("span");
  // we have to create the text node this way, adding a space up front
  // to prevent the text from getting too close to checkbox
  const text = document.createTextNode(` ${todo}`);
  // add text to textSpan
  textSpan.appendChild(text);

  // create button
  const btn = document.createElement("button");
  btn.innerText = "x";
  btn.addEventListener("click", function() {
    removeItem(p)
  });


  // add all of these to parent p element
  p.appendChild(checkboxSpan); 
  p.appendChild(textSpan); 
  p.appendChild(btn);

  // add the p to the ul, as a first element at the top
  todoUL.insertBefore(p, todoUL.firstElementChild);

  // update the left number
  updateTheLeftNumber();

  // when we add a new todo, if active filter is completed
  // we are switching it to all because the new todo is
  // being added to list even though filter is completed and
  // that's not what we want.
  if(activeFilter.toLowerCase() === "completed") updateTodos("all");
} 

module.exports = {
	addNewTodo,
	toggleCheckBox
}