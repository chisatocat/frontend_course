const clearBtn = document.querySelector("#clear");

// const onclick = () => {
//   console.log("click event");
// };

// clearBtn.addEventListener("click", onclick);

const onDoubleClick = () => {
  console.log("AAAAA");
  if (document.body.style.backgroundColor !== "purple") {
    document.body.style.backgroundColor = "purple";

    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";

    document.body.style.color = "black";
  }
};

clearBtn.addEventListener("dblclick", onDoubleClick);

const onMouseDown = () => console.log("mouse down");

clearBtn.addEventListener("mousedown", onMouseDown);

const onMouseUp = () => console.log("mouse down");

clearBtn.addEventListener("mouseup", onMouseUp);

const onMouseOver = () => console.log("mouse over");

clearBtn.addEventListener("mouseover", onMouseOver);

const onMouseOut = () => console.log("mouse down");

clearBtn.addEventListener("mouseout", onMouseOut);

const onDragStart = () => console.log("drag  start");
clearBtn.addEventListener("dragstart", onDragStart);

const onDrag = () => console.log("drag");
clearBtn.addEventListener("drag", onDrag);

const onDragEnd = () => console.log("drag end");
clearBtn.addEventListener("dragend", onDragEnd);
