import React from "react";
import { useState } from "react";

function NavToggleButton({ className, idName, iconClass, handleToggle }) {
  return (
    <button
      onClick={handleToggle}
      type="button"
      className={className}
      id={idName}
    >
      <i className={iconClass}></i>
    </button>
  );
}

export default NavToggleButton;
