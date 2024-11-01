// locate an element
//console.log(document.getElementById("app-title"));

//get element's attribute
console.log(document.getElementById("app-title").id);
//console.log(document.getElementById("app-title").className);

// suggest using this one for get attribute
//console.log(document.getElementById("app-title").getAttribute("id"));

//update element's attribute

document.getElementById("app-title").title = "Shopping List";
document.getElementById("app-title").setAttribute("class", "shopping");

appClass = document.getElementById("app-title").getAttribute("class");
appClass += " shopping2";

console.log(`appClass ${appClass}`);

document.getElementById("app-title").setAttribute("class", appClass);

document.getElementById("app-title").classList.add("test");
document.getElementById("app-title").classList.add("test2");

// Method 1: Using classList.add()
// Method 2: Using className
// Method 3: Using setAttribute()
//
console.log(document.getElementById("app-title"));

const h1 = document.getElementById("app-title");
h1.textContent = "hello";
h1.innerText = "Bubu";

// seems not a good structure!!!
h1.innerHTML += "<small>Ski shop</small>";

const test = document.querySelector(".test");

test.innerHTML += "<small>Ski shop</small>";

h1.style.color = "blue";
h1.style.backgroundColor = "green";
h1.style.padding = "10px";

// use css selector
console.log(document.querySelector("h1"));
console.log(document.querySelector("#app-title"));
console.log(document.querySelector(".container"));

console.log(document.querySelector("input[type='text']"));
console.log(document.querySelector("li:nth-child(2)").innerText);
console.log(document.querySelector("li:nth-child(2)").textContent);

// not good, will replace all existing contentß
const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Apple Juice";

const list = document.querySelector("ul");

console.log(list);

const firstItem = list.querySelector("li");
firstItem.style.color = "blue";
