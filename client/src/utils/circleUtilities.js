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
 * Variable to pass all functions for ease of use elsewhere
 */
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

/**
 * Export necessary pieces
 */
export { circleAlterations, rerenderCircles };

/**
 * Initial circle creation
 * @function initialCircleVariable
 * @param {object} player -- Current player object
 * @param {object} displayGrid -- Current size of the display grid
 * @param {number} currentPlayerId -- Id of the current player
 * @return {Object} circle -- Updated player circle object
 * */
function initialCircleVariables(player, currentPlayerId, displayGrid) {
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

  let circle = {
    initial: { ...initial },
    ...initial,
    isAnimated: true,
    design: "defaultCircle",
  };

  let initialCircleSVG = createCircleDesign(currentPlayerId, initial, centerPoint);
  let circleSVG = createCircleDesign(currentPlayerId, circle, centerPoint);
  let circles = [initialCircleSVG];
  return { circle, initialCircleSVG, circleSVG, circles };
}

/**
 * CA#1 -- radius
 * @function circleAlterationOne
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * */
function circleAlterationOne(player, currentPlayerId) {
  let circles = player.circles;
  const circle = {
    ...player.circle,
    radius: altRadius(player.circle.initial.radius, player.time, player.personality),
  };

  let circleSVG = createCircleDesign(currentPlayerId, circle, centerPoint);
  circles.push(circleSVG);
  return { circle, circleSVG, circles };
}

/**
 * CA#2 -- position
 * @function circleAlterationTwo
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * */
function circleAlterationTwo(player, currentPlayerId) {
  let circles = player.circles;
  const circle = {
    ...player.circle,
    ...altCartesian(centerPoint, player.circle.initial.degree, player.circle.initial.radian, player.food, player.hair),
  };
  let circleSVG = createCircleDesign(currentPlayerId, circle, centerPoint);
  circles.push(circleSVG);
  return { circle, circleSVG, circles };
}

/**
 * CA#3 -- design and color
 * @function circleAlterationThree
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * */
function circleAlterationThree(player, currentPlayerId) {
  let { circle, circles } = player;
  const secondaryColor = createSecondaryColor(player.progress, circle.initial.hue, circle.saturation, circle.lightness);
  circle = {
    ...circle,
    secondaryColor,
    design: player.nature,
    designThickness: setAlternateDesignWeight(circle.radius, player.media),
  };
  let circleSVG = createCircleDesign(currentPlayerId, circle, centerPoint);
  circles.push(circleSVG);
  return { circle, circleSVG, circles };
}

/**
 * CA#4 -- animation path
 * @function circleAlterationFour
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * */
function circleAlterationFour(player, currentPlayerId) {
  let { circle, circles } = player;
  circle = {
    ...circle,
  };
  circle.lineDesign = createLineDesign(player.religion, "hsl(0, 0%, 50%)");
  let circleSVG = createCircleDesign(currentPlayerId, circle, centerPoint);
  circles.push(circleSVG);
  return { circle, circleSVG, circles };
}

/**
 * CA#5 -- average color
 * @function circleAlterationFive
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * */
function circleAlterationFive(player, currentPlayerId) {
  let { circle, circles } = player;
  circle = {
    ...circle,
    ...averageColors(player.color, circle.hue, circle.saturation, circle.lightness),
    isAnimated: false,
  };
  let circleSVG = createCircleDesign(currentPlayerId, circle, centerPoint);
  circles.push(circleSVG);
  return { circle, circleSVG, circles };
}

/**
 * CA#6 -- final display
 * @function circleAlterationSix
 * @param {object} player -- Current player object
 * @param {number} currentPlayerId -- Id of the current player
 * */
function finalCircleDisplay(player, currentPlayerId) {
  let { circle, circles } = player;
  circle = {
    ...circle,
  };
  circle.lineDesign = createLineDesign(player.religion, circle.initial.color);
  console.log(circle.lineDesign);
  let circleSVG = createCircleDesign(currentPlayerId, circle, centerPoint);
  circles.push(circleSVG);
  return { circle, circleSVG, circles };
}
