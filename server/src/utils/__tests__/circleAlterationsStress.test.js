import { circleAlterationsSuite } from "./circleAlterations.test.js";

describe.skip("CM Stress", () => {
  for (let i = 0; i < 50; i++) {
    describe("Circle modifications", circleAlterationsSuite);
  }
});
