const circleUtils = require("../utils/circleUtils");
let circle;
const players = [
  {
    circle: circle,
    id: 0,
    name: "test_user",
    association: 5,
    height: "16",
    interest: "18",
    gender: "1",
    age: "120",
    diet: "vegetarian",
    time: "45",
    personality: "31",
    hair: "10",
    money: "2",
    food: "45",
    nature: "hollow",
    media: "thick",
    progress: "monochromatic",
    religion: "1",
    culture: "4",
    color: "kellyGreen",
  },
];

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

test("CREATE CIRCLE SVG REACT COMPONENT", () => {});

test("CREATE SVG GRADIENT REACT COMPONENT", () => {});

test("SET PLAYER CIRCLE'S RADIUS", () => {});

test("SET PLAYER CIRCLE'S DEGREE", () => {});

test("CREATE PLAYER CIRCLE'S FILL COLOR", () => {});

test("CONVERT PLAYER CIRCLE'S COORDINATES TO CARTESIAN", () => {});

test("ALTER PLAYER CIRCLE'S RADIUS", () => {});

test("ALTER PLAYER CIRCLE'S CARTESIAN COORDINATES", () => {});

test("SET PLAYER CIRCLE'S DESIGN VARIABLE", () => {});

test("CREATE PLAYER CIRCLE'S SECONDARY COLOR", () => {});

test("AVERAGE PLAYER CIRCLE'S FILL COLOR AND CHOSEN COLOR", () => {});

test("CREATE INITIAL PLAYER CIRCLE", () => {
  circle = circleUtils.initialCircleVariables(
    players[0],
    { cx: 400, cy: 400 },
    0,
    3
  );

  expect(circle).toEqual(expect.objectContaining(expectedCircle));
});

test("FIRST CIRCLE ALTERATION", () => {
  circle = circleUtils.circleAlterationOne(players[0], { cx: 400, cy: 400 }, 4);
  expect(circle).toEqual(expect.objectContaining(alterationOneCircle));
});
