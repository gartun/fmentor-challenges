const filterWords = [].slice.call(document.getElementsByClassName("filter"));

function updateTodos(filter) {
  const todoItems = [].slice.call(document.getElementsByClassName("todo-item"));
  const completedTodosLen = document.getElementsByClassName("completed").length;
  const activeTodosLen = todoItems.length - completedTodosLen;

  // if the filter is completed/active and
  // if there's no completed todo, then immediately
  // switch to filter 'all' so UI looks good.
  // for instance; if we don't apply this control flow,
  // when we click on the filter active and then mark an
  // item as completed, the view the client sees is a completed
  // item in an active todos list.
  if (
    (filter === "tamamlanmış" && completedTodosLen === 0) ||
    (filter === "aktif" && activeTodosLen === 0)
  )
    filter = "tümü";

  if (filter === "tümü") {
    todoItems.forEach(function (item) {
      item.classList.remove("d-none");
    });
  } else if (filter === "tamamlanmış") {
    todoItems.forEach(function (item) {
      if (item.classList.contains("completed")) {
        item.classList.remove("d-none");
      } else {
        item.classList.add("d-none");
      }
    });
  } else {
    todoItems.forEach(function (item) {
      if (!item.classList.contains("completed")) {
        item.classList.remove("d-none");
      } else {
        item.classList.add("d-none");
      }
    });
  }

  updateFilterClass(filter);
}

function updateFilterClass(filtWord) {
  filterWords.forEach(function (filterSpan) {
    if (filterSpan.innerText.toLowerCase() === filtWord) {
      filterSpan.classList.add("active-filter");
    } else {
      filterSpan.classList.remove("active-filter");
    }
  });
}

// function translate("")
module.exports = {
  updateTodos
};
