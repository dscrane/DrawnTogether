import React from "react";

let Player;
let degree;
let centerX;
let centerY;

function createCircleSVG(playerCircle, currentPlayerId, currentForm) {
  console.log("player circle passed:", playerCircle);
  switch (currentForm) {
    case 3:
      return (
        <circle
          key={`circle_${currentPlayerId}`}
          cx={playerCircle.xCartesian}
          cy={playerCircle.yCartesian}
          r={playerCircle.circleRadius}
          fill={playerCircle.fillColor}
        />
      );
    case 4:
      return (
        <circle
          key={`circle_${currentPlayerId}`}
          cx={playerCircle.xCartesian}
          cy={playerCircle.yCartesian}
          r={playerCircle.altRadius}
          fill={playerCircle.fillColor}
        />
      );
    case 5:
      return (
        <circle
          key={`circle_${currentPlayerId}`}
          cx={playerCircle.altXCartesian}
          cy={playerCircle.altYCartesian}
          r={playerCircle.altRadius}
          fill={playerCircle.fillColor}
        />
      );
  }
}

/* Exported Draw Circle Function */
function drawPlayerCircles(players) {
  return players.map((player) => {
    return player.circle.circleSVG;
  });
}

/* Exported Initial Circle Variable Function */
function initialCircleVariables(
  playerCircleValues,
  displayGrid,
  currentPlayerId,
  currentForm
) {
  Player = playerCircleValues;
  centerX = displayGrid.cx;
  centerY = displayGrid.cy;

  const playerCircle = {
    circleRadius: setCircleRadius(),
    degree: setPlayerDegree().degree,
    fillColor: createFillColor().color,
    hue: createFillColor().hue,
    lightness: createFillColor().lightness,
    radian: Player.age,
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
  return playerCircle;
}

/* Exported Second Alterations Function */
function circleAlterationOne(playerCircleValues, currentPlayerId, currentForm) {
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

function circleAlterationTwo(playerCircleValues, currentPlayerId, currentForm) {
  Player = playerCircleValues;
  const playerCircle = {
    ...playerCircleValues.circle,
  };
  const altCords = altCartesian();
  playerCircle.altXCartesian = altCords.altXCord;
  playerCircle.altYCartesian = altCords.altYCord;
  playerCircle.circleSVG = createCircleSVG(
    playerCircle,
    currentPlayerId,
    currentForm
  );
  return playerCircle;
}

function circleAlterationThree() {}

/* Initial Circle Variable Functions */
function setCircleRadius() {
  if (!Player.association) {
    return Math.floor(Math.random() * 45) + 10;
  }
  if (Player.association * 10 < 75) {
    return Player.association * 8;
  } else if (Player.association * 2 < 75) {
    return Player.association * 4;
  } else {
    return Player.association * 2;
  }
}

function setPlayerDegree() {
  if (!Player.interest || !Player.gender || !Player.diet) {
    return { degree: 0, slice: 0 };
  }
  const slice = Math.floor(Math.random() * 9) + parseInt(Player.interest);
  switch (Player.diet) {
    case "carnivore":
      if (Player.gender === 0) {
        degree = 0 + slice;
      } else if (Player.gender % 2 === 0) {
        degree = 136 + slice;
      } else {
        degree = 0 + slice;
      }
      break;
    case "vegetarian":
      if (Player.gender === 0) {
        degree = 181 + slice;
      } else if (Player.gender % 2 === 0) {
        degree = 316 + slice;
      } else {
        degree = 181 + slice;
      }
      break;
    case "pescatarian":
      if (Player.gender === 0) {
        degree = 226 + slice;
      } else if (Player.gender % 2 === 0) {
        degree = 226 + slice;
      } else {
        degree = 91 + slice;
      }
      break;
    case "vegan":
      if (Player.gender === 0) {
        degree = 46 + slice;
      } else if (Player.gender % 2 === 0) {
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

function createFillColor() {
  if (!Player.height) {
    return { hue: 0, lightness: 0, saturation: 0, color: "" };
  }
  const hue = degree;
  const lightness = Math.floor(Math.random() * Player.height) + 25;
  const saturation = 100 - (Math.floor(Math.random() * Player.height) + 25);

  const color = `hsl(${hue}, ${lightness}%, ${saturation}%)`;
  return { hue, lightness, saturation, color };
}

function convertToCartesian(displayGrid) {
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

function createStrokeColor() {}

function createSecondaryColor() {}

function altRadius() {
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

function altCartesian() {
  if (Player.circle !== undefined) {
    const radian = Player.circle.radian;
    const degree = Player.circle.degree;
    const circulation = Player.food;
    const multiplier = Player.hair;

    const shiftDegree = circulation * multiplier;
    const newDegree = degree + shiftDegree;
    const theta = newDegree * (Math.PI / 180);

    console.log("shiftDegree", shiftDegree);
    console.log("newDegree", newDegree);
    console.log("theta", theta);

    return {
      altXCord: centerX + Math.round(radian * -Math.cos(theta)),
      altYCord: centerY + Math.round(radian * Math.sin(theta)),
    };
  }
}

export {
  initialCircleVariables,
  drawPlayerCircles,
  circleAlterationOne,
  circleAlterationTwo,
  circleAlterationThree,
};
