import React from "react";

let centerX;
let centerY;

/* === FUNCTIONS EXPORTED FOR PRODUCTION USE === */

/**
 * Function that draws the player circles
 * @function drawPlayerCircles
 * @param {players[]} players -- Array of player objects
 * @return {players[]} Array of player objects with newly created circleSVGs
 */
export function updatePlayerCircles(players) {
  return players.map((player) => {
    return player.circle.circleSVG;
  });
}

/**
 * Circle Initial Creation
 * @function initialCircleVariable
 * @param {object} player -- Current player object
 * @param {object} displayGrid -- Current size of the display grid
 * @param {number} currentPlayerId -- Id of the current player
 * @param {number} currentForm -- Number of the current form being answered
 * @return {{saturation: number, yCartesian: number, color: string, slice: number, xCartesian: number, lightness: number, degree: number, hue: number, radius: number, radian: number}} Updated player circle object
 * */
export function initialCircleVariables(player, displayGrid, currentPlayerId, currentForm) {
  centerX = displayGrid.cx;
  centerY = displayGrid.cy;

  let playerCircle = {
    ...setPlayerDegree(player.interest, player.gender, player.diet),
    radius: setCircleRadius(player.association),
    radian: parseInt(player.age),
  };
  playerCircle = {
    ...playerCircle,
    ...createFillColor(player.height, playerCircle.degree),
    ...convertToCartesian(centerX, centerY, player.age, playerCircle.degree),
  };
  playerCircle.circleSVG = createCircleSVG(playerCircle, currentPlayerId, currentForm);
  return playerCircle;
}

/**
 * Circle Alteration #1
 * @function circleAlterationOne
 * @description Alteration to circle radius
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * @param {number} currentForm -- Number of the current form being answered
 * */
export function circleAlterationOne(player, currentPlayerId, currentForm) {
  const playerCircle = {
    ...player.circle,
    altRadius: altRadius(player.circle.radius, player.time, player.personality),
  };
  playerCircle.circleSVG = createCircleSVG(playerCircle, currentPlayerId, currentForm);
  return playerCircle;
}

/**
 * Circle Alteration #2
 * @function circleAlterationTwo
 * @description Alteration to circle position
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * @param {number} currentForm -- Number of the current form being answered
 * */
export function circleAlterationTwo(player, currentPlayerId, currentForm) {
  const playerCircle = {
    ...player.circle,
    ...altCartesian(centerX, centerY, player.circle.degree, player.circle.radian, player.food, player.hair),
  };
  playerCircle.circleSVG = createCircleSVG(playerCircle, currentPlayerId, currentForm);
  return playerCircle;
}

/**
 * Circle Alteration #3
 * @function circleAlterationThree
 * @description Alteration to circle design and color
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * @param {number} currentForm -- Number of the current form being answered
 * */
export function circleAlterationThree(player, currentPlayerId, currentForm) {
  let playerCircle = player.circle;
  const secondaryColor = createSecondaryColor(
    playerCircle.degree,
    playerCircle.hue,
    playerCircle.saturation,
    playerCircle.lightness,
    player.progress
  );
  playerCircle = {
    ...playerCircle,
    ...secondaryColor,
    designThickness: setAlternateDesignWeight(playerCircle.radius, player.media),
  };
  playerCircle.circleSVG = createCircleSVG(playerCircle, currentPlayerId, currentForm, player.nature);
  return playerCircle;
}

/**
 * Circle Alteration #4
 * @function circleAlterationFour
 * @description Alteration to circle
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * @param {number} currentForm -- Number of the current form being answered
 * */
export function circleAlterationFour(player, currentPlayerId, currentForm) {}

/**
 * Circle Alteration #5
 * @function circleAlterationFive
 * @description Alteration to circle color
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * @param {number} currentForm -- Number of the current form being answered
 * */
export function circleAlterationFive(player, currentPlayerId, currentForm) {
  let playerCircle = player.circle;
  playerCircle = {
    ...playerCircle,
    ...averageColors(player.color, playerCircle.altHue, playerCircle.saturation, playerCircle.lightness),
  };
  playerCircle.circleSVG = createCircleSVG(playerCircle, currentPlayerId, currentForm);
}

/**
 * Circle Alteration #6
 * @function circleAlterationSix
 * @description Alteration to circle
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * @param {number} currentForm -- Number of the current form being answered
 * */
export function finalCircleDisplay(player, currentPlayerId, currentForm) {}

/* === END FUNCTIONS EXPORTED FOR PRODUCTION PURPOSES === */

/* =================================================== */

/* === FUNCTIONS EXPORTED FOR TESTING PURPOSES === */

/**
 * Creates a new playerCircle SVG after each alteration
 * @function createCircleSVG
 * @param {Object} playerCircle -- Player circle object
 * @param {number} currentPlayerId -- Id of the current player
 * @param {number} currentForm -- Number of the current form being answered
 * @param {string|null} nature -- Value of nature variable (only needed for case 6)
 * @returns {JSX.Element} <svg />
 * */
