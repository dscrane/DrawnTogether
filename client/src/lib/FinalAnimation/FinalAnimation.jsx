/* IMPORTS */
import React from "react";
/* ------ */

export const FinalAnimation = ({ cxFrom, cxTo, cyFrom, cyTo, rFrom, rTo }) => {
  return (
    <>
      <animate begin="15s" attributeName="cx" from={cxFrom} to={cxTo} dur="5s" repeatCount="1" />
      <animate begin="15s" attributeName="cy" from={cyFrom} to={cyTo} dur="5s" repeatCount="1" />
      <animate begin="15s" attributeName="r" from={rFrom} to={rTo} dur="5s" repeatCount="1" />
    </>
  );
};
