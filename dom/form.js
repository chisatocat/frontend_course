const form = document.getElementById("item-form");

//case 1 simply form submit
function onSubmit(e) {
  //e.preventDefault();
  const item = document.getElementById("item-input").value;
  const priority = document.getElementById("priority-input").value;

  if (item === "" || priority === "0") {
    alert("Please fill out form");
    return;
  }
  console.log("<<<< onSubmit function", item, priority);
}

form.addEventListener("submit", onSubmit);

//case 2 using formData object
function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const item = formData.get("item");
  const priority = formData.get("priority");
  console.log(item, priority);

  const entries = formData.entries();

  console.log(entries);

  for (let entry of entries) {
    console.log(entry[1]);
  }
}

form.addEventListener("submit", onSubmit2);
