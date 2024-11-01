const listItems = document.querySelectorAll("li");

/* listItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    // event delegation >> parent pass event to child
    e.target.remove();
  });
}); */

// more safe, event delegation
const list = document.querySelector("ul");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "I") e.target.parentElement.parentElement.remove();

  if (e.target.tagName === "BUTTON") e.target.parentElement.remove();

  if (e.target.tagName === "LI") e.target.remove();
});
