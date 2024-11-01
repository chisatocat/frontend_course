const clearBtn = document.querySelector("#clear");

// old method
// clearBtn.onclick = () => {
//   alert("clear all");
// };

// common method, can add more than one event, event will not
// block other process / function
// clearBtn.addEventListener("click", () => {
//   alert("clear all");
// });

// clearBtn.addEventListener("click", () => {
//   console.log("Clear all");
// });

function onClear() {
  const itemList = document.querySelector("ul");

  // second son will become first son on new iteration
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

clearBtn.addEventListener("click", onClear);

setTimeout(() => {
  () => clearBtn.addEventListener("click", onClear);
});
