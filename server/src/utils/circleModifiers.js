import {
  altRadius,
  altCartesian,
  averageColors,
  // createCircleDesign,
  createFillColor,
  setCircleRadius,
  setPlayerDegree,
  convertToCartesian,
  createSecondaryColor,
  setAlternateDesignWeight,
  createLineDesign,
} from "./circleHelpers.js";
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
  // 8: finalCircleDisplay,
};

// /**
//  * Function that draws the player circles
//  * @function drawPlayerCircles
//  * @param {players[]} players -- Array of player objects
//  * @param {number} currentForm -- Current form
//  * @return {players[]} Array of player objects with newly created circleSVGs
//  */
// function rerenderCircles(players, currentForm) {
//   console.log("rerender ran", currentForm);
//   if (currentForm <= 7) {
//     return Object.keys(players).map((playerKey) => {
//       return players[playerKey].circleSVG;
//     });
//   }
//   const allCircles = [];
//   players.forEach((player) => {
//     allCircles.push(player.circleSVG, player.initialCircleSVG);
//   });
//   console.log(allCircles);
//   return allCircles;
// }
//
// function resizeAllCircles(circles, display) {}
//
// /**
//  * Creates the playerCircle's radial gradient
//  * @function createRadialGradient
//  * @param {number} hue -- playerCircle's hue
//  * @param {number} saturation -- playerCircle's saturation
//  * @param {number} lightness -- playerCircle's lightness
//  * @param {number} id -- playerCircle's player id
//  * @param {Object} centerPoint -- display grid's center position along x and y axis
//  * @returns {JSX.Element} <radialGradient />
//  * */
// function createRadialGradient(id, centerPoint, hue, saturation, lightness) {
//   return (
//     <radialGradient id={`radialGradient${id}`}>
//       <stop
//         offset="10%"
//         stopColor={`hsl(${hue}, ${saturation}%, ${lightness * 1.55}%`}
//       />
//       <stop
//         offset="90%"
//         stopColor={`hsl(${hue}, ${saturation}%, ${lightness}%`}
//       />
//     </radialGradient>
//   );
// }
//
// /**
//  * Creates the animation path for the player's circle
//  * @param {number} id -- playerCircle's player id
//  * @param {Object} centerPoint -- display grid's center position along x and y axis
//  * @param {number} x -- playerCircle's x location
//  * @param {number} y - playerCircle's y location
//  * @param {number} r -- playerCircle's radius
//  * @param {Object} lineDesign -- playerCircle's stroke properties
//  * @returns {JSX.Element} <path />
//  */
// function createLinearPath(id, centerPoint, x, y, r, lineDesign) {
//   if (lineDesign !== null) {
//     return (
//       <path
//         id={`linearPath${id}`}
//         d={`m${x},${y} L${centerPoint.x},${centerPoint.y} ${x},${y}`}
//         style={{ ...lineDesign }}
//       />
//     );
//   }
//
//   return (
//     <path
//       id={`linearPath${id}`}
//       d={`m${x},${y} L${centerPoint.x},${centerPoint.y} ${x},${y}`}
//     />
//   );
// }
//
// function circlePathTemplate(cx, cy, r) {
//   return `M ${cx} ${cy} m -${r}, 0 a ${r},${r} 0 1,0 ${
//     r * 2
//   },0 a ${r},${r} 0 1,0 -${r * 2},0 `;
// }
//
// function createPathAndAnimation(playerCircle, id) {
//   let path;
//   let animation;
//
//   if (playerCircle.isAnimated) {
//     animation = (
//       <animateMotion dur="10s" repeatCount="indefinite">
//         <mpath href={`#linearPath${id}`} />
//       </animateMotion>
//     );
//     path = circlePathTemplate(0, 0, playerCircle.radius);
//   } else {
//     animation = null;
//     path = circlePathTemplate(
//       playerCircle.xCartesian,
//       playerCircle.yCartesian,
//       playerCircle.radius
//     );
//   }
//
//   return { path, animation };
// }

/**
 * Export necessary pieces
 */
