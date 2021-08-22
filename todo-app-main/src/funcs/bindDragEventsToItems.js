const Sortable = require("sortablejs").Sortable;

const todoUL = document.getElementsByClassName("todo-ul")[0];

function bindDragEventsToItems() {
  new Sortable(todoUL, {
    animation: 150,
    delay: 450,
    delayOnTouchOnly: true,
    draggable: ".todo-item",
    swapThreshold: 0.5
  });
  /*const items = [].slice.call(document.getElementsByClassName("todo-item"));

  items.forEach(function (item) {
    // eslint-disable-next-line
    item.addEventListener("dragstart", function (e) {
      item.classList.add("dragging");
    });

    // eslint-disable-next-line
    item.addEventListener("dragend", function (e) {
      item.classList.remove("dragging");
    });

    item.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    item.addEventListener("drop", function (e) {
      e.preventDefault();

      const dragging = document.getElementsByClassName("dragging")[0];
      const afterElement = getDragAfterElement(e.clientY);
      if (afterElement == null) {
        todoUL.appendChild(dragging);
      } else {
        todoUL.insertBefore(dragging, afterElement);
      }
    });
  }); */
}

/*
function getDragAfterElement(y) {
  const items = [].slice.call(document.querySelectorAll(".todo-item:not(.dragging)"));

  return items.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const boxOffset = y - box.top - box.height / 2;

      if (boxOffset < 0 && boxOffset > closest.offset) {
        return {
          offset: boxOffset,
          element: child
        };
      } else return closest;
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
*/
module.exports = {
  bindDragEventsToItems
};
