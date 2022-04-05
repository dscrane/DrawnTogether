import { mockResponses } from "../../testing/mockData/mockResponses.js";
import {
  altCartesian,
  altRadius,
  averageColors,
  convertToCartesian,
  createFillColor,
  createLineDesign,
  createSecondaryColor,
  setAlternateDesignWeight,
  setCircleRadius,
  setPlayerDegree,
} from "../circleHelpers.js";
import { circleAlterations } from "../circleModifiers.js";

const createDataModel = (changes = {}) => {
  return {
    degree: expect.toBeWithinRange(0, 360),
    slice: expect.toBeWithinRange(0, 45),
    xCartesian: expect.toBeWithinRange(0, 1920),
    yCartesian: expect.toBeWithinRange(0, 1080),
    radian: expect.any(Number),
    radius: expect.toBeWithinRange(0, 400),
    design: expect.stringMatching(
      /hollow||stroke||ring||dot||(initial||default)Circle/g
    ),
    color: expect.stringMatching(/hsl\([0-9]{1,3},([0-9]{1,2}%,?){2}\)/g),
    hue: expect.toBeWithinRange(0, 365),
    saturation: expect.toBeWithinRange(27, 75),
    lightness: expect.toBeWithinRange(25, 73),
    ...changes,
  };
};
expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});
export const circleAlterationsSuite = () => {
  const centerPoint = { x: 960, y: 540 };
  const allResponses = mockResponses();
  let circleDataResult;

  describe("Initial Circle Variables", () => {
    const responses = allResponses[0];
    let degree;
    let initialCircleDataResult;
    describe("Initial Circle Helpers", () => {
      it("Should create circle degree and slice", () => {
        const result = setPlayerDegree(
          responses.interest,
          responses.gender,
          responses.diet
        );
        degree = result.degree;
        expect(result).toMatchObject({
          degree: expect.toBeWithinRange(0, 360),
          slice: expect.toBeWithinRange(0, 45),
        });
      });

      it("Should create circle cartesian position", () => {
        const result = convertToCartesian(centerPoint, responses.age, degree);
        expect(result).toMatchObject({
          xCartesian: expect.toBeWithinRange(0, 1920),
          yCartesian: expect.toBeWithinRange(0, 1080),
        });
      });

      it("Should create circle radius", () => {
        const result = setCircleRadius(responses.association);
        expect(result).toStrictEqual(expect.any(Number));
      });

      it("Should create the HSL color string for fill", () => {
        const result = createFillColor(responses.height, degree);
        expect(result).toMatchObject({
          color: expect.stringMatching(/hsl\([0-9]{1,3},([0-9]{1,2}%,?){2}\)/g),
          hue: expect.toBeWithinRange(0, 360),
          saturation: expect.toBeWithinRange(27, 75),
          lightness: expect.toBeWithinRange(25, 73),
        });
      });
    });
    describe("initialCircleVariables()", () => {
      const { circleData, initialCircleData } = circleAlterations[2](
        responses,
        centerPoint
      );
      circleDataResult = circleData;
      initialCircleDataResult = initialCircleData;
      it("Should return the initialCircleData object", () => {
        const initialCircleDataModel = createDataModel();
        expect(initialCircleData).toMatchObject(initialCircleDataModel);
      });

      it("Should return the circleData object", () => {
        const circleDataModel = createDataModel({
          isAnimated: true,
        });
        expect(circleData).toMatchObject(circleDataModel);
      });
    });
  });
  describe("Circle Alteration #1", () => {
    const responses = allResponses[1];
    describe("Alteration #1 Helpers", () => {
      it("Should update the the circle radius", () => {
        const result = altRadius(
          circleDataResult.radius,
          responses.time,
          responses.personality
        );
        expect(result).toStrictEqual(expect.any(Number));
      });
    });
    describe("circleAlterationOne()", () => {
      it("Should update radius", () => {
        const { circleData } = circleAlterations[3](
          responses,
          circleDataResult
        );

        expect(circleData.radius === circleDataResult.radius).toBe(false);
        expect(Object.keys(circleData)).toEqual(
          expect.arrayContaining(Object.keys(createDataModel()))
        );
      });
    });
  });
  describe("Circle Alteration #2", () => {
    const responses = allResponses[2];
    describe("Alteration #2 Helpers", () => {
      it("Should recalculate the position data", () => {
        const result = altCartesian(
          centerPoint,
          circleDataResult.degree,
          circleDataResult.radian,
          parseInt(responses.food),
          parseInt(responses.hair)
        );

        expect(result).toMatchObject({
          degree: expect.any(Number),
          xCartesian: expect.toBeWithinRange(0, 1920),
          yCartesian: expect.toBeWithinRange(0, 1080),
        });
      });
    });
    describe("circleAlterationTwo()", () => {
      it("Should update degree, xCartesian, yCartesian", () => {
        const { circleData } = circleAlterations[4](
          responses,
          circleDataResult,
          centerPoint
        );

        expect(circleData.degree === circleDataResult.degree).toBe(false);
        expect(
          circleData.xCartesian === circleDataResult.xCartesian &&
            circleData.yCartesian === circleDataResult.yCartesian
        ).toBe(false);

        expect(Object.keys(circleData)).toEqual(
          expect.arrayContaining(Object.keys(createDataModel()))
        );
      });
    });
  });
  describe("Circle Alteration #3", () => {
    const responses = allResponses[3];
    describe("Alteration #3 Helpers", () => {
      it("Should create a secondary HSL color string", () => {
        const result = createSecondaryColor(
          responses.progress,
          circleDataResult.hue,
          circleDataResult.saturation,
          circleDataResult.lightness
        );
        expect(result).toMatch(/hsl\(-?[0-9]{1,3},([0-9]{1,2}%,?){2}\)/g);
      });
      it("Should set a thickness for the design", () => {
        const result = setAlternateDesignWeight(
          circleDataResult.radius,
          responses.media
        );
        expect(result).toBeWithinRange(
          circleDataResult.radius * 0.05,
          circleDataResult.radius * 0.45
        );
      });
    });
    describe("circleAlterationThree", () => {
      it("Should update secondaryColor, designThickness, and design", () => {
        const updatedCircleDataModel = createDataModel({
          secondaryColor: expect.stringMatching(
            /hsl\(-?[0-9]{1,3},([0-9]{1,2}%,?){2}\)/g
          ),
          designThickness: expect.any(Number),
        });
        const { circleData } = circleAlterations[5](
          responses,
          circleDataResult
        );

        expect(Object.keys(circleData)).toEqual(
          expect.arrayContaining(Object.keys(updatedCircleDataModel))
        );
        expect(circleData).toMatchObject(updatedCircleDataModel);
      });
    });
  });
  describe("Circle Alteration #4", () => {
    const responses = allResponses[4];
    const lineDesignModel = () => ({
      strokeDasharray: expect.stringMatching(/(([0-9])?\.?[0-9]*)%\s?/g),
      strokeLinecap: expect.stringMatching(/square||round/),
      stroke: expect.stringMatching(/hsl\([0-9]{1,3},([0-9]{1,2}%,?){2}\)/g),
      strokeWidth: expect.stringMatching(/[0-5]px/),
    });
    describe("Alteration #4 Helpers", () => {
      it("Should create a lineDesign object", () => {
        const result = createLineDesign(responses.religion, "hsl(0,0%,50%)");
        expect(lineDesignModel()).toMatchObject(result);
      });
    });
    describe("circleAlterationFour()", () => {
      it("Should update lineDesign", () => {
        const { circleData } = circleAlterations[6](
          responses,
          circleDataResult
        );
        expect(lineDesignModel()).toMatchObject(circleData.lineDesign);

        const model = createDataModel({
          lineDesign: expect.anything(),
          isAnimated: true,
        });
        expect(Object.keys(circleData)).toEqual(
          expect.arrayContaining(Object.keys(model))
        );
        expect(model).toMatchObject(circleData);
      });
    });
  });
  describe("Circle Alteration #5", () => {
    const responses = allResponses[5];
    describe("Alteration #5 Helpers", () => {
      const result = averageColors(
        responses.color,
        circleDataResult.hue,
        circleDataResult.saturation,
        circleDataResult.lightness
      );
      expect(result).toMatchObject({
        color: expect.stringMatching(/hsl\([0-9]{1,3},([0-9]{1,2}%,?){2}\)/g),
        hue: expect.toBeWithinRange(0, 360),
        saturation: expect.toBeWithinRange(27, 100),
        lightness: expect.toBeWithinRange(25, 73),
      });
    });
    describe("circleAlterationFive()", () => {
      it("It should return an circleData object with updated radius", () => {
        const { circleData } = circleAlterations[7](
          responses,
          circleDataResult
        );

        expect(circleData.hue === circleDataResult.hue).toBe(false);
        expect(circleData.saturation === circleDataResult.saturation).toBe(
          false
        );
        expect(circleData.lightness === circleDataResult.lightness).toBe(false);
        expect(Object.keys(circleData)).toEqual(
          expect.arrayContaining(
            Object.keys(createDataModel({ isAnimated: false }))
          )
        );
      });
    });
  });
};
describe("Circle modifications", circleAlterationsSuite);
