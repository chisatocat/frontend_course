import React from "react";
import { iconLinks } from "../data";

function IconLinks({ parentClass }) {
  return (
    <ul className={parentClass}>
      {iconLinks.map((link) => (
        <li key={link.id}>
          <a href={link.href}>
            <i className={link.iconLink}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default IconLinks;
