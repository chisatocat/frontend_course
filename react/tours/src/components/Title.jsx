import React from "react";

function Title({ main_title, sub_title }) {
  return (
    <div className="section-title mb-3">
      <h2>
        {main_title} <span>{sub_title}</span>
      </h2>
    </div>
  );
}

export default Title;
