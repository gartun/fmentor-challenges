const modeBtn     = document.querySelector(".mode"),
      addCheckbox = document.getElementById("add-checkbox"),
      newTodo     = document.getElementById("new-todo"),
      todoUL      = document.getElementsByClassName("todo-ul")[0];

modeBtn.addEventListener("click", function() {
  const bodyClassList = [].slice.call(document.body.classList);
  if(bodyClassList.indexOf("dark") > -1) {
    document.body.classList.remove("dark");
    document.querySelector(".mode > img").src = "./images/icon-moon.svg";
  } else {
    document.body.classList.add("dark");
    document.querySelector(".mode > img").src = "./images/icon-sun.svg";
  }
  
});

function bindEventToCheckBoxes() {  
  const completeCheckBoxes = [].slice.call(document.getElementsByClassName("complete-checkbox"));

  completeCheckBoxes.forEach(function(cbox) {
    cbox.addEventListener("click", function() {
      this.classList.toggle("checked");
      updateTheLeftNumber();
    })
  })
}

function updateTheLeftNumber() {
  const completeCheckBoxes = [].slice.call(document.getElementsByClassName("complete-checkbox"));

  const numSpan = document.getElementsByClassName("left-num")[0];

  const checkedBoxes = [].slice.call(document.getElementsByClassName("checked"));
  const left = completeCheckBoxes.length - checkedBoxes.length;

  numSpan.innerText = left;
}

function updateTodos(filter) {
  const completeCheckBoxes = [].slice.call(document.getElementsByClassName("complete-checkbox"));
  if(filter === "all") {
    completeCheckBoxes.forEach(function(cbox) {
      cbox.parentElement.classList.remove("d-none");
    });
  }
}

function filterTodos(filter) {
  if(/all/g.test(filter)) {

  }
}

newTodo.addEventListener("keydown", function(e) {
  if(e.keyCode === 13) {
    validateInp();
  }
});

addCheckbox.addEventListener("click", validateInp);

function validateInp() {
  const val = newTodo.value;
  if(val && val.trim() !== "") addNewTodo(val);
  newTodo.value = "";
}

function addNewTodo(todo) {
  /*
    <p role="listitem">
      <span role="checkbox" class="complete-checkbox" tabindex="0"></span>
      <span>Finish the alSanaİş app</span>
      <button>&times;</button>
    </p>
  */
  const p = document.createElement("p");
  p.setAttribute("role", "listitem");

  const checkboxSpan = document.createElement("span");
  checkboxSpan.setAttribute("role", "checkbox");
  checkboxSpan.setAttribute("class", "complete-checkbox");
  checkboxSpan.setAttribute("tabindex", "0");

  const textSpan = document.createElement("span");
  // we have to create the text node this way, adding a space up front
  // to prevent the text from getting too close to checkbox
  const text = document.createTextNode(` ${todo}`);
  // add text to textSpan
  textSpan.appendChild(text);

  // create button
  const btn = document.createElement("button");
  btn.innerText = "x";

  // add all of these to parent p element
  p.appendChild(checkboxSpan); 
  p.appendChild(textSpan); 
  p.appendChild(btn);

  // add the p to the ul, as a first element at the top
  todoUL.insertBefore(p, todoUL.firstElementChild);

  // update the UI
  updateUI()
}

function updateUI() {
  bindEventToCheckBoxes();
  updateTheLeftNumber();
}

// DOMContentLoaded may fire before the script has a chance to run
// so it is wise to check before adding a listener.
if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", updateUI);
} else {
  updateUI();
}
