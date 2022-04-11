import React, { useState } from "react";
import "./tooltip.css";

export const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div className="tooltip__container" onMouseEnter={showTip} onMouseLeave={hideTip}>
      {/* Wrapping */}
      {props.children}
      {active && <div className={`tooltip__content ${props.direction || ""}`}>{props.content}</div>}
    </div>
  );
};