export {
  circleAlterations,
  // rerenderCircles,
  // resizeAllCircles,
  // circlePathTemplate,
  // createPathAndAnimation,
  // createRadialGradient,
  // createLinearPath,
};

/**
 * Initial circle creation
 * @function initialCircleVariable
 * @param {object} responses -- Current player responses
 * @param {object} displayGrid -- Current size of the display grid
 * @return {Object} circle -- Updated player circle object
 * */
function initialCircleVariables(responses, displayGrid) {
  centerPoint.x = displayGrid.cx;
  centerPoint.y = displayGrid.cy;

  const { degree, slice } = setPlayerDegree(
    responses.interest,
    responses.gender,
    responses.diet
  );
  const { xCartesian, yCartesian } = convertToCartesian(
    centerPoint,
    responses.age,
    degree
  );
  const radius = setCircleRadius(responses.association);

  const initialCircleData = {
    degree: degree,
    slice: slice,
    xCartesian: xCartesian,
    yCartesian: yCartesian,
    radian: responses.age,
    radius: radius,
    design: "initialCircle",
    ...createFillColor(responses.height, degree),
  };

  let circleData = {
    ...initialCircleData,
    isAnimated: true,
    design: "defaultCircle",
  };

  return { circleData, initialCircleData };
}

/**
 * CA#1 -- radius
 * @function circleAlterationOne
 * @param {object} responses -- Current player responses
 * @param {object} circleData -- Current player circle
 * */
function circleAlterationOne(responses, circleData) {
  const updatedRadius = altRadius(
    circleData.radius,
    responses.time,
    responses.personality
  );
  circleData = {
    ...circleData,
    radius: updatedRadius,
  };

  return { circleData };
}

/**
 * CA#2 -- position
 * @function circleAlterationTwo
 * @param {object} responses -- Current player responses
 * @param {object} circleData -- Current player circle
 * */
function circleAlterationTwo(responses, circleData) {
  circleData = {
    ...circleData,
    ...altCartesian(
      centerPoint,
      circleData.degree,
      circleData.radian,
      responses.food,
      responses.hair
    ),
  };
  return { circleData };
}

/**
 * CA#3 -- design and color
 * @function circleAlterationThree
 * @param {object} responses -- Current player responses
 * @param {object} circleData -- Current player circle
 * */
function circleAlterationThree(responses, circleData) {
  const secondaryColor = createSecondaryColor(
    responses.progress,
    circleData.hue,
    circleData.saturation,
    circleData.lightness
  );
  const altDesignWeight = setAlternateDesignWeight(
    circleData.radius,
    responses.media
  );
  circleData = {
    ...circleData,
    secondaryColor,
    design: responses.nature,
    designThickness: altDesignWeight,
  };

  return { circleData };
}

/**
 * CA#4 -- animation path
 * @function circleAlterationFour
 * @param {object} responses -- Current player responses
 * @param {object} circleData -- Current player circle
 * */
function circleAlterationFour(responses, circleData) {
  const lineDesign = createLineDesign(responses.religion, "hsl(0, 0%, 50%)");
  circleData = {
    ...circleData,
    lineDesign,
  };

  return { circleData };
}

/**
 * CA#5 -- average color
 * @function circleAlterationFive
 * @param {object} responses -- Current player responses
 * @param {object} circleData -- Current player circle
 * */
function circleAlterationFive(responses, circleData) {
  const averageColor = averageColors(
    responses.color,
    circleData.hue,
    circleData.saturation,
    circleData.lightness
  );
  circleData = {
    ...circleData,
    ...averageColor,
    isAnimated: false,
  };

  return { circleData };
}

/**
 * CA#6 -- final display
 * @function circleAlterationSix
 * @param {object} player -- Current player object
 * */
// function finalCircleDisplay(player, circleData) {
//   let { circle, circles } = player;
//   circle = {
//     ...circle,
//   };
//   circle.lineDesign = createLineDesign(player.religion, circle.initial.color);
//   console.log(circle.lineDesign);
//   let circleSVG = createCircleDesign(currentPlayerId, circle, centerPoint);
//   circles.push(circleSVG);
//   return circles;
// }
