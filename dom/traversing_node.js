let output;

const parent = document.querySelector(".items");
console.log(parent);
output = parent.childNodes;

console.log(output);

output = parent.childNodes;

output = parent.childNodes[0];

output = parent.childNodes[3].outerHTML;
console.log(output);
output = parent.childNodes[3].innerHTML = "hello";
output = parent.childNodes[3].style.color = "blue";

output = parent.childNodes[3].outerHTML = "<!-- Comment -->";
output = parent.childNodes[3].innerHTML = "comment";

console.log(parent.childNodes[3]);

output = parent.childNodes[3].nextSibling.nextSibling;
output = parent.childNodes[3].nextSibling.parentNode;

console.log(output);
