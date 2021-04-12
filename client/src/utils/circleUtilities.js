import React from "react";
import {
  altRadius,
  altCartesian,
  averageColors,
  createCircleDesign,
  createFillColor,
  setCircleRadius,
  setPlayerDegree,
  convertToCartesian,
  createSecondaryColor,
  setAlternateDesignWeight,
  createLineDesign,
} from "./circleHelpers";

const centerPoint = {
  x: 0,
  y: 0,
};

/**
 * Initial circle creation
 * @function initialCircleVariable
 * @param {object} player -- Current player object
 * @param {object} displayGrid -- Current size of the display grid
 * @param {number} currentPlayerId -- Id of the current player
 * @return {Object} playerCircle -- Updated player circle object
 * */
function initialCircleVariables(player, currentPlayerId, displayGrid) {
  console.log("even get here?", player);
  centerPoint.x = displayGrid.cx;
  centerPoint.y = displayGrid.cy;
  const { degree, slice } = setPlayerDegree(player.interest, player.gender, player.diet);

  const initial = {
    degree,
    slice,
    radius: setCircleRadius(player.association),
    radian: parseInt(player.age),
    ...createFillColor(player.height, degree),
    ...convertToCartesian(centerPoint, player.age, degree),
    design: "initialCircle",
  };

  let playerCircle = {
    initial: { ...initial },
    ...initial,
    isAnimated: true,
    design: "defaultCircle",
  };

  let initialCircleSVG = createCircleDesign(currentPlayerId, initial, centerPoint);
  let circleSVG = createCircleDesign(currentPlayerId, playerCircle, centerPoint);
  return { playerCircle, initialCircleSVG, circleSVG };
}

/**
 * CA#1 -- radius
 * @function circleAlterationOne
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * */
function circleAlterationOne(player, currentPlayerId) {
  const playerCircle = {
    ...player.circle,
    radius: altRadius(player.circle.initial.radius, player.time, player.personality),
  };
  player.circleSVG = createCircleDesign(currentPlayerId, playerCircle, centerPoint);
  return playerCircle;
}

/**
 * CA#2 -- position
 * @function circleAlterationTwo
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * */
function circleAlterationTwo(player, currentPlayerId) {
  const playerCircle = {
    ...player.circle,
    ...altCartesian(centerPoint, player.circle.initial.degree, player.circle.initial.radian, player.food, player.hair),
  };
  player.circleSVG = createCircleDesign(currentPlayerId, playerCircle, centerPoint);
  return playerCircle;
}

/**
 * CA#3 -- design and color
 * @function circleAlterationThree
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * */
function circleAlterationThree(player, currentPlayerId) {
  let playerCircle = player.circle;
  const secondaryColor = createSecondaryColor(
    player.progress,
    playerCircle.initial.hue,
    playerCircle.saturation,
    playerCircle.lightness
  );
  playerCircle = {
    ...playerCircle,
    secondaryColor,
    design: player.nature,
    designThickness: setAlternateDesignWeight(playerCircle.radius, player.media),
  };
  player.circleSVG = createCircleDesign(currentPlayerId, playerCircle, centerPoint);
  return playerCircle;
}

/**
 * CA#4 -- animation path
 * @function circleAlterationFour
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * */
function circleAlterationFour(player, currentPlayerId) {
  let playerCircle = player.circle;
  playerCircle = {
    ...playerCircle,
  };
  playerCircle.lineDesign = createLineDesign(player.religion, "hsl(0, 0%, 50%)");
  player.circleSVG = createCircleDesign(currentPlayerId, playerCircle, centerPoint);
  return playerCircle;
}

/**
 * CA#5 -- average color
 * @function circleAlterationFive
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * */
function circleAlterationFive(player, currentPlayerId) {
  let playerCircle = player.circle;
  playerCircle = {
    ...playerCircle,
    ...averageColors(player.color, playerCircle.hue, playerCircle.saturation, playerCircle.lightness),
    isAnimated: false,
  };
  player.circleSVG = createCircleDesign(currentPlayerId, playerCircle, centerPoint);
  return playerCircle;
}

/**
 * CA#6 -- final display
 * @function circleAlterationSix
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * */
function finalCircleDisplay(player, currentPlayerId) {
  let playerCircle = player.circle;
  playerCircle = {
    ...playerCircle,
  };
  playerCircle.lineDesign = createLineDesign(player.religion, playerCircle.initial.color);
  console.log(playerCircle.lineDesign);
  player.circleSVG = createCircleDesign(currentPlayerId, playerCircle, centerPoint);
  return playerCircle;
}

const circleAlterations = {
  2: initialCircleVariables,
  3: circleAlterationOne,
  4: circleAlterationTwo,
  5: circleAlterationThree,
  6: circleAlterationFour,
  7: circleAlterationFive,
  8: finalCircleDisplay,
};

/**
 * Function that draws the player circles
 * @function drawPlayerCircles
 * @param {players[]} players -- Array of player objects
 * @param {number} currentForm -- Current form
 * @return {players[]} Array of player objects with newly created circleSVGs
 */
function rerenderCircles(players, currentForm) {
  if (currentForm <= 8) {
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

export { circleAlterations, rerenderCircles };
