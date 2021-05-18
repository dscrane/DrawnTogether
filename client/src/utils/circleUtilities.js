import React from "react";
import {DefaultCircle, DotCircle, HollowCircle, RingCircle, StrokeCircle} from "../lib/circles";

/**
 * Function that draws the player circles
 * @function drawPlayerCircles
 * @param {players[]} players -- Array of player objects
 * @param {number} currentForm -- Current form
 * @return {players[]} Array of player objects with newly created circleSVGs
 */
function rerenderCircles(players, currentForm) {
  console.log("rerender ran", currentForm);
  if (currentForm <= 7) {
    return Object.keys(players).map((playerKey) => {
      return players[playerKey].circleSVG;
    });
  }
  const allCircles = [];
  players.forEach((player) => {
    allCircles.push(player.circleSVG, player.initialCircleSVG);
  });
  console.log(allCircles);
  return allCircles;
}

/**
 * Alter the size of the circles if the browser window resizes
 * @param {object} players
 * @param {object} display
 */
function resizeAllCircles(players, display) {
  console.log("resize all circles");
  console.log(players, display);
  for (const player of players) {
    const playerCircleData = players[player].circleData;
    for (const data of playerCircleData) {
      playerCircleData[data] = playerCircleData[data] * display.multiplier;
    }
  }
}

/**
 * Creates the playerCircle's radial gradient
 * @function createRadialGradient
 * @param {number} hue -- playerCircle's hue
 * @param {number} saturation -- playerCircle's saturation
 * @param {number} lightness -- playerCircle's lightness
 * @param {number} id -- playerCircle's player id
 * @param {Object} centerPoint -- display grid's center position along x and y axis
 * @returns {JSX.Element} <radialGradient />
 * */
function createRadialGradient(id, centerPoint, hue, saturation, lightness) {
  return (
    <radialGradient id={`radialGradient${id}`}>
      <stop offset="0%" stopColor={`hsl(${hue}, ${saturation}%, ${lightness * 1.60}%`} stopOpacity={1} />
      <stop offset="25%" stopColor={`hsl(${hue}, ${saturation}%, ${lightness * 1.45}%`} stopOpacity={1} />
      <stop offset="50%" stopColor={`hsl(${hue}, ${saturation}%, ${lightness * 1.30}%`} stopOpacity={1} />
      <stop offset="75%" stopColor={`hsl(${hue}, ${saturation}%, ${lightness * 1.15}%`} stopOpacity={1} />
      <stop offset="100%" stopColor={`hsl(${hue}, ${saturation}%, ${lightness}%`} stopOpacity={1} />
    </radialGradient>
  );
}

/**
 * Creates the animation path for the player's circle
 * @param {number} id -- playerCircle's player id
 * @param {Object} centerPoint -- display grid's center position along x and y axis
 * @param {number} x -- playerCircle's x location
 * @param {number} y - playerCircle's y location
 * @param {number} r -- playerCircle's radius
 * @param {Object} lineDesign -- playerCircle's stroke properties
 * @returns {JSX.Element} <path />
 */
function createLinearPath(id, centerPoint, x, y, r, lineDesign) {
  if (lineDesign !== null) {
    return (
      <path
        id={`linearPath${id}`}
        d={`m${x},${y} L${centerPoint.x},${centerPoint.y} ${x},${y}`}
        style={{ ...lineDesign }}
      />
    );
  }

  return <path id={`linearPath${id}`} d={`m${x},${y} L${centerPoint.x},${centerPoint.y} ${x},${y}`} />;
}

/**
 * Creates the circle path based on player's playerCircleData
 * @param cx {number}
 * @param cy {number}
 * @param r {number}
 * @returns {string}
 */
function circlePathTemplate(cx, cy, r) {
  return `M ${cx} ${cy} m -${r}, 0 a ${r},${r} 0 1,0 ${r * 2},0 a ${r},${r} 0 1,0 -${r * 2},0 `;
}

/**
 * Creates the path and adds animation if .isAnimated === true
 * @param {object} playerCircle
 * @param {string} id
 * @returns {{path: string, animation: JSX.Element}}
 */
function createPathAndAnimation(playerCircle, id) {
  let path;
  let animation;

  if (playerCircle.isAnimated) {
    animation = (
      <animateMotion dur="10s" repeatCount="indefinite">
        <mpath href={`#linearPath${id}`} />
      </animateMotion>
    );
    path = circlePathTemplate(0, 0, playerCircle.radius);
  } else {
    animation = null;
    path = circlePathTemplate(playerCircle.xCartesian, playerCircle.yCartesian, playerCircle.radius);
  }

  return { path, animation };
}

/**
 * Alters the animation path for the player's circle
 * @param {number} x -- playerCircle's x location
 * @param {number} y - playerCircle's y location
 * @param {number} r -- playerCircle's radius
 * @param {number} id -- playerCircle's player id
 * @param {Object} centerPoint -- display grid's center position along x and y axis
 * @returns {JSX.Element} <path />
 */
function createEssPath(x, y, r, id, centerPoint) {
  return (
    <path
      id={`essPath${id}`}
      d={`m${x},${y} Q ${1},${1} ${centerPoint.x} ${centerPoint.y}`}
      stroke="grey"
      strokeWidth="2px"
    />
  );
}

/**
 * Creates the complex SVG design for each playerCircle
 * @param {string} playerId -- Player ID
 * @param {Object} playerCircleData -- Player circle object
 * @param {Object} centerPoint -- display grid's center position along x and y axis
 * @returns {JSX.Element}
 */
function createCircleDesign(playerId, playerCircleData, centerPoint) {
  console.log("[playerCircleData]: ", playerCircleData)

  switch (playerCircleData.design) {
    case "initialCircle": {
      return <DefaultCircle id={playerId} playerCircle={playerCircleData} centerPoint={centerPoint} isInit={true} />;
    }
    case "defaultCircle":
      return (
        <DefaultCircle id={playerId} playerCircle={playerCircleData} centerPoint={centerPoint} isInit={false} />
      );
    case "hollow":
      return <HollowCircle id={playerId} playerCircle={playerCircleData} centerPoint={centerPoint} />;
    case "stroke":
      return <StrokeCircle id={playerId} playerCircle={playerCircleData} centerPoint={centerPoint} />;
    case "ring":
      return <RingCircle id={playerId} playerCircle={playerCircleData} centerPoint={centerPoint} />;
    case "dot":
      return <DotCircle id={playerId} playerCircle={playerCircleData} centerPoint={centerPoint} />;
    default:
      console.info("%c[ERROR]: Switch - createCircleDesign", "color: red");
  }
}


/* Export necessary pieces */
export {
  rerenderCircles,
  resizeAllCircles,
  circlePathTemplate,
  createPathAndAnimation,
  createRadialGradient,
  createLinearPath,
  createEssPath,
  createCircleDesign
};
