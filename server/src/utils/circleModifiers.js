import {
  altRadius,
  altCartesian,
  averageColors,
  createFillColor,
  setCircleRadius,
  setPlayerDegree,
  convertToCartesian,
  createSecondaryColor,
  setAlternateDesignWeight,
  createLineDesign,
  createLinearDPath,
} from "./circleHelpers.js";

/**
 * Variable to pass all functions for ease of use elsewhere
 */
export const circleAlterations = {
  2: initialCircleVariables,
  3: circleAlterationOne,
  4: circleAlterationTwo,
  5: circleAlterationThree,
  6: circleAlterationFour,
  7: circleAlterationFive,
  // 8: finalCircleDisplay,
};

/**
 * Initial circle creation
 * @function initialCircleVariable
 * @param {object} responses -- Current player responses
 * @param {object} centerPoint -- Current center of the display grid
 * @return {Object} circle -- Updated player circle object
 * */
function initialCircleVariables(responses, centerPoint) {
  const { degree, slice } = setPlayerDegree(
    parseInt(responses.curiosity),
    parseInt(responses.productivity),
    responses.diet
  );
  const { xCartesian, yCartesian } = convertToCartesian(
    centerPoint,
    responses.age,
    degree
  );
  const radius = setCircleRadius(parseInt(responses.association));

  const linearDPath = createLinearDPath(
    centerPoint,
    xCartesian,
    yCartesian,
    responses.age,
    degree
  );
  const initialCircleData = {
    linearDPath,
    degree: degree,
    slice: slice,
    xCartesian: xCartesian,
    yCartesian: yCartesian,
    radian: parseInt(responses.age),
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
 * @param {object} centerPoint -- Current diplay center point
 * */
function circleAlterationOne(responses, circleData, centerPoint) {
  const linearDPath = createLinearDPath(
    centerPoint,
    circleData.xCartesian,
    circleData.yCartesian,
    circleData.radian,
    circleData.degree,
    true
  );

  const updatedRadius = altRadius(
    circleData.radius,
    parseInt(responses.leaning),
    parseInt(responses.personality)
  );
  circleData = {
    ...circleData,
    linearDPath,
    radius: updatedRadius,
  };

  return { circleData };
}

/**
 * CA#2 -- position
 * @function circleAlterationTwo
 * @param {object} responses -- Current player responses
 * @param {object} circleData -- Current player circle
 * @param {object} centerPoint -- Current diplay center point
 * */
function circleAlterationTwo(responses, circleData, centerPoint) {
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
  const lineDesign = createLineDesign(responses.religion, "hsl(0,0%,50%)");
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
