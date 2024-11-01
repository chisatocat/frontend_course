function replaceFirstItem() {
  const firsItem = document.querySelector("li:first-child");
  const li = document.createElement("li");

  li.textContent = "Replace First Li";

  firsItem.replaceWith(li);
}

replaceFirstItem();

function replaceAllITems() {
  const lis = document.querySelectorAll("li");
  lis.forEach((item, index) => {
    item.innerHTML = index === 1 ? "First replaced item" : "Replaced all";
  });
}

function replaceChildHeading() {
  const header = document.querySelector("header");
  const h1 = document.querySelector("header h1");
  const h2 = document.createElement("h4");

  h2.id = "app-title";
  h2.textContent = "Shoppin List";
  header.replaceChild(h2, h1);
}

replaceAllITems();

replaceChildHeading();
