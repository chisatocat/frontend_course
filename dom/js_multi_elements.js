const listItems = document.querySelectorAll(".item");

// console.log(listItems);

console.log(listItems[0].innerText);
listItems[1].style.color = "red";

listItems.forEach((item, index) => {
  switch (index) {
    case 0:
      item.remove();
      break;
    case 1:
      item.remove();
      break;
  }
});

// return HTMLCollections
const listItem2 = document.getElementsByClassName("item");
console.log(listItem2);

console.log(listItem2[1].innerText);

const listItemsArray = Array.from(listItem2);
console.log(listItemsArray);

const listItem3 = document.getElementsByTagNam("li");
console.log(listItem3);

console.log(listItem3[1].innerText);
