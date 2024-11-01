function removeItem1() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.remove();
}

// removeItem();

// remove child from parent

function removeFirstItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");
  ul.removeChild(li);
}

removeFirstItem();

function removeItem(itemNumber) {
  const ul = document.querySelector("ul");
  const li = document.querySelector(`li:nth-child(${itemNumber})`);
  ul.removeChild(li);
}

//removeItem(1);

// removeItem(3);

function removeItem2(itemNumber) {
  // case 2 : delete item from parent by indexed

  const ul = document.querySelector("ul");
  const li = document.querySelectorAll("li")[itemNumber - 1];
  ul.removeChild(li);
}

function removeItem3(itemNumber) {
  console.log(itemNumber);
  const li = document.querySelectorAll("li");

  li[itemNumber - 1].remove();
}

function removeItem4(itemNumber) {
  // case 4: delte item direct by element

  document.querySelectorAll("li")[itemNumber - 1].remove();
}

// removeItem2(3);

//removeItem3(3);

removeItem4(3);
