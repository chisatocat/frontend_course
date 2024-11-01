const itemInput = document.getElementById("item-input");

// a simple keypress
const onKeyPress = (e) => {
  console.log("keypress");
};

// itemInput.addEventListener("keypress", onKeyPress);

//b. on keydown
const onKeyDown = (e) => {
  console.log("onKeyDown:" + e.key);

  if (e.key === "Enter") {
    alert("enter key:" + e.key + "/" + e.keyCode);
  }

  if (e.repeat) {
    console.log("you are holding down" + e.key);
  }

  // when you press shift, k should be Capital letter unless caplock
  if (e.shiftKey && e.key === "K") {
    alert("you press shift and K");
  }
};

itemInput.addEventListener("keydown", onKeyDown);

//b. on keyup
const onKeyUp = (e) => {
  console.log("onKeyUp");
};

// itemInput.addEventListener("keyup", onKeyUp);
