let output;

output = document.all;
output = document.all[11]; //<form id="item-form></form>"
output = document.all.length;

output = document.documentElement;
output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children;

output = document.doctype; // <!DOCTYPE html>
output = document.domain; // 127.0.0.1
output = document.URL; //http://127.0.0.1:5500/js_temp.html'
output = document.characterSet;
output = document.contentType;

output = document.images;
output = document.images[0].src;
output = document.forms;

console.log(output);
const forms = Array.from(document.forms); //convert to Array
forms.forEach((form) => console.log(form));

output = document.links[0].href;
output = document.links[0].id;
output = document.links[0].className;
output = document.links[0].classList;

output.forEach((list) => console.log(list));

console.log(output);
