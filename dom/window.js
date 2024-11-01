// on page load

document.querySelector("h1").textContent = "Hello World";

window.onload = function () {
  document.querySelector("h1").textContent = "Hello World";
  console.log("window loaded");
};

window.addEventListener("load", function () {
  console.log("page loaded");
});

window.addEventListener("DOMContentLoaded", function () {
  console.log("dom loaded");
});

window.addEventListener("resize", function () {
  document.querySelector(
    "h1"
  ).textContent = `Resized to ${window.innerWidth} x ${window.innerHeight};`;
});

window.addEventListener("scroll", function () {
  document.querySelector(
    "h1"
  ).textContent = `Scrolled to ${window.scrollX} x ${window.scrollY};`;
});

window.addEventListener("focus", function () {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "red";
  });
});

window.addEventListener("blur", function () {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "black";
  });
});
