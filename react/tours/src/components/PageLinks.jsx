import React from "react";
import { pageLinks } from "../data";

function PageLinks({ parentClass, itemClass }) {
  // console.log("state:" + state);
  return (
    <ul className={parentClass}>
      {pageLinks.map((link) => (
        <li key={link.id}>
          <a href={link.href} className={itemClass}>
            <i className={link.iconLink}></i>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default PageLinks;
