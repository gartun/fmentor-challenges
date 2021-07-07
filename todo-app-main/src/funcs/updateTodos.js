const filterWords = [].slice.call(document.getElementsByClassName("filter"));

function updateTodos(filter) {
  const todoItems = [].slice.call(document.getElementsByClassName("todo-item"));
  const completedTodosLen = document.getElementsByClassName("completed").length;

  // if there's no completed todo, then immediately 
  // switch to 'all' filter so UI looks good.
  if(filter === "completed" && completedTodosLen === 0) filter = "all";

  if(filter === "all") {

    todoItems.forEach(function(item) {
      item.classList.remove("d-none");
    });
  } else if(filter === "completed") {
    todoItems.forEach(function(item) {
      if(item.classList.contains("completed")) {
        item.classList.remove("d-none");
      } else {
        item.classList.add("d-none");
      }
    })
  } else {
    todoItems.forEach(function(item) {
      if(!item.classList.contains("completed")) {
        item.classList.remove("d-none");
      } else {
        item.classList.add("d-none");
      }
    })
  }

  updateFilterClass(filter);
}

function updateFilterClass(filtWord) {
  filterWords.forEach(function(filterSpan) {
    if(filterSpan.innerText.toLowerCase() === filtWord) {
      filterSpan.classList.add("active-filter");
    } else {
      filterSpan.classList.remove("active-filter");
    }
  })
}

module.exports = {
	updateTodos
};