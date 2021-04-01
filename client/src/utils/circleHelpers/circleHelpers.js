import React from "react";
import { DefaultCircle, HollowCircle, StrokeCircle, RingCircle, DotCircle } from "../../circles";

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
export function createRadialGradient(id, centerPoint, hue, saturation, lightness) {
  return (
    <radialGradient id={`radialGradient${id}`}>
      <stop offset="10%" stopColor={`hsl(${hue}, ${saturation}%, ${lightness * 1.55}%`} />
      <stop offset="90%" stopColor={`hsl(${hue}, ${saturation}%, ${lightness}%`} />
    </radialGradient>
  );
}

/**
 * Creates the animation path for the player's circle
 * @param {number} x -- playerCircle's x location
 * @param {number} y - playerCircle's y location
 * @param {number} r -- playerCircle's radius
 * @param {number} id -- playerCircle's player id
 * @param {Object} centerPoint -- display grid's center position along x and y axis
 * @returns {JSX.Element} <path />
 */
export function createLinearPath(id, centerPoint, x, y, r) {
  return (
    <path
      id={`linearPath${id}`}
      d={`m${x},${y} L${centerPoint.x},${centerPoint.y} ${x},${y}`}
      stroke="grey"
      strokeWidth="2px"
      style={{ strokeDasharray: "10, 30" }}
    />
  );
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
export function createEssPath(x, y, r, id, centerPoint) {
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
 * Converts initial player position to cartesian points for plotting
 * @function convertToCartesian
 * @param {Object} centerPoint -- display grid's center position along x and y axis
 * @param {number} age -- Current player's age value
 * @param {number} degree -- Current player's circle position in degrees
 * @returns {{init_yCartesian: number, init_xCartesian: number}} Cartesian coordinates for current player's circle on grid
 */
export function convertToCartesian(centerPoint, age, degree) {
  const radian = age; //initialXLocation();
  const theta = degree * (Math.PI / 180); //initialYLocation();

  let init_xCartesian = centerPoint.x + Math.round(radian * -Math.cos(theta));
  let init_yCartesian = centerPoint.y + Math.round(radian * Math.sin(theta));

  return { init_xCartesian, init_yCartesian };
}

/**
 * Creates alternate position for playerCircle
 * @function altCartesian
 * @param {Object} centerPoint -- display grid's center position along x and y axis
 * @param {number} degree -- Current player's circle position in degrees
 * @param {number} radian -- Current player's circle radian
 * @param {number} food -- Current player's food value
 * @param {number} hair -- Current player's hair value
 * @returns {{yCartesian: {number}, xCartesian: {number}, degree: {number}}} Alternate cartesian coordinates for current player's circle on grid
 */
export function altCartesian(centerPoint, degree, radian, food, hair) {
  const shiftDegree = food * hair;
  const newDegree = degree + shiftDegree;
  const theta = newDegree * (Math.PI / 180);

  return {
    degree: newDegree,
    xCartesian: centerPoint.x + Math.round(radian * -Math.cos(theta)),
    yCartesian: centerPoint.y + Math.round(radian * Math.sin(theta)),
  };
}

/**
 * Creates the initial position for playerCircle
 * @function setPlayerDegree
 * @param {string} interest -- Current player's interest value
 * @param {number} gender -- Current player's gender value
 * @param {string} diet -- Current player's diet value
 * @returns {{init_slice: number, init_degree: number}} playerCircle's positional values
 */
export function setPlayerDegree(interest, gender, diet) {
  let init_degree;
  if (!interest || !gender || !diet) {
    return { init_degree: 0, init_slice: 0 };
  }
  const init_slice = Math.floor(Math.random() * 9) + parseInt(interest);
  switch (diet) {
    case "carnivore":
      if (gender === 0) {
        init_degree = init_slice;
      } else if (gender % 2 === 0) {
        init_degree = 136 + init_slice;
      } else {
        init_degree = init_slice;
      }
      break;
    case "vegetarian":
      if (gender === 0) {
        init_degree = 181 + init_slice;
      } else if (gender % 2 === 0) {
        init_degree = 316 + init_slice;
      } else {
        init_degree = 181 + init_slice;
      }
      break;
    case "pescatarian":
      if (gender === 0) {
        init_degree = 226 + init_slice;
      } else if (gender % 2 === 0) {
        init_degree = 226 + init_slice;
      } else {
        init_degree = 91 + init_slice;
      }
      break;
    case "vegan":
      if (gender === 0) {
        init_degree = 46 + init_slice;
      } else if (gender % 2 === 0) {
        init_degree = 46 + init_slice;
      } else {
        init_degree = 271 + init_slice;
      }
      break;
    default:
      console.log("there was an error with the Diet switch");
      break;
  }

  return { init_degree, init_slice };
}

/**
 * Creates initial radius for playerCircle
 * @function setCircleRadius
 * @param {number} association -- Current player's association value
 * @return {number} Initial value for playerCircle's radius
 */
export function setCircleRadius(association) {
  if (!association) {
    return Math.floor(Math.random() * 45) + 10;
  }
  if (association * 10 < 75) {
    return association * 8;
  } else if (association * 2 < 75) {
    return association * 4;
  } else {
    return association * 2;
  }
}

/**
 * Creates an alternate radius for playerCircle
 * @function altRadius
 * @param {number} radius -- Current player's circle radius
 * @param {number} time -- Current player's time value
 * @param {number} personality -- Current player's personality value
 * @returns {number} altRadius - Current player's circle alternate radius
 */
export function altRadius(radius, time, personality) {
  const timeShift = radius * (time / 100);
  time % 2 === 0 ? (radius += timeShift) : (radius -= timeShift);
  const personalityShift = radius * (personality / 100);
  personality % 2 === 0 ? (radius += personalityShift) : (radius -= personalityShift);

  return radius;
}

/**
 * Creates the initial color for playerCircle
 * @function createFillColor
 * @param {number} height -- Current player's height value
 * @param {number} degree -- Current player's circle position in degrees
 * @returns {{init_hue: number, init_lightness: number, init_saturation: number, init_color: string}} Components to create hsl() color and complete hsl() string
 */
export function createFillColor(height, degree) {
  if (!height) {
    return { hue: 0, lightness: 0, saturation: 0, color: "" };
  }
  const init_hue = degree;
  const init_lightness = Math.floor(Math.random() * height) + 25;
  const init_saturation = 100 - (Math.floor(Math.random() * height) + 25);

  const init_color = `hsl(${init_hue},${init_lightness}%,${init_saturation}%)`;
  return { init_hue, init_lightness, init_saturation, init_color };
}

/**
 * Creates secondary color for playerCircle
 * @function createSecondaryColor
 * @param {string} progress -- Current player's progress value
 * @param {number} hue -- Current player's circle hue
 * @param {number} saturation -- Current player's circle saturation
 * @param {number} lightness -- Current player's circle lightness
 * @returns {{hue: number, secondaryColor: string}} Secondary color hsl() string and alternate hue value
 */
export function createSecondaryColor(progress, hue, saturation, lightness) {
  let altHue, secondaryColor;
  const randomSaturation = Math.random() * (saturation / 4);
  const randomLightness = Math.random() * (lightness / 4);
  switch (progress) {
    case "complimentary":
      altHue = hue + 180;
      secondaryColor = `hsl(${altHue},${saturation - randomSaturation}%,${lightness + randomLightness}%)`;
      break;
    case "analogous":
      altHue = Math.random() * (hue + 75 - (hue - 75)) + hue - 75;
      secondaryColor = `hsl(${altHue},${saturation + randomSaturation}%,${lightness - randomLightness}%)`;
      break;
    case "triadic":
      altHue = ((hue + 120) * (hue - 120) * hue) / 3;
      secondaryColor = `hsl(${altHue},${saturation - randomSaturation}%,${lightness - randomLightness}%)`;
      break;
    case "monochromatic":
      altHue = Math.random() * (hue + 15 - (hue - 15)) + hue - 15;
      secondaryColor = `hsl(${altHue},${saturation + randomSaturation}%,${lightness + randomLightness}%)`;
      break;
    default:
      console.info("%c[ERROR]: Switch - createSecondaryColor", "color: red");
  }
  return secondaryColor;
}

/**
 * Creates an average between playerCircle's fill color and the color chosen by the player
 * @function averageColors
 * @param {string} color -- Current player's color value
 * @param {number} hue -- Current player's circle current hue
 * @param {number} saturation -- Current player's circle saturation
 * @param lightness -- Current player's circle lightness
 * @returns {{saturation: number, hue: number, lightness: number}} Returns alternate hsl() components
 */
export function averageColors(color, hue, saturation, lightness) {
  let averageHue, averageSaturation, averageLightness;
  switch (color) {
    case "chartreuse":
      averageHue = (hue + 90) / 2;
      averageSaturation = (saturation + 100) / 2;
      averageLightness = (lightness + 50) / 2;
      break;
    case "vermilion":
      averageHue = (hue + 8) / 2;
      averageSaturation = (saturation + 76) / 2;
      averageLightness = (lightness + 58) / 2;
      break;
    case "cobalt":
      averageHue = (hue + 215) / 2;
      averageSaturation = (saturation + 100) / 2;
      averageLightness = (lightness + 34) / 2;
      break;
    case "teal":
      averageHue = (hue + 180) / 2;
      averageSaturation = (saturation + 100) / 2;
      averageLightness = (lightness + 25) / 2;
      break;
    case "kellyGreen":
      averageHue = (hue + 101) / 2;
      averageSaturation = (saturation + 78) / 2;
      averageLightness = (lightness + 41) / 2;
      break;
    case "aubergine":
      averageHue = (hue + 315) / 2;
      averageSaturation = (saturation + 27) / 2;
      averageLightness = (lightness + 30) / 2;
      break;
    default:
      console.info("%c[ERROR]: Switch - averageColors", "color: red");
  }
  return {
    hue: averageHue,
    saturation: averageSaturation,
    lightness: averageLightness,
    color: `hsl(${averageHue},${averageSaturation}%,${averageLightness}%)`,
  };
}

/**
 * Sets the alternate design weight (thickness) for playerCircle
 * @function createAlternateDesignWeight
 * @param {number} radius -- Current player's circle radius
 * @param {string} media -- Current player's media value
 * @returns {number} Current player's circle design style weight
 */
export function setAlternateDesignWeight(radius, media) {
  switch (media) {
    case "thicker":
      return radius * 0.5;
    case "thick":
      return radius * 0.35;
    case "thin":
      return radius * 0.2;
    case "thinner":
      return radius * 0.5;
    default:
      console.info("%c[ERROR]: Switch - createAlternateDesignVariables", "color: red");
  }
}

/**
 * Creates the complex SVG design for each playerCircle
 * @param {number} currentPlayerId -- Id of the current player
 * @param {Object} playerCircle -- Player circle object
 * @param {Object} centerPoint -- display grid's center position along x and y axis
 * @returns {JSX.Element}
 */
export function createCircleDesign(currentPlayerId, playerCircle, centerPoint) {
  switch (playerCircle.design) {
    case "defaultCircle":
      return <DefaultCircle id={currentPlayerId} playerCircle={playerCircle} centerPoint={centerPoint} />;
    case "hollow":
      return <HollowCircle id={currentPlayerId} playerCircle={playerCircle} centerPoint={centerPoint} />;
    case "stroke":
      return <StrokeCircle id={currentPlayerId} playerCircle={playerCircle} centerPoint={centerPoint} />;
    case "ring":
      return <RingCircle id={currentPlayerId} playerCircle={playerCircle} centerPoint={centerPoint} />;
    case "dot":
      return <DotCircle id={currentPlayerId} playerCircle={playerCircle} centerPoint={centerPoint} />;
    default:
      console.info("%c[ERROR]: Switch - circle design creation", "color: red");
      console.log(playerCircle);
  }
}
