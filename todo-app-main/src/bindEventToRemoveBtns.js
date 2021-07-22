const removeItem = require("./removeItem");

module.exports = function () {
  const rmvBtns = [].slice.call(document.getElementsByClassName("rmv-btn"));

  rmvBtns.forEach(function (rmvBtn) {
    rmvBtn.addEventListener("click", function () {
      removeItem(rmvBtn.parentElement);
    });
  });
};
