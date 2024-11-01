let output;

// get child element from a parent

const parent = document.getElementById("item-form");

console.log(parent);

const children = parent.children;
console.log(children);

console.log(children[1].className);
console.log(children[1].nodeName);
console.log(children[1].localName);

console.log(parent.firstElementChild.innerText);
console.log(parent.lastElementChild.innerText);

// console.log(children[0].nextElementSibling.innerText);
// console.log(children[0].previousElementSibling.innerText);

console.log(parent.parentElement);

parent.parentElement.style.backgroundColor = "lightblue";

const secondItem = document.querySelector(".item:nth-child(2)");
console.log(secondItem);

secondItem.nextElementSibling.style.color = "yellow";
secondItem.previousElementSibling.style.color = "blue";
