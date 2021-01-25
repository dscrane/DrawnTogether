const circleUtils = require("../utils/circleUtils");

const players = [
  {
    id: 0,
    name: "test_user",
    association: 5,
    circle: {},
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
  ...expectedCircle,
  altDegree: expect.any(Number),
  altXCartesian: expect.any(Number),
  altYCartesian: expect.any(Number),
};

test("CREATE INITIAL PLAYER CIRCLE", () => {
  const initialCircle = circleUtils.initialCircleVariables(
    players[0],
    { cx: 400, cy: 400 },
    0,
    3
  );
  console.log("initialCircle", initialCircle);
  expect(initialCircle).toEqual(expect.objectContaining(expectedCircle));
});

test("FIRST CIRCLE ALTERATION", () => {
  const initialCircle = circleUtils.initialCircleVariables(
    players[0],
    { cx: 400, cy: 400 },
    0,
    4
  );
  console.log("initialCircle", initialCircle);
  expect(initialCircle).toEqual(expect.objectContaining(alterationOneCircle));
});
