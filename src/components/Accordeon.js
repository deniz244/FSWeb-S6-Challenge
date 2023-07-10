// re-usable component

import React, { useState } from "react";

/*function handleOpen(e) {
  const acc = e.target.parentNode;
  acc.classList.toggle("open");
}*/

const Accordeon = (props) => {
  const [open, setOpen] = useState(false);
  const { title, children } = props;

  return (
    <div className={`accordeon ${open ? "open" : ""}`}>
      <div className="acc-title" onClick={() => setOpen(!open)}>
        <span className="title">{title}</span>{" "}
        <div className="arrow">{"<"}</div>
      </div>
      {children}
    </div>
  );
};

export default Accordeon;
