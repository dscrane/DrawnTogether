/* IMPORTS */
import React from "react";
import { spline } from "@georgedoescode/spline";
/* ------ */

const Blob = ({ players, canvasDisplay }) => {
  let blobPoints = "";
  const { xAxisCenter, yAxisCenter } = canvasDisplay.grid;

  const createBlobPoints = ({ radian, radius, degree, xCartesian, yCartesian }) => {
    let blobX, blobY;
    const theta = degree * (Math.PI / 180);

    if (xCartesian < xAxisCenter && yCartesian < yAxisCenter) {
      // circle in upper left quadrant
      blobX = xAxisCenter + radian * 1.25 * -Math.cos(theta);
      blobY = yAxisCenter + radian * 1.25 * Math.sin(theta);
    } else if (xCartesian > xAxisCenter && yCartesian < yAxisCenter) {
      // circle in upper right quadrant
      blobX = xAxisCenter + radian * 1.25 * -Math.cos(theta);
      blobY = yAxisCenter + radian * 1.25 * Math.sin(theta);
    } else if (xCartesian < xAxisCenter && yCartesian > yAxisCenter) {
      // circle in lower left quadrant
      blobX = xAxisCenter + radian * 1.25 * -Math.cos(theta);
      blobY = yAxisCenter + radian * 1.25 * Math.sin(theta);
    } else if (xCartesian > xAxisCenter && yCartesian > yAxisCenter) {
      // circle in lower right quadrant
      blobX = xAxisCenter + radian * 1.25 * -Math.cos(theta);
      blobY = yAxisCenter + radian * 1.25 * Math.sin(theta);
    }

    return `${Math.round(blobX)},${Math.round(blobY)} `;
  };

  Object.keys(players).forEach((player) => {
    console.log(
      players[player].circle.xCartesian,
      players[player].circle.yCartesian,
      players[player].circle.initial.xCartesian,
      players[player].circle.initial.yCartesian
    );
    blobPoints =
      blobPoints + createBlobPoints(players[player].circle) + createBlobPoints(players[player].circle.initial);
  });

  console.log(blobPoints);
  // .sort((a, b) => a.x - b.x));
  // .sort((a, b) => a.y - b.y));
  //.sort((a, b) => a.x + a.y - (b.x + b.y))
  // const blobPath = spline(blobPoints, 1, true);

  return <polygon points={blobPoints} />;
};

export default Blob;
