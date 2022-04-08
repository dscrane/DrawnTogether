import { circleAlterationsSuite } from "./circleAlterations.test.js";

describe("CM Stress", () => {
  for (let i = 0; i < 50; i++) {
    describe("Circle modifications", circleAlterationsSuite);
  }
});
