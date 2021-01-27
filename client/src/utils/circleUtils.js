import React from "react";

let Player;
let degree;
let centerX;
let centerY;

/* Exported Draw Circle Function */
export function drawPlayerCircles(players) {
  return players.map((player) => {
    return player.circle.circleSVG;
  });
}

/* === Exported Circle Creation and Alteration Functions === */
// Initial Circle Variable Function
// Sets the circle's initial position, size, and color
export function initialCircleVariables(
  playerCircleValues,
  displayGrid,
  currentPlayerId,
  currentForm
) {
  Player = playerCircleValues;
  centerX = displayGrid.cx;
  centerY = displayGrid.cy;

  const playerCircle = {
    circleRadius: setCircleRadius(Player.association),
    degree: setPlayerDegree(Player.interest, Player.gender, Player.diet).degree,
    fillColor: createFillColor().color,
    hue: createFillColor().hue,
    lightness: createFillColor().lightness,
    radian: parseInt(Player.age),
    slice: setPlayerDegree().slice,
    saturation: createFillColor().saturation,
  };
  const cords = convertToCartesian(centerX, centerY);
  playerCircle.xCartesian = cords.xCord;
  playerCircle.yCartesian = cords.yCord;
  playerCircle.circleSVG = createCircleSVG(
    playerCircle,
    currentPlayerId,
    currentForm
  );
  console.log("[circleSVG]: ", playerCircle.circleSVG);
  return playerCircle;
}

// First Alterations Function
// Changes the circles radius based on the personality and time responses
export function circleAlterationOne(
  playerCircleValues,
  currentPlayerId,
  currentForm
) {
  Player = playerCircleValues;
  console.log("player", Player);
  const playerCircle = {
    ...playerCircleValues.circle,
    altRadius: altRadius(),
  };
  playerCircle.circleSVG = createCircleSVG(
    playerCircle,
    currentPlayerId,
    currentForm
  );
  return playerCircle;
}

// Second Alterations Function
// Changes the circle's position along the original radian based on the food and hair responses
export function circleAlterationTwo(
  playerCircleValues,
  currentPlayerId,
  currentForm
) {
  Player = playerCircleValues;
  const playerCircle = {
    ...playerCircleValues.circle,
  };
  const altCords = altCartesian();
  playerCircle.altXCartesian = altCords.altXCord;
  playerCircle.altYCartesian = altCords.altYCord;
  playerCircle.altDegree = altCords.altDegree;
  playerCircle.circleSVG = createCircleSVG(
    playerCircle,
    currentPlayerId,
    currentForm
  );
  return playerCircle;
}

// Third Alterations Function
// Changes the design of the circle -- adding ring, dot, stroke or hollow design to each circle
export function circleAlterationThree(
  playerCircleValues,
  currentPlayerId,
  currentForm
) {
  console.log("alteration 3 ran");
  Player = playerCircleValues;
  const playerCircle = {
    ...playerCircleValues.circle,
  };
  const secondaryColors = createSecondaryColor();
  playerCircle.secondaryColor = secondaryColors.secondaryColor;
  playerCircle.altHue = secondaryColors.altHue;
  playerCircle.designThickness = createAlternateDesignVariables();
  playerCircle.circleSVG = createCircleSVG(
    playerCircle,
    currentPlayerId,
    currentForm,
    Player.nature
  );
  return playerCircle;
}

// Fourth Alterations Function
//
export function circleAlterationFour() {}

// Fifth Alterations Function
// Averages the chosen color with the current players fill color
export function circleAlterationFive(
  playerCircleValues,
  currentPlayerId,
  currentForm
) {
  Player = playerCircleValues;
  const playerCircle = {
    ...playerCircleValues.circle,
  };
  const { averageHue, averageSaturation, averageLightness } = averageColors();
  playerCircle.averageHue = averageLightness;
  playerCircle.averageSaturation = averageSaturation;
  playerCircle.averageLightness = averageLightness;
  playerCircle.averageColor = `hsl(${averageHue}, ${averageSaturation}%, ${averageLightness}%`;
  playerCircle.circleSVG = createCircleSVG(
    playerCircle,
    currentPlayerId,
    currentForm
  );
}

// Sixth Alterations Function
//
export function finalCircleDisplay() {}
/* === END EXPORTED FUNCTIONS === */

