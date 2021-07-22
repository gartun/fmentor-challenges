module.exports = function () {
  const completeCheckBoxes = [].slice.call(document.getElementsByClassName("complete-checkbox"));

  const numSpan = document.getElementById("item-left");

  const checkedBoxes = [].slice.call(document.getElementsByClassName("checked"));
  const left = completeCheckBoxes.length - checkedBoxes.length;

  numSpan.innerText = left;
};
