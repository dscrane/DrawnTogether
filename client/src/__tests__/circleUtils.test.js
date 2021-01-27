import {
  setCircleRadius,
  setPlayerDegree,
  createFillColor,
  convertToCartesian,
  altRadius,
  altCartesian,
  createAlternateDesignVariables,
  createSecondaryColor,
  averageColors,
} from "../utils/circleUtils";

const testPlayer = {
  circle: {
    radius: 50,
    degree: 275,
    radian: 15,
    hue: 168,
    saturation: 55,
    lightness: 40,
    altHue: 75,
    altLightness: 53,
    altSaturation: 71,
    xCord: 375,
    yCord: 120,
  },
  id: 0,
  name: "test_user",
  association: 5,
  height: 16,
  interest: 18,
  gender: 1,
  age: 120,
  diet: "vegetarian",
  time: 45,
  personality: 31,
  hair: 10,
  money: 2,
  food: 45,
  nature: "hollow",
  media: "thick",
  progress: "monochromatic",
  religion: 1,
  culture: 4,
  color: "kellyGreen",
};

describe("Circle Variables Suite", () => {
  test("SET PLAYER CIRCLE'S RADIUS", () => {
    const radius = setCircleRadius(testPlayer.association);
    expect(radius).toEqual(testPlayer.association * 8);
  });
  test("SET PLAYER CIRCLE'S DEGREE", () => {
    const result = setPlayerDegree(
      testPlayer.interest,
      testPlayer.gender,
      testPlayer.diet
    );
    expect(result).toEqual(
      expect.objectContaining({
        slice: expect.any(Number),
        degree: expect.any(Number),
      })
    );
  });
  test("CREATE PLAYER CIRCLE'S FILL COLOR", () => {
    const degree = Math.floor(Math.random() * 360);
    const result = createFillColor(testPlayer.height, degree);
    expect(result).toEqual(
      expect.objectContaining({
        hue: expect.any(Number),
        lightness: expect.any(Number),
        saturation: expect.any(Number),
        color: expect.any(String),
      })
    );
    expect(result.color).toMatch(/^hsl\([0-9]{1,3},([0-9]{1,3}%,?){1,3}\)$/g);
  });
  test("CONVERT PLAYER CIRCLE'S COORDINATES TO CARTESIAN", () => {
    const result = convertToCartesian(
      400,
      400,
      testPlayer.age,
      testPlayer.circle.degree
    );
    expect(result).toEqual(
      expect.objectContaining({
        xCartesian: expect.any(Number),
        yCartesian: expect.any(Number),
      })
    );
  });
  test("ALTER PLAYER CIRCLE'S RADIUS", () => {
    const result = altRadius(
      testPlayer.circle.radius,
      testPlayer.time,
      testPlayer.personality
    );
    expect(result).toEqual(expect.any(Number));
  });
  test("ALTER PLAYER CIRCLE'S CARTESIAN COORDINATES", () => {
    const result = altCartesian(
      400,
      400,
      testPlayer.circle.degree,
      testPlayer.circle.radian,
      testPlayer.food,
      testPlayer.hair
    );
    expect(result).toEqual(
      expect.objectContaining({
        altDegree: expect.any(Number),
        altXCartesian: expect.any(Number),
        altYCartesian: expect.any(Number),
      })
    );
  });
  test("SET PLAYER CIRCLE'S DESIGN VARIABLE", () => {
    const result = createAlternateDesignVariables(
      testPlayer.circle.radius,
      testPlayer.media
    );
    expect(result).toEqual(expect.any(Number));
  });
  test("CREATE PLAYER CIRCLE'S SECONDARY COLOR", () => {
    const result = createSecondaryColor(
      testPlayer.progress,
      testPlayer.circle.hue,
      testPlayer.circle.saturation,
      testPlayer.circle.lightness
    );
    expect(result).toEqual(
      expect.objectContaining({
        secondaryColor: expect.any(String),
        altHue: expect.any(Number),
      })
    );
    expect(result.secondaryColor).toMatch(
      /^hsl\([0-9]{1,3},([0-9]{1,3}%,?){1,3}\)$/g
    );
  });
  test("AVERAGE PLAYER CIRCLE'S FILL COLOR AND CHOSEN COLOR", () => {
    const result = averageColors(
      testPlayer.color,
      testPlayer.circle.altHue,
      testPlayer.circle.saturation,
      testPlayer.circle.lightness
    );
    expect(result).toEqual(
      expect.objectContaining({
        averageHue: expect.any(Number),
        averageSaturation: expect.any(Number),
        averageLightness: expect.any(Number),
      })
    );
    expect(result);
  });
});

describe("Circle SVG Suite", () => {
  test("CREATE CIRCLE SVG REACT COMPONENT", () => {
    expect(result);
  });

  test("CREATE SVG GRADIENT REACT COMPONENT", () => {
    expect(result);
  });
});

describe("Alteration Step Suite", () => {
  test("CREATE INITIAL PLAYER CIRCLE", () => {
    expect(result);
  });

  test("FIRST CIRCLE ALTERATION", () => {
    expect(result);
  });
});
