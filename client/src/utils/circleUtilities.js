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
} from "./circleHelpers";

const centerPoint = {
  x: 0,
  y: 0,
};

/**
 * Function that draws the player circles
 * @function drawPlayerCircles
 * @param {players[]} players -- Array of player objects
 * @return {players[]} Array of player objects with newly created circleSVGs
 */
export function updatePlayerCircles(players) {
  return players.map((player) => {
    return player.circleSVG;
  });
}

/**
 * Initial circle creation
 * @function initialCircleVariable
 * @param {object} player -- Current player object
 * @param {object} displayGrid -- Current size of the display grid
 * @param {number} currentPlayerId -- Id of the current player
 * @return {Object} playerCircle -- Updated player circle object
 * */
export function initialCircleVariables(player, displayGrid, currentPlayerId) {
  centerPoint.x = displayGrid.cx;
  centerPoint.y = displayGrid.cy;
  const { init_degree, init_slice } = setPlayerDegree(player.interest, player.gender, player.diet);

  const initial = {
    init_degree,
    init_slice,
    init_radius: setCircleRadius(player.association),
    init_radian: parseInt(player.age),
    ...createFillColor(player.height, init_degree),
    ...convertToCartesian(centerPoint, player.age, init_degree),
  };

  let playerCircle = {
    initial: { ...initial },
    isAnimated: true,
    design: "defaultCircle",
  };

  for (let key in initial) {
    let parsedKey = key.substring(5);
    playerCircle[parsedKey] = initial[key];
  }

  player.circleSVG = createCircleDesign(currentPlayerId, playerCircle, centerPoint);
  console.log(player.circleSVG);
  return playerCircle;
}

/**
 * CA#1 -- radius
 * @function circleAlterationOne
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * */
export function circleAlterationOne(player, currentPlayerId) {
  const playerCircle = {
    ...player.circle,
    radius: altRadius(player.circle.initial.init_radius, player.time, player.personality),
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
export function circleAlterationTwo(player, currentPlayerId) {
  const playerCircle = {
    ...player.circle,
    ...altCartesian(
      centerPoint,
      player.circle.initial.init_degree,
      player.circle.initial.init_radian,
      player.food,
      player.hair
    ),
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
export function circleAlterationThree(player, currentPlayerId) {
  let playerCircle = player.circle;
  const secondaryColor = createSecondaryColor(
    player.progress,
    playerCircle.initial.init_hue,
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
export function circleAlterationFour(player, currentPlayerId) {
  let playerCircle = player.circle;
  playerCircle = { ...playerCircle };
  player.circleSVG = createCircleDesign(currentPlayerId, playerCircle, centerPoint);
  return playerCircle;
}

/**
 * CA#5 -- average color
 * @function circleAlterationFive
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * */
export function circleAlterationFive(player, currentPlayerId) {
  let playerCircle = player.circle;
  playerCircle = {
    ...playerCircle,
    ...averageColors(player.color, playerCircle.hue, playerCircle.saturation, playerCircle.lightness),
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
export function finalCircleDisplay(player, currentPlayerId) {
  let playerCircle = player.circle;
  playerCircle = {
    ...playerCircle,
    isAnimated: false,
  };

  player.circleSVG = createCircleDesign(currentPlayerId, playerCircle, centerPoint);
  return playerCircle;
}
