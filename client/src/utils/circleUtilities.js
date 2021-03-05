import React from "react";
import {
  setPlayerDegree,
  setCircleRadius,
  createFillColor,
  convertToCartesian,
  createCircleSVG,
  altRadius,
  altCartesian,
  createSecondaryColor,
  setAlternateDesignWeight,
  averageColors,
} from "./circleHelpers";

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
export function circleAlterationFour(player, currentPlayerId, currentForm) {
  let playerCircle = player.circle;
  playerCircle.circleSVG = createCircleSVG(playerCircle, currentPlayerId, currentForm, player.nature);
  return playerCircle;
}

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
  playerCircle.circleSVG = createCircleSVG(playerCircle, currentPlayerId, currentForm, player.nature);
  return playerCircle;
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
