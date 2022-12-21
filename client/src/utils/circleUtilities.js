import React from "react";
import { BasicCircle, LayeredCircle } from "../lib/circles";

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
 * Creates the playerCircle's radial gradient
 * @function createRadialGradient
 * @param {number} hue -- playerCircle's hue
 * @param {number} saturation -- playerCircle's saturation
 * @param {number} lightness -- playerCircle's lightness
 * @param {number} id -- playerCircle's player id
 * @param {boolean} isInit -- is initial circle
 * @param {number} currentForm -- current form value
 * @returns {JSX.Element} <radialGradient />
 * */
function createRadialGradient(id, hue, saturation, lightness, isInit = false, currentForm = 3) {
  const stops = [
    `hsl(${hue}, ${saturation}%, ${lightness * 1.6}%)`,
    `hsl(${hue}, ${saturation}%, ${lightness * 1.45}%)`,
    `hsl(${hue}, ${saturation}%, ${lightness * 1.3}%)`,
    `hsl(${hue}, ${saturation}%, ${lightness * 1.15}%)`,
    `hsl(${hue}, ${saturation}%, ${lightness}%)`,
  ];
  const offsets = ["0%", "25%", "50%", "75%", "100%"];

  function shuffle() {
    if (isInit) {
      return stops;
    }
    const toMove = stops.splice(0, currentForm - 3);
    return [...stops, ...toMove];
  }
  return (
    <radialGradient id={`radialGradient${id}${isInit ? "__init" : ""}`}>
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
 * Creates the complex SVG design for each playerCircle
 * @param {Object} circleData -- Player circle object
 * @param {Object} centerPoint -- display grid's center position along x and y axis
 * @param {number} currentForm -- currentForm value
 * @returns {JSX.Element}
 */
function createCircleDesign(circleData, centerPoint, currentForm) {
  const { design, playerId } = circleData;

  if (design === "defaultCircle" || design === "hollow" || design === "initialCircle") {
    return (
      <BasicCircle
        key={`${design === "hollow" ? "hollow" : "default"}_circle_${playerId}`}
        id={playerId}
        playerCircle={circleData}
        centerPoint={centerPoint}
        isInit={design === "initialCircle"}
        currentForm={currentForm}
      />
    );
  } else {
    return (
      <LayeredCircle
        key={`${circleData.design}_circle_${playerId}`}
        id={playerId}
        playerCircle={circleData}
        centerPoint={centerPoint}
        currentForm={currentForm}
      />
    );
  }
}

/**
 * Creates the playerCircle's secondary radial gradient
 * @function createRadialGradient
 * @param {string} secondaryColor -- playerCircle's secondary color
 * @param {number} design -- playerCircle's design
 * @param {number} designThickness -- playerCircle's designThickness
 * @param {number} id -- playerCircle's player id
 * @param {number} radius -- playerCircle's radius
 * @returns {JSX.Element} <radialGradient />
 * */
function createSecondaryGradient(id, secondaryColor, design, designThickness, radius) {
  const offsets = ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"];
  const offsetsThick = ["0%", "25%", "50%", "75%", "100%"];
  const secondaryLightColor = secondaryColor.replace(/([0-9]*)%\)/g, (match, p0) => {
    return `${parseInt(p0) * 0.5}%)`;
  });

  if (design === "dot") {
    const secondaryLightestColor = secondaryColor.replace(/([0-9]*)%\)/g, (match, p0) => {
      return `${parseInt(p0) * 0.5}%)`;
    });
    return (
      <radialGradient id={`secondaryRadialGradient${id}`}>
        <stop key={`gradient_stop_${0}`} offset="25%" stopColor={secondaryColor} stopOpacity={1} />
        <stop key={`gradient_stop_${50}`} offset="75%" stopColor={secondaryLightColor} stopOpacity={1} />
        <stop key={`gradient_stop_${100}`} offset="100%" stopColor={secondaryLightestColor} stopOpacity={1} />
      </radialGradient>
    );
  }
  if (designThickness / radius > 0.22) {
    return (
      <radialGradient id={`secondaryRadialGradient${id}`} spreadMethod="repeat">
        {offsetsThick.map((el, i) => (
          <stop
            key={`gradient_stop_${i}`}
            offset={el}
            stopColor={i % 2 === 0 ? secondaryColor : secondaryLightColor}
            stopOpacity={1}
          />
        ))}
      </radialGradient>
    );
  }

  return (
    <radialGradient id={`secondaryRadialGradient${id}`} spreadMethod="repeat">
      {offsets.map((el, i) => (
        <stop
          key={`gradient_stop_${i}`}
          offset={el}
          stopColor={i % 2 === 0 ? secondaryColor : secondaryLightColor}
          stopOpacity={1}
        />
      ))}
    </radialGradient>
  );
}

/**
 * Creates the SVG <defs> elements for each circle
 * @param id {string} -- playerId
 * @param playerCircle {object} -- player's circle data
 * @param hasDesign {boolean} -- flag for design circle or not
 * @param isInit {boolean} -- flag for initial circle or not
 * @param currentForm {number} -- current form number
 * @returns {JSX.Element} -- <defs> element
 */
function createSVGDefs(id, playerCircle, hasDesign = true, isInit, currentForm) {
  return (
    <defs>
      {createRadialGradient(id, playerCircle.hue, playerCircle.saturation, playerCircle.lightness, isInit, currentForm)}
      {createAnimationPath(id, playerCircle.animationDPath)}
      // if circle is not initialCircle display line from center
      {!isInit ? createLinearPath(id, playerCircle.linearDPath, playerCircle.lineDesign) : null}
      // if circle has a design create the secondary gradient
      {hasDesign
        ? createSecondaryGradient(
            id,
            playerCircle.secondaryColor,
            playerCircle.design,
            playerCircle.designThickness,
            playerCircle.radius
          )
        : null}
    </defs>
  );
}

/* Export necessary pieces */
export {
  rerenderCircles,
  circlePathTemplate,
  createRadialGradient,
  createLinearPath,
  createCircleDesign,
  createAnimationPath,
  createSecondaryGradient,
  createSVGDefs,
};
