import React from "react";

// let Player;
// let degree;
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
  player,
  displayGrid,
  currentPlayerId,
  currentForm
) {
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
  playerCircle.circleSVG = createCircleSVG(
    playerCircle,
    currentPlayerId,
    currentForm
  );
  return playerCircle;
}

// First Alterations Function
// Changes the circles radius based on the personality and time responses
export function circleAlterationOne(player, currentPlayerId, currentForm) {
  const playerCircle = {
    ...player.circle,
    altRadius: altRadius(player.circle.radius, player.time, player.personality),
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
export function circleAlterationTwo(player, currentPlayerId, currentForm) {
  const playerCircle = {
    ...player.circle,
    ...altCartesian(
      centerX,
      centerY,
      player.circle.degree,
      player.circle.radian,
      player.food,
      player.hair
    ),
  };
  playerCircle.circleSVG = createCircleSVG(
    playerCircle,
    currentPlayerId,
    currentForm
  );
  return playerCircle;
}

// Third Alterations Function
// Changes the design of the circle -- adding ring, dot, stroke or hollow design to each circle
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
    designThickness: createAlternateDesignVariables(
      playerCircle.radius,
      player.media
    ),
  };
  playerCircle.circleSVG = createCircleSVG(
    playerCircle,
    currentPlayerId,
    currentForm,
    player.nature
  );
  return playerCircle;
}

// Fourth Alterations Function
//
export function circleAlterationFour() {}

// Fifth Alterations Function
// Averages the chosen color with the current players fill color
export function circleAlterationFive(player, currentPlayerId, currentForm) {
  let playerCircle = player.circle;
  playerCircle = {
    ...playerCircle,
    ...averageColors(
      player.color,
      playerCircle.altHue,
      playerCircle.saturation,
      playerCircle.lightness
    ),
  };
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
/* === END INITIAL VARIABLES === */

/* === Circle Radius Alteration Function === */
export function altRadius(radius, time, personality) {
  let altRadius = radius;
  const timeShift = radius * (time / 100);
  time % 2 === 0 ? (radius += timeShift) : (radius -= timeShift);
  const personalityShift = radius * (personality / 100);
  personality % 2 === 0
    ? (altRadius += personalityShift)
    : (altRadius -= personalityShift);

  return altRadius;
}
/* === END RADIUS ALTERATION === */

/* === Circle Position Alteration Function === */
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
/* === END POSITION ALTERATION === */

/* === Circle Design Alteration Function === */
export function createAlternateDesignVariables(radius, media) {
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
      console.info(
        "%c[ERROR]: Switch - createAlternateDesignVariables",
        "color: red"
      );
  }
}
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
/* === END DESIGN ALTERATION === */

/* === Circle Color Alteration Function === */
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
/* === END DESIGN ALTERATION === */
