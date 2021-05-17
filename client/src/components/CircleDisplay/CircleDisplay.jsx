import React from "react";


const CircleDisplay = ({ session }) => {
  return session.currentForm > 2 ? session.circles.map((circle) => <>{circle}</>) : <></>;
};

export default CircleDisplay;
