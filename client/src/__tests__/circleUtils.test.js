import { circleUtils } from "../utils/";

let circle;
const testPlayer = {
  circle: circle,
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

const expectedCircle = {
  circleRadius: expect.any(Number),
  degree: expect.any(Number),
  fillColor: expect.any(String),
  hue: expect.any(Number),
  lightness: expect.any(Number),
  radian: expect.any(Number),
  slice: expect.any(Number),
  saturation: expect.any(Number),
  xCartesian: expect.any(Number),
  yCartesian: expect.any(Number),
};

const alterationOneCircle = {
  circleRadius: expect.any(Number),
  degree: expect.any(Number),
  fillColor: expect.any(String),
  hue: expect.any(Number),
  lightness: expect.any(Number),
  radian: expect.any(Number),
  slice: expect.any(Number),
  saturation: expect.any(Number),
  xCartesian: expect.any(Number),
  yCartesian: expect.any(Number),
  circleSVG: expect.any(Object),
  altRadius: expect.any(Number),
};

const alterationTwoCircle = {
  ...alterationOneCircle,
  altDegree: expect.any(Number),
  altXCartesian: expect.any(Number),
  altYCartesian: expect.any(Number),
};
describe("Circle Utility Test Suite", () => {
  test("SET PLAYER CIRCLE'S RADIUS", () => {
    const radius = circleUtils.setCircleRadius(testPlayer.association);
    expect(radius).toEqual(testPlayer.association * 8);
  });

  test("SET PLAYER CIRCLE'S DEGREE", () => {
    const result = circleUtils.setPlayerDegree(
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
    const result = circleUtils.createFillColor(testPlayer.height, degree);
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
    expect(result);
  });

  test("ALTER PLAYER CIRCLE'S RADIUS", () => {
    expect(result);
  });

  test("ALTER PLAYER CIRCLE'S CARTESIAN COORDINATES", () => {
    expect(result);
  });

  test("SET PLAYER CIRCLE'S DESIGN VARIABLE", () => {
    expect(result);
  });

  test("CREATE PLAYER CIRCLE'S SECONDARY COLOR", () => {
    expect(result);
  });

  test("AVERAGE PLAYER CIRCLE'S FILL COLOR AND CHOSEN COLOR", () => {
    expect(result);
  });

  test("CREATE CIRCLE SVG REACT COMPONENT", () => {
    expect(result);
  });

  test("CREATE SVG GRADIENT REACT COMPONENT", () => {
    expect(result);
  });
});

// test("CREATE INITIAL PLAYER CIRCLE", () => {
//   circle = circleUtils.initialCircleVariables(
//     testPlayer,
//     { cx: 400, cy: 400 },
//     0,
//     3
//   );
//
//   expect(circle).toEqual(expect.objectContaining(expectedCircle));
// });

/*test("FIRST CIRCLE ALTERATION", () => {
  circle = circleUtils.circleAlterationOne(players[0], { cx: 400, cy: 400 }, 4);
  expect(circle).toEqual(expect.objectContaining(alterationOneCircle));
});*/
