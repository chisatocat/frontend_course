import React from "react";

import PageLinks from "./PageLinks";
import IconLinks from "./IconLinks";
import NavToggleButton from "./NavToggleButton";

function Navbar({ toggleFunction, toggleState }) {
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <a href="#home">
            <img src="/img/logo.svg" alt="logo" />
          </a>
        </div>

        <div className="nav-links">
          <PageLinks
            parentClass={toggleState ? "nav-list active" : "nav-list"}
            itemClass="nav-link"
          />
        </div>

        <div className="nav-icons">
          <IconLinks parentClass="nav-icons-list" />
        </div>

        {/*<!-- moible -->*/}

        <div className="nav-mobile">
          <NavToggleButton
            className="nav-toggle"
            idName="nav-toggle"
            iconClass="fa-solid fa-bars"
            handleToggle={toggleFunction}
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
