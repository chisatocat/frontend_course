function insertElement() {
  const filter = document.querySelector(".filter");
  const h1 = document.createElement("h1");
  h1.textContent = "insertAdjustElement";

  // apply insertAdjacentElement can only apply once to the same element
  //   filter.insertAdjacentElement("beforebegin", h1);
  filter.insertAdjacentElement("afterbegin", h1);

  const h1clone = h1.cloneNode(true);
  //   filter.insertAdjacentElement("afterend", h1clone);
  filter.insertAdjacentElement("beforeend", h1clone);
}

function insertText() {
  const item = document.querySelector("li:first-child");

  //   item.insertAdjacentText("beforebegin", "AAA");
  //   item.insertAdjacentText("afterend", "BBB");

  item.insertAdjacentText("afterbegin", "AAA");
  item.insertAdjacentText("beforeend", "BBB");
}

function insertHTML() {
  const cleanBtn = document.querySelector("#clear");

  //   cleanBtn.insertAdjacentHTML("beforebegin", "<h2>insertAdjustHTML</h2>");
  //   cleanBtn.insertAdjacentHTML("afterend", "<h2>insertAdjustHTML</h2>");

  cleanBtn.insertAdjacentHTML("afterbegin", "<h2>insertAdjustHTML</h2>");
  cleanBtn.insertAdjacentHTML("beforeend", "<h2>insertAdjustHTML</h2>");
}
function insertBeforeItem() {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");

  li.textContent = "insert Before";

  const thirdItem = document.querySelector("li:nth-child(3)");

  ul.insertBefore(li, thirdItem);
}

function insertAfter(newE, existingE) {
  existingE.parentElement.insertBefore(newE, existingE.nextSibling);
}

insertElement();
insertText();

insertHTML();

insertBeforeItem();

const li = document.createElement("li");
li.textContent = "insertAfter";

const thirdItem = document.querySelector("li:nth-child(4)");

insertAfter(li, thirdItem);
