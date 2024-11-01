const button = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(1)");
const form = document.querySelector("form");

button.addEventListener("click", function (e) {
  alert("button clicked." + e.target);

  e.stopPropagation();
});

div.addEventListener("click", function (e) {
  alert("div clicked." + e.target);
});

form.addEventListener("click", function (e) {
  alert("form clicked." + e.target);
});

document.addEventListener("click", function (e) {
  alert("document clicked." + e.target);
  console.log("DOC:" + e.target);
});
