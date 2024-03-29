/**
 * Creates the radian the circle is set on based off of players age
 * @function convertToCartesian
 * @param {number} age -- Current player's age value
 * @param {number} radius -- Current player circle's radius
 * @returns {number} Radian set for player circle
 */
export function createRadian(age, radius) {
  const min = radius > age - 20 ? age + radius * 1.25 : age - 20;
  const max = min + 40;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Converts initial player position to cartesian points for plotting
 * @function convertToCartesian
 * @param {Object} centerPoint -- display grid's center position along x and y axis
 * @param {number} age -- Current player's age value
 * @param {number} degree -- Current player's circle position in degrees
 * @returns {{yCartesian: number, xCartesian: number}} Cartesian coordinates for current player's circle on grid
 */
export function convertToCartesian(centerPoint, age, degree) {
  const radian = age; //initialXLocation();
  const theta = degree * (Math.PI / 180); //initialYLocation();

  let xCartesian = centerPoint.x + Math.round(radian * -Math.cos(theta));
  let yCartesian = centerPoint.y + Math.round(radian * Math.sin(theta));

  return { xCartesian: xCartesian, yCartesian: yCartesian };
}

/**
 * Creates alternate position for playerCircle
 * @function altCartesian
 * @param {Object} centerPoint -- display grid's center position along x and y axis
 * @param {number} degree -- Current player's circle position in degrees
 * @param {number} radian -- Current player's circle radian
 * @param {number} food -- Current player's food value
 * @param {number} productivity -- Current player's hair value
 * @returns {{yCartesian: {number}, xCartesian: {number}, degree: {number}}} Alternate cartesian coordinates for current player's circle on grid
 */
export function altCartesian(centerPoint, degree, radian, food, productivity) {
  const shiftDegree = food * productivity;
  const newDegree = degree + shiftDegree;
  const theta = newDegree * (Math.PI / 180);

  return {
    degree: newDegree,
    xCartesian: centerPoint.x + Math.round(radian * -Math.cos(theta)),
    yCartesian: centerPoint.y + Math.round(radian * Math.sin(theta)),
  };
}

/**
 // * Creates the initial position for playerCircle
 * @function setPlayerDegree
 * @param {number} curiosity -- Current player's curiosity value
 * @param {number} hair -- Current player's productivity value
 * @param {string} diet -- Current player's diet value
 * @returns {{slice: number, degree: number}} playerCircle's positional values
 */
export function setPlayerDegree(curiosity, hair, diet) {
  let degree = 0;
  if (curiosity === undefined || hair === undefined || diet === undefined) {
    return { degree: 0, slice: 0 };
  }
  const slice = Math.floor(Math.random() * 9) + curiosity;
  switch (diet) {
    case "omnivore":
      if (hair === 0) {
        degree = slice;
      } else if (hair % 2 === 0) {
        degree = 136 + slice;
      } else {
        degree = slice;
      }
      break;
    case "vegetarian":
      if (hair === 0) {
        degree = 181 + slice;
      } else if (hair % 2 === 0) {
        degree = 316 + slice;
      } else {
        degree = 181 + slice;
      }
      break;
    case "pescatarian":
      if (hair === 0) {
        degree = 226 + slice;
      } else if (hair % 2 === 0) {
        degree = 226 + slice;
      } else {
        degree = 91 + slice;
      }
      break;
    case "vegan":
      if (hair === 0) {
        degree = 46 + slice;
      } else if (hair % 2 === 0) {
        degree = 46 + slice;
      } else {
        degree = 271 + slice;
      }
      break;
    default:
      console.info("%c[ERROR]: Switch - setPlayerDegree", "color: red");
  }

  return { degree, slice };
}

/**
 * Creates initial radius for playerCircle
 * @function setCircleRadius
 * @param {number} association -- Current player's association value
 * @return {number} Initial value for playerCircle's radius
 */
export function setCircleRadius(association) {
  const initRadius = 40;
  const randomness = 10 * (association / 100);
  const min = initRadius - randomness;
  const max = initRadius + randomness;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Creates an alternate radius for playerCircle
 * @function altRadius
 * @param {Number} radius -- Current player's circle radius
 * @param {Number} leaning -- Current player's leaning value
 * @param {Number} personality -- Current player's personality value
 * @returns {number} altRadius - Current player's circle alternate radius
 */
export function altRadius(radius, leaning, personality) {
  const leaningShift = radius * (leaning / 100);
  leaning % 2 === 0 ? (radius += leaningShift) : (radius -= leaningShift);
  const personalityShift = radius * (personality / 100);
  if (personality === 18) {
    Math.floor(Math.random() * 100 + 1) % 2 === 0
      ? (radius += personalityShift)
      : (radius -= personalityShift);
  } else {
    personality % 2 === 0
      ? (radius += personalityShift)
      : (radius -= personalityShift);
  }
  return radius;
}

/**
 * Creates the initial color for playerCircle
 * @function createFillColor
 * @param {number} height -- Current player's height value
 * @param {number} degree -- Current player's circle position in degrees
 * @returns {{hue: number, lightness: number, saturation: number, color: string}} Components to create hsl() color and complete hsl() string
 */
export function createFillColor(height, degree) {
  if (!height) {
    return { hue: 0, lightness: 0, saturation: 0, color: "" };
  }
  const hue = Math.floor(Math.random() * 360);
  const lightness = Math.floor(Math.random() * height) + 25;
  const saturation = 100 - (Math.floor(Math.random() * height) + 25);

  const color = `hsl(${hue},${lightness}%,${saturation}%)`;
  return { hue, lightness, saturation, color };
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
  const randomSaturation = Math.floor(Math.random() * (saturation / 4));
  const randomLightness = Math.floor(Math.random() * (lightness / 4));
  const variation = Math.floor(Math.random() * 15);
  switch (progress) {
    case "complimentary":
      altHue = hue + 180;
      secondaryColor = `hsl(${altHue},${saturation - randomSaturation}%,${
        lightness + randomLightness
      }%)`;
      break;
    case "analogous":
      const analogousRange = Math.floor(Math.random() * 3) * 20;
      altHue = (
        !(hue % 2) ? analogousRange + variation : analogousRange - variation
      ).toFixed(0);
      secondaryColor = `hsl(${altHue},${saturation + randomSaturation}%,${
        lightness - randomLightness
      }%)`;
      break;
    case "triadic":
      const triadicRange = Math.floor(Math.random() * 3) * 120;
      altHue = (
        !(hue % 2) ? triadicRange + variation : triadicRange - variation
      ).toFixed(0);
      secondaryColor = `hsl(${altHue},${saturation - randomSaturation}%,${
        lightness - randomLightness
      }%)`;
      break;
    case "monochromatic":
      altHue = (!(hue % 2) ? hue + variation : hue - variation).toFixed(0);
      secondaryColor = `hsl(${altHue},${saturation + randomSaturation}%,${
        lightness + randomLightness
      }%)`;
      break;
    default:
      console.info("%c[ERROR]: Switch - createSecondaryColor", "color: red");
  }
  return secondaryColor;
}

/**
 * Creates stroke design for playerCircle linear path
 * @param religion -- Current player's religion value
 * @param culture -- Current player's culture value
 * @param color -- Current player's circle color
 * @returns {{strokeWidth: string, strokeLinecap: string, stroke, strokeDasharray: string}|{strokeWidth: string, strokeLinecap: string, stroke}}
 */
export function createLineDesign(religion, culture, color) {
  const { hue, saturation, lightness } = color;
  const strokeColor = `hsla(${
    hue + 90 * culture
  }, ${saturation}%, ${lightness}%, ${1 - culture * 0.15}`;

  switch (religion) {
    case "dotted":
      return {
        strokeDasharray: ".01% .5%",
        strokeLinecap: "round",
        stroke: strokeColor,
        strokeWidth: "3px",
      };
    case "dashed":
      return {
        strokeDasharray: "2% 3%",
        strokeLinecap: "square",
        stroke: strokeColor,
        strokeWidth: "3px",
      };
    case "uneven":
      return {
        strokeDasharray: "2% .5% 1.75%",
        strokeLinecap: "square",
        stroke: strokeColor,
        strokeWidth: "3px",
      };
    case "solid":
      return {
        strokeLinecap: "square",
        stroke: strokeColor,
        strokeWidth: "3px",
      };
    case "round":
      return {
        strokeDasharray: "2% 3.5%",
        strokeLinecap: "round",
        stroke: strokeColor,
        strokeWidth: "3px",
      };
    default:
      console.info("%c[ERROR]: Switch - createLineDesign", "color: red");
  }
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
    hue: averageHue.toFixed(0),
    saturation: averageSaturation.toFixed(0),
    lightness: averageLightness.toFixed(0),
    color: `hsl(${averageHue.toFixed(0)},${averageSaturation.toFixed(
      0
    )}%,${averageLightness.toFixed(0)}%)`,
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
      return radius * 0.45;
    case "thick":
      return radius * 0.35;
    case "thin":
      return radius * 0.22;
    case "thinner":
      return radius * 0.18;
    default:
      console.info(
        "%c[ERROR]: Switch - setAlternateDesignWeight",
        "color: red"
      );
  }
}

/**
 * Sets the linear 'd' path for the SVG element
 * @param {object} centerPoint -- display grid's center position along x and y axis
 * @param {number} xCartesian -- Current player's circle cartesian x coordinate
 * @param {number} yCartesian -- Current player's circle cartesian y coordinate
 * @param {number} degree -- Current player's circle position in degrees
 * @param {number} radian -- Current player's circle radian
 * @param {boolean} alteration -- Whether to randomly set the radian start point
 * @returns {string}
 */
export function createLinearDPath(
  centerPoint,
  xCartesian,
  yCartesian,
  radian,
  degree,
  alteration = false
) {
  const r = alteration ? Math.floor(Math.random() * (radian / 1.75)) : 0;
  const theta = degree * (Math.PI / 180);
  // Get the line starting y point
  const xStartPoint = () =>
    parseFloat((centerPoint.x + r * -Math.cos(theta)).toFixed(1));
  // Get the line starting y point
  const yStartPoint = () =>
    parseFloat((centerPoint.y + r * Math.sin(theta)).toFixed(1));
  return `m${xCartesian},${yCartesian} L${xStartPoint()},${yStartPoint()} ${xCartesian},${yCartesian}`;
}
