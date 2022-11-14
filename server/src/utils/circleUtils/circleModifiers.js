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
  createRadian,
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
};

/**
 * Initial circle creation
 * @function initialCircleVariable
 * @param {object} responses -- Current player responses
 * @param {object} centerPoint -- Current center of the display grid
 * @return {Object} circle -- Updated player circle object
 * */
function initialCircleVariables(responses, centerPoint, radiusMultiplier) {
  const radius = setCircleRadius(radiusMultiplier);
  const radian = createRadian(responses.age, radius);

  const { degree, slice } = setPlayerDegree(
    responses.curiosity,
    responses.hair,
    responses.diet
  );
  const { xCartesian, yCartesian } = convertToCartesian(
    centerPoint,
    radian,
    degree
  );

  const linearDPath = createLinearDPath(
    centerPoint,
    xCartesian,
    yCartesian,
    radian,
    degree
  );

  const initialCircleData = {
    linearDPath,
    degree: degree,
    slice: slice,
    xCartesian: xCartesian,
    yCartesian: yCartesian,
    radian,
    radius: radius,
    isAnimated: false,
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
  const animationDPath = createLinearDPath(
    centerPoint,
    circleData.xCartesian,
    circleData.yCartesian,
    circleData.radian,
    circleData.degree,
    true
  );

  const updatedRadius = altRadius(
    circleData.radius,
    responses.leaning,
    responses.personality
  );
  circleData = {
    ...circleData,
    animationDPath,
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
  const { degree, xCartesian, yCartesian } = altCartesian(
    centerPoint,
    circleData.degree,
    circleData.radian,
    responses.food,
    responses.productivity
  );

  const linearDPath = createLinearDPath(
    centerPoint,
    xCartesian,
    yCartesian,
    circleData.radian,
    degree
  );
  const animationDPath = createLinearDPath(
    centerPoint,
    xCartesian,
    yCartesian,
    circleData.radian,
    degree,
    true
  );
  circleData = {
    ...circleData,
    degree,
    xCartesian,
    yCartesian,
    linearDPath,
    animationDPath,
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
  const lineDesign = createLineDesign(
    responses.religion,
    responses.culture,
    {
      hue: circleData.hue,
      saturation: circleData.saturation,
      lightness: circleData.lightness,
    },
    3
  );
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
  let colorToAverage =
    circleData.design === "hollow"
      ? circleData.secondaryColor
      : circleData.color;
  const { color, ...rest } = averageColors(responses.color, colorToAverage);
  circleData = {
    ...circleData,
    ...rest,
    secondaryColor:
      circleData.design === "hollow" ? color : circleData.secondaryColor,
    isAnimated: false,
  };
  return { circleData };
}
