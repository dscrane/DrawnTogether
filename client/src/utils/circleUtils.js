import React from "react";

let Player;
let degree;

function drawPlayerCircles(players) {
  console.log(players);
  return players.map((player) => createCircleSVG(player.circle, players.id));
}

function circleVariables(playerCircleValues, displayGrid, currentPlayerId) {
  Player = playerCircleValues;
  console.log("player", Player);

  const playerCircle = {
    circleRadius: setCircleRadius(),
    circleRadiusAlt: altRadius(),
    degree: setPlayerDegree().degree,
    fillColor: createFillColor().color,
    hue: createFillColor().hue,
    lightness: createFillColor().lightness,
    radian: Player.age,
    slice: setPlayerDegree().slice,
    saturation: createFillColor().saturation,
    xCartesian: convertToCartesian(displayGrid).xCord /* max +- 400 */,
    yCartesian: convertToCartesian(displayGrid).yCord /* max +- 400 */,
    xCartesianAlt: altCartesian().altXCord,
    yCartesianAlt: altCartesian().altYCord,
  };
  playerCircle.circleSVG = createCircleSVG(playerCircle, currentPlayerId);
  return playerCircle;
}

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

function createStrokeColor() {}

function createSecondaryColor() {}

function convertToCartesian(displayGrid) {
  if (!Player.age) {
    return { xCord: 0, yCord: 0 };
  }
  const radian = Player.age; //initialXLocation();
  const theta = degree * (Math.PI / 180); //initialYLocation();

  let xCord = displayGrid.cx + Math.round(radian * -Math.cos(theta));
  let yCord = displayGrid.cy + Math.round(radian * Math.sin(theta));

  return { xCord, yCord };
}

function altRadius() {
  if (Player.circle !== undefined) {
    let radius = Player.circle.radius;

    const timeShift = radius * (Player.time / 100);
    // console.log(timeShift);

    Player.time % 2 === 0 ? (radius += timeShift) : (radius -= timeShift);

    const personalityShift = radius * (Player.personality / 100);
    // console.log(personalityShift);
    Player.personality % 2 === 0
      ? (radius += personalityShift)
      : (radius -= personalityShift);

    return radius;
  }
  return 0;
}

function altCartesian() {
  let altXCord = 0;
  let altYCord = 0;
  if (Player.circle !== undefined) {
    const radius = Player.circle.radius;
    const degree = Player.circle.degree;
    const circulation = Player.food;
    const multiplier = Player.hair;

    const shiftDegree = circulation * multiplier;
    const newDegree = degree + shiftDegree;

    const theta = newDegree * (Math.PI / 180);

    altXCord = Math.round(radius * -Math.cos(theta));
    altYCord = Math.round(radius * Math.sin(theta));

    return { altXCord, altYCord };
  }
  return { altXCord, altYCord };
}

function createCircleSVG(playerCircle, currentPlayerId) {
  console.log("player circle passed:", playerCircle);
  return (
    <circle
      key={`circle_${currentPlayerId}`}
      cx={playerCircle.xCartesian}
      cy={playerCircle.yCartesian}
      r={playerCircle.circleRadius}
      fill={playerCircle.fillColor}
    />
  );
}

export { circleVariables, drawPlayerCircles };
