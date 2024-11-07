import React from "react";

import PageLinks from "./PageLinks";
import IconLinks from "./IconLinks";

const Footer = () => {
  const year = new Date().getFullYear(); // Get the current year once

  return (
    <footer className="section footer">
      <PageLinks parentClass="nav-list" itemClass="nav-link" />

      <div className="nav-icons">
        <IconLinks parentClass="nav-icons-list" />
      </div>

      <p>&copy; {year} ABC Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
