import * as circleUtils from "../utils/circleUtils";
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

test("Creates initial player circle", () => {
  const expectedObject = {
    circleRadius: 40,
    degree: 201,
    fillColor: "hsl(201, 26%, 65%)",
    hue: 201,
    lightness: 37,
    radian: 120,
    slice: 18,
    saturation: 66,
    xCartesian: 513,
    yCartesian: 361,
  };
  const initialCircle = circleUtils.initialCircleVariables(
    players[0],
    { cx: 400, cy: 400 },
    0,
    1
  );
  expect(initialCircle).toEqual({
    circleRadius: expect.toBeInstanceOf(Number),
    degree: expect.toBeInstanceOf(Number),
    fillColor: expect.toBeInstanceOf(String),
    hue: expect.toBeInstanceOf(Number),
    lightness: expect.toBeInstanceOf(Number),
    radian: expect.toBeInstanceOf(Number),
    slice: expect.toBeInstanceOf(Number),
    saturation: expect.toBeInstanceOf(Number),
    xCartesian: expect.toBeInstanceOf(Number),
    yCartesian: expect.toBeInstanceOf(Number),
  });
});
