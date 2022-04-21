import React from "react";
import { DefaultCircle, DotCircle, HollowCircle, RingCircle, StrokeCircle } from "../lib/circles";

/**
 * Function that draws the player circles
 * @function drawPlayerCircles
 * @param {players[]} players -- Array of player objects
 * @param {number} currentForm -- Current form
 * @return {players[]} Array of player objects with newly created circleSVGs
 */
function rerenderCircles(players, currentForm) {
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
function resizeAllCircles(playerCircles, resizeRatio) {
  // const toResize = ['radius', 'xCartesian', 'yCartesian']
  // console.log("resize all circles");
  // console.log(playerCircles, resizeRatio);
  // playerCircles.forEach(playerCircle => {
  //   console.log(playerCircle)
  //   console.log(playerCircle.props.playerCircle)
  //   for (const circleData in playerCircle.props.playerCircle) {
  //     console.log(`${circleData}: ${playerCircle.props.playerCircle[circleData]}`)
  //     if (toResize.includes(circleData)) {
  //       playerCircle[circleData] = playerCircle[circleData] * resizeRatio
  //     }
  //   }
  //
  // })
  // for (const circle of playerCircles) {
  //   const playerCircleData = playerCircles[circle];
  //   for (const data of playerCircleData) {
  //     playerCircleData[data] = playerCircleData[data] * resizeRatio;
  //   }
  // }
  // console.log(playerCircles);
  return playerCircles;
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
function createRadialGradient(id, centerPoint, hue, saturation, lightness, isInit = false, currentForm) {
  const stops = [
    `hsl(${hue}, ${saturation}%, ${lightness * 1.6}%`,
    `hsl(${hue}, ${saturation}%, ${lightness * 1.45}%`,
    `hsl(${hue}, ${saturation}%, ${lightness * 1.3}%`,
    `hsl(${hue}, ${saturation}%, ${lightness * 1.15}%`,
    `hsl(${hue}, ${saturation}%, ${lightness}%`,
  ];
  const offsets = ["0%", "25%", "50%", "75%", "100%"];

  function shuffle() {
    const toMove = stops.splice(0, currentForm - 3);
    return [...stops, ...toMove];
  }

  return (
    <radialGradient id={`radialGradient${id}${isInit ? "_init" : ""}`}>
      {shuffle().map((el, i) => (
        <stop key={`gradient_stop_${i}`} offset={offsets[i]} stopColor={el} stopOpacity={1} />
      ))}
    </radialGradient>
  );
}

/**
 * Creates the linear path for the player's circle
 * @param {number} id -- playerCircle's player id
 * @param {string} linearDPath -- string containing the 'd' path for drawn line
 * @param {Object} lineDesign -- playerCircle's stroke properties
 * @returns {JSX.Element} <path />
 */
function createLinearPath(id, linearDPath, lineDesign) {
  if (lineDesign !== null) {
    return <path id={`linearPath${id}`} className="circle__line" d={linearDPath} style={{ ...lineDesign }} />;
  }
  return <path id={`linearPath${id}`} d={linearDPath} />;
}

/**
 * Creates the animation path for the player's circle
 * @param {number} id -- playerCircle's player id
 * @param {string} animationDPath -- string containing the 'd' path for animation line
 * @returns {JSX.Element} <path />
 */
function createAnimationPath(id, animationDPath) {
  return <path id={`animationPath${id}`} d={animationDPath} />;
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
 * @param {number?} innerRadius
 * @param {number?} outerRadius
 * @returns {{path: string, animation: JSX.Element}}
 */
function createPathAndAnimation(playerCircle, id, innerRadius, outerRadius) {
  let path, innerPath, outerPath, animation;

  if (innerRadius && outerRadius) {
    if (playerCircle.isAnimated) {
      animation = (
        <animateMotion dur="10s" repeatCount="indefinite">
          <mpath href={`#animationPath${id}`} />
        </animateMotion>
      );
      innerPath = circlePathTemplate(0, 0, innerRadius);
      outerPath = circlePathTemplate(0, 0, outerRadius);
    } else if (!playerCircle.isAnimated) {
      animation = null;
      innerPath = circlePathTemplate(playerCircle.xCartesian, playerCircle.yCartesian, innerRadius);
      outerPath = circlePathTemplate(playerCircle.xCartesian, playerCircle.yCartesian, outerRadius);
    }
  } else {
    if (playerCircle.isAnimated) {
      animation = (
        <animateMotion dur="10s" repeatCount="indefinite">
          <mpath href={playerCircle.animationDPath ? `#animationPath${id}` : `#linearPath${id}`} />
        </animateMotion>
      );
      path = circlePathTemplate(0, 0, playerCircle.radius);
    } else {
      animation = null;
      path = circlePathTemplate(playerCircle.xCartesian, playerCircle.yCartesian, playerCircle.radius);
    }
  }
  return { path, innerPath, outerPath, animation };
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
 * @param {Object} circleData -- Player circle object
 * @param {Object} centerPoint -- display grid's center position along x and y axis
 * @returns {JSX.Element}
 */
function createCircleDesign(circleData, centerPoint, currentForm) {
  const { design, playerId } = circleData;
  switch (design) {
    case "initialCircle": {
      return (
        <DefaultCircle
          key={`init_circle_${playerId}`}
          id={playerId}
          playerCircle={circleData}
          centerPoint={centerPoint}
          isInit={true}
        />
      );
    }
    case "defaultCircle":
      return (
        <DefaultCircle
          key={`default_circle_${playerId}`}
          id={playerId}
          playerCircle={circleData}
          centerPoint={centerPoint}
          isInit={false}
          currentForm={currentForm}
        />
      );
    case "hollow":
      return (
        <HollowCircle
          key={`hollow_circle_${playerId}`}
          id={playerId}
          playerCircle={circleData}
          centerPoint={centerPoint}
        />
      );
    case "stroke":
      return (
        <StrokeCircle
          key={`stroke_circle_${playerId}`}
          id={playerId}
          playerCircle={circleData}
          centerPoint={centerPoint}
        />
      );
    case "ring":
      return (
        <RingCircle key={`ring_circle_${playerId}`} id={playerId} playerCircle={circleData} centerPoint={centerPoint} />
      );
    case "dot":
      return (
        <DotCircle key={`dot_circle_${playerId}`} id={playerId} playerCircle={circleData} centerPoint={centerPoint} />
      );
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
  createCircleDesign,
  createAnimationPath,
};
