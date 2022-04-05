import { circleAlterations } from "../../utils/circleModifiers.js";

import { mockResponses } from "../mockData/mockResponses.js";
import {
  altRadius,
  convertToCartesian,
  createFillColor,
  setCircleRadius,
  setPlayerDegree,
} from "../../utils/circleHelpers.js";
describe.skip("", () => {
  it("", () => {});
});
// describe("Database functionality", () => {
//   let connection;
//   let db;
//   let circles;
//   let users;
//   let games;
//
//   beforeAll(async () => {
//     connection = await MongoClient.connect(global.__MONGO_URI__, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     db = await connection.db();
//     circles = db.collection("circles");
//     users = db.collection("users");
//     games = db.collection("games");
//   });
//
//   afterAll(async () => {
//     if (connection) {
//       await connection.close();
//     }
//   });
//   console.log(global.__MONGO_URI__);
//
//   describe("Player collection functions", () => {
//     it("PLAYER generate a new player", async () => {});
//
//     it("PLAYER update player document", async () => {});
//   });
//   describe("Game collection functions", () => {
//     it("GAME generate new game", async () => {
//       const mockGame = {
//         _id: "FJ4960-2068FG2",
//         inProgress: false,
//         complete: false,
//         timestamp: Date.now(),
//       };
//
//       await games.insertOne(mockGame);
//
//       const generatedGame = await games.findOne({ _id: "FJ4960-2068FG2" });
//
//       expect(generatedGame).toEqual(mockGame);
//     });
//
//     it("GAME end game", () => {});
//   });
//
//   describe("Circle collection functions", () => {
//     it("CIRCLE generate new circle", async () => {});
//
//     it("CIRCLE update circle document", () => {});
//   });
// });

// describe("Generate Session", () => {
//   test("POST /games/generateSession should create game instance", async () => {
//     const res = await request(httpServer).post("/games/generateSession");
//     expect(res.statusCode).toEqual(200);
//     // expect(res.body).toHaveProperty("game");
//   });
// });