/* === Create the SVG for the player circle === */
export function createCircleSVG(
  playerCircle,
  currentPlayerId,
  currentForm,
  nature
) {
  switch (currentForm) {
    // Handles the initial circle display
    case 3:
      return (
        <>
          {createGradient(
            playerCircle.xCartesian,
            playerCircle.yCartesian,
            playerCircle.circleRadius,
            playerCircle.hue,
            playerCircle.saturation,
            playerCircle.lightness,
            currentPlayerId
          )}
          <circle
            key={`circle_${currentPlayerId}`}
            cx={playerCircle.xCartesian}
            cy={playerCircle.yCartesian}
            r={playerCircle.circleRadius}
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
          console.info(
            "%c[ERROR]: Switch - circle design creation",
            "color: red"
          );
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
            playerCircle.circleRadius,
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
    default:
      console.info("%c[ERROR]: Switch - createCircleDisplay", "color: red");
  }
}
/* === END SVG CREATION FUNCTION === */

/* === Create the sphere gradient for each circle === */
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
/* === END GRADIENT CREATION FUNCTION === */

/* === Initial Circle Variable Functions === */
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
export function setPlayerDegree(interest, gender, diet) {
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
export function convertToCartesian() {
  if (!Player.age) {
    return { xCord: 0, yCord: 0 };
  }
  const radian = Player.age; //initialXLocation();
  const theta = degree * (Math.PI / 180); //initialYLocation();

  let xCord = centerX + Math.round(radian * -Math.cos(theta));
  let yCord = centerY + Math.round(radian * Math.sin(theta));

  return { xCord, yCord };
}
/* === END INITIAL VARIABLES === */

/* === Circle Radius Alteration Function === */
export function altRadius() {
  if (Player.circle !== undefined) {
    let radius = Player.circle.circleRadius;
    const timeShift = radius * (Player.time / 100);
    Player.time % 2 === 0 ? (radius += timeShift) : (radius -= timeShift);
    const personalityShift = radius * (Player.personality / 100);
    Player.personality % 2 === 0
      ? (radius += personalityShift)
      : (radius -= personalityShift);

    return radius;
  }
  return 0;
}
/* === END RADIUS ALTERATION === */

/* === Circle Position Alteration Function === */
export function altCartesian() {
  if (Player.circle !== undefined) {
    const radian = Player.circle.radian;
    const degree = Player.circle.degree;
    const circulation = Player.food;
    const multiplier = Player.hair;

    const shiftDegree = circulation * multiplier;
    const altDegree = degree + shiftDegree;
    const theta = altDegree * (Math.PI / 180);

    return {
      altDegree,
      altXCord: centerX + Math.round(radian * -Math.cos(theta)),
      altYCord: centerY + Math.round(radian * Math.sin(theta)),
    };
  }
}
/* === END POSITION ALTERATION === */

/* === Circle Design Alteration Function === */
export function createAlternateDesignVariables() {
  switch (Player.media) {
    case "thicker":
      return Player.circle.circleRadius * 0.2;
    case "thick":
      return Player.circle.circleRadius * 0.15;
    case "thin":
      return Player.circle.circleRadius * 0.08;
    case "thinner":
      return Player.circle.circleRadius * 0.02;
    default:
      console.info(
        "%c[ERROR]: Switch - createAlternateDesignVariables",
        "color: red"
      );
  }
}
export function createSecondaryColor() {
  let altHue, secondaryColor;
  switch (Player.progress) {
    case "complimentary":
      altHue = Player.circle.hue + 180;
      secondaryColor = `hsl(${altHue},${Player.circle.saturation}%,${Player.circle.lightness}%)`;
      break;
    case "analogous":
      altHue =
        Math.random() * (Player.circle.hue + 75 - Player.circle.hue - 75) +
        Player.circle.hue -
        75;
      secondaryColor = `hsl(${altHue},${Player.circle.saturation}%,${Player.circle.lightness}%)`;
      console.log("secCol altHue", secondaryColor, altHue);
      break;
    case "triadic":
      altHue =
        ((Player.circle.hue + 120) *
          (Player.circle.hue - 120) *
          Player.circle.hue) /
        3;
      secondaryColor = `hsl(${altHue},${Player.circle.saturation}%,${Player.circle.lightness}%)`;
      break;
    case "monochromatic":
      altHue =
        Math.random() * (Player.circle.hue + 15 - Player.circle.hue - 15) +
        Player.circle.hue -
        15;
      secondaryColor = `hsl(${altHue},${Player.circle.saturation}%,${Player.circle.lightness}%)`;
      break;
    default:
      console.info("%c[ERROR]: Switch - createSecondaryColor", "color: red");
  }
  console.log("secCol altHue", secondaryColor, altHue);
  return { secondaryColor, altHue };
}
/* === END DESIGN ALTERATION === */

/* === Circle Color Alteration Function === */
export function averageColors() {
  let averageHue, averageSaturation, averageLightness;
  switch (Player.color) {
    case "chartreuse":
      averageHue = (Player.altHue + 90) / 2;
      averageSaturation = (Player.saturation + 100) / 2;
      averageLightness = (Player.lightness + 50) / 2;
      break;
    case "vermilion":
      averageHue = (Player.altHue + 8) / 2;
      averageSaturation = (Player.saturation + 76) / 2;
      averageLightness = (Player.lightness + 58) / 2;
      break;
    case "cobalt":
      averageHue = (Player.altHue + 215) / 2;
      averageSaturation = (Player.saturation + 100) / 2;
      averageLightness = (Player.lightness + 34) / 2;
      break;
    case "teal":
      averageHue = (Player.altHue + 180) / 2;
      averageSaturation = (Player.saturation + 100) / 2;
      averageLightness = (Player.lightness + 25) / 2;
      break;
    case "kellyGreen":
      averageHue = (Player.altHue + 101) / 2;
      averageSaturation = (Player.saturation + 78) / 2;
      averageLightness = (Player.lightness + 41) / 2;
      break;
    case "aubergine":
      averageHue = (Player.altHue + 315) / 2;
      averageSaturation = (Player.saturation + 27) / 2;
      averageLightness = (Player.lightness + 30) / 2;
      break;
    default:
      console.info("%c[ERROR]: Switch - averageColors", "color: red");
  }
  return { averageHue, averageSaturation, averageLightness };
}
/* === END DESIGN ALTERATION === */