export function createCircleSVG(playerCircle, currentPlayerId, currentForm, nature = null) {
  switch (currentForm) {
    // Handles the initial circle display
    case 3:
      return (
        <>
          {createGradient(
            playerCircle.xCartesian,
            playerCircle.yCartesian,
            playerCircle.radius,
            playerCircle.hue,
            playerCircle.saturation,
            playerCircle.lightness,
            currentPlayerId
          )}
          <circle
            key={`circle_${currentPlayerId}`}
            cx={playerCircle.xCartesian}
            cy={playerCircle.yCartesian}
            r={playerCircle.radius}
            style={{
              fill: `url(#radialGradient${currentPlayerId})`,
              opacity: 1,
              fillRule: "evenodd",
              stroke: "none",
              strokeLinecap: "round",
            }}
          />
        </>
      );
    // Handles the first circle alteration display
    case 4:
      return (
        <>
          {createGradient(
            playerCircle.xCartesian,
            playerCircle.yCartesian,
            playerCircle.altRadius,
            playerCircle.hue,
            playerCircle.saturation,
            playerCircle.lightness,
            currentPlayerId
          )}
          <circle
            key={`circle_${currentPlayerId}`}
            cx={playerCircle.xCartesian}
            cy={playerCircle.yCartesian}
            r={playerCircle.altRadius}
            style={{
              fill: `url(#radialGradient${currentPlayerId})`,
              opacity: 1,
              fillRule: "evenodd",
              stroke: "none",
              strokeLinecap: "round",
            }}
          />
        </>
      );
    // Handles the second circle alteration display
    case 5:
      return (
        <>
          {createGradient(
            playerCircle.altXCartesian,
            playerCircle.altYCartesian,
            playerCircle.altRadius,
            playerCircle.hue,
            playerCircle.saturation,
            playerCircle.lightness,
            currentPlayerId
          )}
          <circle
            key={`circle_${currentPlayerId}`}
            cx={playerCircle.altXCartesian}
            cy={playerCircle.altYCartesian}
            r={playerCircle.altRadius}
            style={{
              fill: `url(#radialGradient${currentPlayerId})`,
              opacity: 1,
              fillRule: "evenodd",
              stroke: "none",
              strokeLinecap: "round",
            }}
          />
        </>
      );
    // Handles the third circle alteration display
    case 6:
      switch (nature) {
        case "hollow":
          return (
            <>
              {createGradient(
                playerCircle.altXCartesian,
                playerCircle.altYCartesian,
                playerCircle.altRadius,
                playerCircle.hue,
                playerCircle.saturation,
                playerCircle.lightness,
                currentPlayerId
              )}
              <circle
                key={`circle_${currentPlayerId}`}
                cx={playerCircle.altXCartesian}
                cy={playerCircle.altYCartesian}
                r={playerCircle.altRadius - 0.5 * playerCircle.designThickness}
                strokeWidth={playerCircle.designThickness}
                stroke={playerCircle.fillColor}
                fill="none"
              />
            </>
          );
        case "stroke":
          return (
            <>
              {createGradient(
                playerCircle.altXCartesian,
                playerCircle.altYCartesian,
                playerCircle.altRadius,
                playerCircle.hue,
                playerCircle.saturation,
                playerCircle.lightness,
                currentPlayerId
              )}
              <circle
                key={`circle_${currentPlayerId}`}
                cx={playerCircle.altXCartesian}
                cy={playerCircle.altYCartesian}
                r={playerCircle.altRadius - 0.5 * playerCircle.designThickness}
                strokeWidth={playerCircle.designThickness}
                stroke={playerCircle.secondaryColor}
                style={{
                  fill: `url(#radialGradient${currentPlayerId})`,
                  opacity: 1,
                  fillRule: "evenodd",
                  strokeLinecap: "round",
                }}
              />
            </>
          );
        case "ring":
          return (
            <>
              {createGradient(
                playerCircle.altXCartesian,
                playerCircle.altYCartesian,
                playerCircle.altRadius,
                playerCircle.hue,
                playerCircle.saturation,
                playerCircle.lightness,
                currentPlayerId
              )}
              <circle
                key={`circle_${currentPlayerId}_inner`}
                cx={playerCircle.altXCartesian}
                cy={playerCircle.altYCartesian}
                r={playerCircle.altRadius - 2 * playerCircle.designThickness}
                style={{
                  fill: `url(#radialGradient${currentPlayerId})`,
                  opacity: 1,
                  fillRule: "evenodd",
                  strokeLinecap: "round",
                }}
              />
              <circle
                key={`circle_${currentPlayerId}_outer`}
                cx={playerCircle.altXCartesian}
                cy={playerCircle.altYCartesian}
                r={playerCircle.altRadius - 0.5 * playerCircle.designThickness}
                strokeWidth={playerCircle.designThickness}
                stroke={playerCircle.secondaryColor}
                fill="none"
              />
            </>
          );
        case "dot":
          return (
            <>
              {createGradient(
                playerCircle.altXCartesian,
                playerCircle.altYCartesian,
                playerCircle.altRadius,
                playerCircle.altHue,
                playerCircle.saturation,
                playerCircle.lightness,
                currentPlayerId
              )}
              <circle
                key={`circle_${currentPlayerId}`}
                cx={playerCircle.altXCartesian}
                cy={playerCircle.altYCartesian}
                r={playerCircle.altRadius - 0.5 * playerCircle.designThickness}
                style={{
                  fill: playerCircle.secondaryColor,
                  opacity: 1,
                  fillRule: "evenodd",
                  stroke: `url(#radialGradient${currentPlayerId})`,
                  strokeWidth: playerCircle.designThickness,
                }}
              />
            </>
          );
        default:
          console.info("%c[ERROR]: Switch - circle design creation", "color: red");
      }
      break;
    // Handles the fourth circle alteration display
    case 7:
      console.log(playerCircle.circleSVG);
      return playerCircle.circleSVG;
    // Handles the fifth circle alteration display
    case 8:
      return (
        <>
          {createGradient(
            playerCircle.xCartesian,
            playerCircle.yCartesian,
            playerCircle.radius,
            playerCircle.averageHue,
            playerCircle.averageSaturation,
            playerCircle.averageLightness,
            currentPlayerId
          )}
        </>
      );
    // Handles the final circle display
    case 9:
      return <></>;
    // Default case indicated error in Switch functionality
    default:
      console.info("%c[ERROR]: Switch - createCircleDisplay", "color: red");
  }
}

