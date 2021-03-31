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
  createSecondaryColor,
  setAlternateDesignWeight,
} from "./circleHelpers";
import { CircleSVG } from "./CircleSVG";

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
    return player.circle.circleSVG;
  });
}

/**
 * Initial circle creation
 * @function initialCircleVariable
 * @param {object} player -- Current player object
 * @param {object} displayGrid -- Current size of the display grid
 * @param {number} currentPlayerId -- Id of the current player
 * @param {number} currentForm -- Number of the current form being answered
 * @param {number} ringSpacing -- proportional positioning of the circles
 * @return {{saturation: number, yCartesian: number, color: string, slice: number, xCartesian: number, lightness: number, degree: number, hue: number, radius: number, radian: number}} Updated player circle object
 * */
export function initialCircleVariables(player, displayGrid, currentPlayerId, currentForm, ringSpacing) {
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
  playerCircle.circleSVG = createCircleSVG(playerCircle, centerPoint, currentPlayerId, currentForm);
  return playerCircle;
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
  playerCircle.circleSVG = createCircleSVG(playerCircle, centerPoint, currentPlayerId, currentForm);
  return playerCircle;
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
  playerCircle.circleSVG = createCircleSVG(playerCircle, centerPoint, currentPlayerId, currentForm);
  return playerCircle;
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
  playerCircle.circleSVG = createCircleSVG(playerCircle, centerPoint, currentPlayerId, currentForm, player.nature);
  return playerCircle;
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
  playerCircle.circleSVG = createCircleSVG(playerCircle, centerPoint, currentPlayerId, currentForm, player.nature);
  return playerCircle;
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
  playerCircle.circleSVG = createCircleSVG(playerCircle, centerPoint, currentPlayerId, currentForm, player.nature);
  return playerCircle;
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
