document
  .querySelector(".nav-mobile__mask")
  .addEventListener("click", function () {
    document.querySelector(".nav-mobile__checkbox").checked = false;
  });

document
  .querySelector(".nav-mobile__checkbox")
  .addEventListener("change", function (e) {
    e.preventDefault();
    document.body.classList.toggle("overflow-hidden");
  });