/**
 * Creates the playerCircle's SVG fill gradient
 * @function createGradient
 * @param {number} x -- playerCircle's x location
 * @param {number} y - playerCircle's y location
 * @param {number} r -- playerCircle's radius
 * @param {number} hue -- playerCircle's hue
 * @param {number} saturation -- playerCircle's saturation
 * @param {number} lightness -- playerCircle's lightness
 * @param {number} id -- playerCircle's player id
 * @returns {JSX.Element} <defs />
 * */
export function createGradient(x, y, r, hue, saturation, lightness, id) {
  return (
    <defs>
      <linearGradient id={`linearGradient${id}`}>
        <stop
          style={{
            stopColor: `hsl(${hue}, ${saturation}%, ${lightness * 1.55}%`,
            stopOpacity: 1.0,
          }}
          offset="0.0000000"
          id="stop6457"
        />
        <stop
          style={{
            stopColor: `hsl(${hue}, ${saturation}%, ${lightness}%`,
            stopOpacity: 1.0,
          }}
          offset="1.00000000"
          id="stop6455"
        />
      </linearGradient>
      <radialGradient
        cx={x}
        cy={y}
        r={r}
        fx={x}
        fy={y}
        xlinkHref={`#linearGradient${id}`}
        id={`radialGradient${id}`}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(1.040418,0.796229,-0.814518,1.064316,153.4218,-15"
      />
    </defs>
  );
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
 * @param {number} centerX -- display grid's center position along x-axis
 * @param {number} centerY -- display grid's center position along y-axis
 * @param {number} age -- Current player's age value
 * @param {number} degree -- Current player's circle position in degrees
 * @returns {{yCartesian: number, xCartesian: number}} Cartesian coordinates for current player's circle on grid
 */
export function convertToCartesian(centerX, centerY, age, degree) {
  if (!age) {
    return { xCartesian: 0, yCartesian: 0 };
  }
  const radian = age; //initialXLocation();
  const theta = degree * (Math.PI / 180); //initialYLocation();

  let xCartesian = centerX + Math.round(radian * -Math.cos(theta));
  let yCartesian = centerY + Math.round(radian * Math.sin(theta));

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
 * @param {number} centerX -- display grid's center position along x-axis
 * @param {number} centerY -- display grid's center position along y-axis
 * @param {number} degree -- Current player's circle position in degrees
 * @param {number} radian -- Current player's circle radian
 * @param {number} food -- Current player's food value
 * @param {number} hair -- Current player's hair value
 * @returns {{altYCartesian: {number}, altXCartesian: {number}, altDegree: {number}}} Alternate cartesian coordinates for current player's circle on grid
 */
export function altCartesian(centerX, centerY, degree, radian, food, hair) {
  const shiftDegree = food * hair;
  const altDegree = degree + shiftDegree;
  const theta = altDegree * (Math.PI / 180);

  return {
    altDegree,
    altXCartesian: centerX + Math.round(radian * -Math.cos(theta)),
    altYCartesian: centerY + Math.round(radian * Math.sin(theta)),
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

/* === END FUNCTIONS EXPORTED FOR TESTING PURPOSES === */
