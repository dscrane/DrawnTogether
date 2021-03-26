import React from "react";

/**
 * Creates a updated SVG for a playerCircle when it is altered
 * @function createCircleSVG
 * @param {Object} playerCircle -- Player circle object
 * @param {Object} centerPoint -- display grid's center position along x and y axis
 * @param {number} currentPlayerId -- Id of the current player
 * @param {number} currentForm -- Number of the current form being answered
 * @param {string|null} nature -- Value of nature variable (only needed for case 6)
 * @returns {JSX.Element} <svg />
 * */
export function createCircleSVG(playerCircle, centerPoint, currentPlayerId, currentForm, nature = null) {
  switch (currentForm) {
    // Handles the initial circle display
    case 3:
      return (
        <>
          <defs>
            {createRadialGradient(
              playerCircle.hue,
              playerCircle.saturation,
              playerCircle.lightness,
              currentPlayerId,
              centerPoint,
              currentForm
            )}
            {createCirclePath(
              playerCircle.xCartesian,
              playerCircle.yCartesian,
              playerCircle.radius,
              currentPlayerId,
              centerPoint
            )}
          </defs>
          <circle
            id={`circle_${currentPlayerId}`}
            key={`circle_${currentPlayerId}`}
            cx={0}
            cy={0}
            r={playerCircle.radius}
            style={{
              fill: `url(#radialGradient${currentPlayerId})`,
              opacity: 1,
              fillRule: "evenodd",
              stroke: "none",
              strokeLinecap: "round",
            }}
          >
            <animateMotion dur="10s" repeatCount="indefinite">
              <mpath href={`#animationPath${currentPlayerId}`} />
            </animateMotion>
          </circle>
        </>
      );
    // Handles CA#1 -- radius
    case 4:
      return (
        <>
          <defs>
            {createRadialGradient(
              playerCircle.hue,
              playerCircle.saturation,
              playerCircle.lightness,
              currentPlayerId,
              centerPoint,
              currentForm
            )}
            {createCirclePath(
              playerCircle.xCartesian,
              playerCircle.yCartesian,
              playerCircle.altRadius,
              currentPlayerId,
              centerPoint
            )}
          </defs>
          <circle
            id={`circle_${currentPlayerId}`}
            key={`circle_${currentPlayerId}`}
            cx={0}
            cy={0}
            r={playerCircle.altRadius}
            style={{
              fill: `url(#radialGradient${currentPlayerId})`,
              opacity: 1,
              fillRule: "evenodd",
              stroke: "none",
              strokeLinecap: "round",
            }}
          >
            <animateMotion dur="10s" repeatCount="indefinite">
              <mpath href={`#animationPath${currentPlayerId}`} />
            </animateMotion>
          </circle>
        </>
      );
    // Handles CA#2 -- position
    case 5:
      return (
        <>
          <defs>
            {createRadialGradient(
              playerCircle.hue,
              playerCircle.saturation,
              playerCircle.lightness,
              currentPlayerId,
              centerPoint
            )}
            {createCirclePath(
              playerCircle.altXCartesian,
              playerCircle.altYCartesian,
              playerCircle.altRadius,
              currentPlayerId,
              centerPoint
            )}
          </defs>
          <circle
            id={`circle_${currentPlayerId}`}
            key={`circle_${currentPlayerId}`}
            cx={0}
            cy={0}
            r={playerCircle.altRadius}
            style={{
              fill: `url(#radialGradient${currentPlayerId})`,
              opacity: 1,
              fillRule: "evenodd",
              stroke: "none",
              strokeLinecap: "round",
            }}
          >
            <animateMotion dur="10s" repeatCount="indefinite">
              <mpath href={`#animationPath${currentPlayerId}`} />
            </animateMotion>
          </circle>
        </>
      );
    // Handles CA#3 -- design and color
    case 6:
      return (
        <>
          <defs>
            {createRadialGradient(
              playerCircle.hue,
              playerCircle.saturation,
              playerCircle.lightness,
              currentPlayerId,
              centerPoint
            )}
            {createCirclePath(
              playerCircle.altXCartesian,
              playerCircle.altYCartesian,
              playerCircle.altRadius,
              currentPlayerId,
              centerPoint
            )}
          </defs>
          {createCircleDesign(nature, playerCircle, currentPlayerId, centerPoint, currentForm)}
        </>
      );
    // Handles CA#4 -- animation path
    case 7:
      return (
        <>
          <defs>
            {createRadialGradient(
              playerCircle.hue,
              playerCircle.saturation,
              playerCircle.lightness,
              currentPlayerId,
              centerPoint
            )}
            {altCirclePath(
              playerCircle.altXCartesian,
              playerCircle.altYCartesian,
              playerCircle.altRadius,
              currentPlayerId,
              centerPoint
            )}
          </defs>
          <use href={`#animationPath${currentPlayerId}`} fill="red" />
          {createCircleDesign(nature, playerCircle, currentPlayerId, centerPoint, currentForm)}
        </>
      );
    // Handles CA#5 -- average color
    case 8:
      return (
        <>
          <defs>
            {createRadialGradient(
              playerCircle.averageHue,
              playerCircle.averageSaturation,
              playerCircle.averageLightness,
              currentPlayerId,
              centerPoint
            )}
            {altCirclePath(
              playerCircle.altXCartesian,
              playerCircle.altYCartesian,
              playerCircle.altRadius,
              currentPlayerId,
              centerPoint
            )}
          </defs>
          <use href={`#animationPath${currentPlayerId}`} fill="red" />
          {createCircleDesign(nature, playerCircle, currentPlayerId, centerPoint, currentForm)}
        </>
      );
    // Handles CA#6 -- final display
    case 9:
      return <></>;
    // Default case indicated error in Switch functionality
    default:
      console.info("%c[ERROR]: Switch - createCircleDisplay", "color: red");
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
export function createRadialGradient(hue, saturation, lightness, id, centerPoint) {
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
export function createCirclePath(x, y, r, id, centerPoint) {
  return (
    <path
      id={`animationPath${id}`}
      d={`m${x},${y} L${centerPoint.x},${centerPoint.y} ${x},${y}`}
      stroke="red"
      strokeWidth="2px"
    />
  );
}

/**
 * Creates the complex SVG design for each playerCircle
 * @param {string|null} nature -- Value of nature variable (only needed for case 6)
 * @param {Object} playerCircle -- Player circle object
 * @param {number} currentPlayerId -- Id of the current player
 * @param {Object} centerPoint -- display grid's center position along x and y axis
 * @param {number} currentForm -- Number of the current form being answered
 * @returns {JSX.Element}
 */
export function createCircleDesign(nature, playerCircle, currentPlayerId, centerPoint, currentForm) {
  switch (nature) {
    case "hollow":
      return createHollowCircle(playerCircle, currentPlayerId, centerPoint, currentForm);
    case "stroke":
      return createStrokeCircle(playerCircle, currentPlayerId, centerPoint, currentForm);
    case "ring":
      return createRingCircle(playerCircle, currentPlayerId, centerPoint, currentForm);
    case "dot":
      return createDotCircle(playerCircle, currentPlayerId, centerPoint, currentForm);
    default:
      console.info("%c[ERROR]: Switch - circle design creation", "color: red");
  }
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
 * Creates the initial position for playerCircle
 * @function setPlayerDegree
 * @param {string} interest -- Current player's interest value
 * @param {number} gender -- Current player's gender value
 * @param {string} diet -- Current player's diet value
 * @returns {{slice: number, degree: number}} playerCircle's positional values
 */
export function setPlayerDegree(interest, gender, diet) {
  let degree;
  if (!interest || !gender || !diet) {
    return { degree: 0, slice: 0 };
  }
  const slice = Math.floor(Math.random() * 9) + parseInt(interest);
  switch (diet) {
    case "carnivore":
      if (gender === 0) {
        degree = slice;
      } else if (gender % 2 === 0) {
        degree = 136 + slice;
      } else {
        degree = slice;
      }
      break;
    case "vegetarian":
      if (gender === 0) {
        degree = 181 + slice;
      } else if (gender % 2 === 0) {
        degree = 316 + slice;
      } else {
        degree = 181 + slice;
      }
      break;
    case "pescatarian":
      if (gender === 0) {
        degree = 226 + slice;
      } else if (gender % 2 === 0) {
        degree = 226 + slice;
      } else {
        degree = 91 + slice;
      }
      break;
    case "vegan":
      if (gender === 0) {
        degree = 46 + slice;
      } else if (gender % 2 === 0) {
        degree = 46 + slice;
      } else {
        degree = 271 + slice;
      }
      break;
    default:
      console.log("there was an error with the Diet switch");
      break;
  }

  return { degree, slice };
}

/**
 * Creates the initial color for playerCircle
 * @function createFillColor
 * @param {number} height -- Current player's height value
 * @param {number} degree -- Current player's circle position in degrees
 * @returns {{saturation: number, color: string, lightness: number, hue: number}} Components to create hsl() color and complete hsl() string
 */
export function createFillColor(height, degree) {
  if (!height) {
    return { hue: 0, lightness: 0, saturation: 0, color: "" };
  }
  const hue = degree;
  const lightness = Math.floor(Math.random() * height) + 25;
  const saturation = 100 - (Math.floor(Math.random() * height) + 25);

  const color = `hsl(${hue},${lightness}%,${saturation}%)`;
  return { hue, lightness, saturation, color };
}

/**
 * Converts initial player position to cartesian points for plotting
 * @function convertToCartesian
 * @param {Object} centerPoint -- display grid's center position along x and y axis
 * @param {number} age -- Current player's age value
 * @param {number} degree -- Current player's circle position in degrees
 * @param {number} ringSpacing -- proportional positioning of the circles
 * @returns {{yCartesian: number, xCartesian: number}} Cartesian coordinates for current player's circle on grid
 */
export function convertToCartesian(centerPoint, age, degree, ringSpacing) {
  if (!age) {
    return { xCartesian: 0, yCartesian: 0 };
  }
  const radian = age; //initialXLocation();
  const theta = degree * (Math.PI / 180); //initialYLocation();

  let xCartesian = centerPoint.x + Math.round(radian * -Math.cos(theta));
  let yCartesian = centerPoint.y + Math.round(radian * Math.sin(theta));

  return { xCartesian, yCartesian };
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
  let altRadius = radius;
  const timeShift = radius * (time / 100);
  time % 2 === 0 ? (radius += timeShift) : (radius -= timeShift);
  const personalityShift = radius * (personality / 100);
  personality % 2 === 0 ? (altRadius += personalityShift) : (altRadius -= personalityShift);

  return altRadius;
}

/**
 * Creates alternate position for playerCircle
 * @function altCartesian
 * @param {Object} centerPoint -- display grid's center position along x and y axis
 * @param {number} degree -- Current player's circle position in degrees
 * @param {number} radian -- Current player's circle radian
 * @param {number} food -- Current player's food value
 * @param {number} hair -- Current player's hair value
 * @returns {{altYCartesian: {number}, altXCartesian: {number}, altDegree: {number}}} Alternate cartesian coordinates for current player's circle on grid
 */
export function altCartesian(centerPoint, degree, radian, food, hair) {
  const shiftDegree = food * hair;
  const altDegree = degree + shiftDegree;
  const theta = altDegree * (Math.PI / 180);

  return {
    altDegree,
    altXCartesian: centerPoint.x + Math.round(radian * -Math.cos(theta)),
    altYCartesian: centerPoint.y + Math.round(radian * Math.sin(theta)),
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
      return radius * 0.2;
    case "thick":
      return radius * 0.15;
    case "thin":
      return radius * 0.08;
    case "thinner":
      return radius * 0.02;
    default:
      console.info("%c[ERROR]: Switch - createAlternateDesignVariables", "color: red");
  }
}

/**
 * Creates secondary color for playerCircle
 * @function createSecondaryColor
 * @param {string} progress -- Current player's progress value
 * @param {number} hue -- Current player's circle hue
 * @param {number} saturation -- Current player's circle saturation
 * @param {number} lightness -- Current player's circle lightness
 * @returns {{altHue: number, secondaryColor: string}} Secondary color hsl() string and alternate hue value
 */
export function createSecondaryColor(progress, hue, saturation, lightness) {
  let altHue, secondaryColor;
  switch (progress) {
    case "complimentary":
      altHue = hue + 180;
      secondaryColor = `hsl(${altHue},${saturation}%,${lightness}%)`;
      break;
    case "analogous":
      altHue = Math.random() * (hue + 75 - hue - 75) + hue - 75;
      secondaryColor = `hsl(${altHue},${saturation}%,${lightness}%)`;
      break;
    case "triadic":
      altHue = ((hue + 120) * (hue - 120) * hue) / 3;
      secondaryColor = `hsl(${altHue},${saturation}%,${lightness}%)`;
      break;
    case "monochromatic":
      altHue = Math.random() * (hue + 15 - hue - 15) + hue - 15;
      secondaryColor = `hsl(${altHue},${saturation}%,${lightness}%)`;
      break;
    default:
      console.info("%c[ERROR]: Switch - createSecondaryColor", "color: red");
  }
  return { secondaryColor, altHue };
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
export function altCirclePath(x, y, r, id, centerPoint) {
  return (
    <path
      id={`animationPath${id}`}
      d={`m${x},${y} L${centerPoint.x},${centerPoint.y} ${x},${y}`}
      stroke="red"
      strokeWidth="2px"
    />
  );
}

/**
 * Creates an average between playerCircle's fill color and the color chosen by the player
 * @function averageColors
 * @param {string} color -- Current player's color value
 * @param {number} altHue -- Current player's circle alternate hue
 * @param {number} saturation -- Current player's circle saturation
 * @param lightness -- Current player's circle lightness
 * @returns {{averageSaturation: number, averageHue: number, averageLightness: number}} Returns alternate hsl() components
 */
export function averageColors(color, altHue, saturation, lightness) {
  let averageHue, averageSaturation, averageLightness;
  switch (color) {
    case "chartreuse":
      averageHue = (altHue + 90) / 2;
      averageSaturation = (saturation + 100) / 2;
      averageLightness = (lightness + 50) / 2;
      break;
    case "vermilion":
      averageHue = (altHue + 8) / 2;
      averageSaturation = (saturation + 76) / 2;
      averageLightness = (lightness + 58) / 2;
      break;
    case "cobalt":
      averageHue = (altHue + 215) / 2;
      averageSaturation = (saturation + 100) / 2;
      averageLightness = (lightness + 34) / 2;
      break;
    case "teal":
      averageHue = (altHue + 180) / 2;
      averageSaturation = (saturation + 100) / 2;
      averageLightness = (lightness + 25) / 2;
      break;
    case "kellyGreen":
      averageHue = (altHue + 101) / 2;
      averageSaturation = (saturation + 78) / 2;
      averageLightness = (lightness + 41) / 2;
      break;
    case "aubergine":
      averageHue = (altHue + 315) / 2;
      averageSaturation = (saturation + 27) / 2;
      averageLightness = (lightness + 30) / 2;
      break;
    default:
      console.info("%c[ERROR]: Switch - averageColors", "color: red");
  }
  return { averageHue, averageSaturation, averageLightness };
}

/**
 * Creates the hollow circle design
 * @param {Object} playerCircle -- Current player's circle object
 * @param {number} currentPlayerId -- Current player's id number
 * @param {Object} centerPoint -- display grid's center position along x and y axis
 * @param {number} currentForm -- Number of the current form being answered
 * @param {boolean} hasAverageColor -- Indicates if an average color should be used
 * @returns {JSX.Element}
 */
export function createHollowCircle(playerCircle, currentPlayerId, centerPoint, currentForm, hasAverageColor = false) {
  return (
    <>
      <circle
        id={`circle_${currentPlayerId}`}
        key={`circle_${currentPlayerId}`}
        cx={0}
        cy={0}
        r={playerCircle.altRadius - 0.5 * playerCircle.designThickness}
        strokeWidth={playerCircle.designThickness}
        stroke={
          hasAverageColor
            ? `hsl(${playerCircle.averageHue}, ${playerCircle.averageSaturation}%, ${playerCircle.averageLightness}`
            : playerCircle.color
        }
        fill="none"
      >
        <animateMotion dur="10s" repeatCount="indefinite">
          <mpath href={`#animationPath${currentPlayerId}`} />
        </animateMotion>
      </circle>
    </>
  );
}

/**
 * Creates the stroke circle design
 * @param {Object} playerCircle -- Current player's circle object
 * @param {number} currentPlayerId -- Current player's id number
 * @param {Object} centerPoint -- display grid's center position along x and y axis
 * @param {number} currentForm -- Number of the current form being answered
 * @param {boolean} hasAverageColor -- Indicates if an average color should be used
 * @returns {JSX.Element}
 */
export function createStrokeCircle(playerCircle, currentPlayerId, centerPoint, currentForm, hasAverageColor = false) {
  return (
    <>
      <circle
        id={`circle_${currentPlayerId}`}
        key={`circle_${currentPlayerId}`}
        cx={0}
        cy={0}
        r={playerCircle.altRadius - 0.5 * playerCircle.designThickness}
        strokeWidth={playerCircle.designThickness}
        stroke={playerCircle.secondaryColor}
        style={{
          fill: `url(#radialGradient${currentPlayerId})`,
          opacity: 1,
          fillRule: "evenodd",
          strokeLinecap: "round",
        }}
      >
        <animateMotion dur="10s" repeatCount="indefinite">
          <mpath href={`#animationPath${currentPlayerId}`} />
        </animateMotion>
      </circle>
    </>
  );
}

/**
 * Creates the ring circle design
 * @param {Object} playerCircle -- Current player's circle object
 * @param {number} currentPlayerId -- Current player's id number
 * @param {Object} centerPoint -- display grid's center position along x and y axis
 * @param {number} currentForm -- Number of the current form being answered
 * @param {boolean} hasAverageColor -- Indicates if an average color should be used
 * @returns {JSX.Element}
 */
export function createRingCircle(playerCircle, currentPlayerId, centerPoint, currentForm, hasAverageColor = false) {
  return (
    <>
      <circle
        id={`circle_${currentPlayerId}`}
        key={`circle_${currentPlayerId}_inner`}
        cx={0}
        cy={0}
        r={playerCircle.altRadius - 2 * playerCircle.designThickness}
        style={{
          fill: `url(#radialGradient${currentPlayerId})`,
          opacity: 1,
          fillRule: "evenodd",
          strokeLinecap: "round",
        }}
      >
        <animateMotion dur="10s" repeatCount="indefinite">
          <mpath href={`#animationPath${currentPlayerId}`} />
        </animateMotion>
      </circle>
      <circle
        key={`circle_${currentPlayerId}_outer`}
        cx={playerCircle.altXCartesian}
        cy={playerCircle.altYCartesian}
        r={playerCircle.altRadius - 0.5 * playerCircle.designThickness}
        strokeWidth={playerCircle.designThickness}
        stroke={playerCircle.secondaryColor}
        fill="none"
      >
        <animateMotion dur="10s" repeatCount="indefinite">
          <mpath href={`#animationPath${currentPlayerId}`} />
        </animateMotion>
      </circle>
    </>
  );
}

/**
 * Creates the dot circle design
 * @param {Object} playerCircle -- Current player's circle object
 * @param {number} currentPlayerId -- Current player's id number
 * @param {Object} centerPoint -- display grid's center position along x and y axis
 * @param {number} currentForm -- Number of the current form being answered
 * @param {boolean} hasAverageColor -- Indicates if an average color should be used
 * @returns {JSX.Element}
 */
export function createDotCircle(playerCircle, currentPlayerId, centerPoint, currentForm, hasAverageColor = false) {
  return (
    <>
      <circle
        id={`circle_${currentPlayerId}`}
        key={`circle_${currentPlayerId}`}
        cx={0}
        cy={0}
        r={playerCircle.altRadius - 0.5 * playerCircle.designThickness}
        style={{
          fill: playerCircle.secondaryColor,
          opacity: 1,
          fillRule: "evenodd",
          stroke: `url(#radialGradient${currentPlayerId})`,
          strokeWidth: playerCircle.designThickness,
        }}
      >
        <animateMotion dur="10s" repeatCount="indefinite">
          <mpath href={`#animationPath${currentPlayerId}`} />
        </animateMotion>
      </circle>
    </>
  );
}
