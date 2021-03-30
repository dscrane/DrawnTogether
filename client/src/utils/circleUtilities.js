import React from "react";
import {
  altRadius,
  altCartesian,
  averageColors,
  createCircleSVG,
  createFillColor,
  setCircleRadius,
  setPlayerDegree,
  convertToCartesian,
  createAnimationPath,
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
export function updatePlayerCircles(players, currentForm) {
  console.log(players);
  return players.map((player) => {
    console.log(player);
    return player.circles[currentForm];
  });
}

/**
 * Initial circle creation
 * @function initialCircleVariable
 * @param {object} player -- Current player object
 * @param {object} displayGrid -- Current size of the display grid
 * @param {number} currentPlayerId -- Id of the current player
 * @param {number} currentForm -- Number of the current form being answered
 * */
export function initializeCircle(player, displayGrid, currentPlayerId, currentForm, ringSpacing) {
  centerPoint.x = displayGrid.cx;
  centerPoint.y = displayGrid.cy;

  let playerCircle = {
    ...setPlayerDegree(player.interest, player.gender, player.diet),
    radius: setCircleRadius(player.association),
    radian: parseInt(player.age),
  };

  playerCircle = {
    ...playerCircle,
    ...createFillColor(player.height, playerCircle.degree),
    ...convertToCartesian(centerPoint, player.age, playerCircle.degree, ringSpacing),
  };
  const circleSVG = createCircleSVG(playerCircle, centerPoint, currentPlayerId, currentForm);
  return { playerCircle, circleSVG };
}

/**
 * CA#1 -- radius
 * @function circleAlterationOne
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * @param {number} currentForm -- Number of the current form being answered
 * */
export function circleAlterationOne(player, currentPlayerId, currentForm) {
  const playerCircle = {
    ...player.circle,
    altRadius: altRadius(player.circle.radius, player.time, player.personality),
  };
  const circleSVG = createCircleSVG(playerCircle, centerPoint, currentPlayerId, currentForm);
  return { playerCircle, circleSVG };
}

/**
 * CA#2 -- position
 * @function circleAlterationTwo
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * @param {number} currentForm -- Number of the current form being answered
 * */
export function circleAlterationTwo(player, currentPlayerId, currentForm) {
  const playerCircle = {
    ...player.circle,
    ...altCartesian(centerPoint, player.circle.degree, player.circle.radian, player.food, player.hair),
  };
  const circleSVG = createCircleSVG(playerCircle, centerPoint, currentPlayerId, currentForm);
  return { playerCircle, circleSVG };
}

/**
 * CA#3 -- design and color
 * @function circleAlterationThree
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * @param {number} currentForm -- Number of the current form being answered
 * */
export function circleAlterationThree(player, currentPlayerId, currentForm) {
  let playerCircle = player.circle;
  const secondaryColor = createSecondaryColor(
    player.progress,
    playerCircle.hue,
    playerCircle.saturation,
    playerCircle.lightness
  );
  playerCircle = {
    ...playerCircle,
    ...secondaryColor,
    designThickness: setAlternateDesignWeight(playerCircle.radius, player.media),
  };

  const circleSVG = createCircleSVG(playerCircle, centerPoint, currentPlayerId, currentForm, player.nature);
  return { playerCircle, circleSVG };
}

/**
 * CA#4 -- animation path
 * @function circleAlterationFour
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * @param {number} currentForm -- Number of the current form being answered
 * */
export function circleAlterationFour(player, currentPlayerId, currentForm) {
  let playerCircle = player.circle;
  const circleSVG = createCircleSVG(playerCircle, centerPoint, currentPlayerId, currentForm, player.nature);
  return { playerCircle, circleSVG };
}

/**
 * CA#5 -- average color
 * @function circleAlterationFive
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
  const circleSVG = createCircleSVG(playerCircle, centerPoint, currentPlayerId, currentForm, player.nature);
  return { playerCircle, circleSVG };
}

/**
 * CA#6 -- final display
 * @function circleAlterationSix
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * @param {number} currentForm -- Number of the current form being answered
 * */
export function finalCircleDisplay(player, currentPlayerId, currentForm) {
  // TODO:
  //  - Have background grid fade away leaving on the circles
  //  - Remove all animations from design
  //  - Display the paths the animations followed (in the secondary circle color)
}
