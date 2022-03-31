import { PolarGrid } from "../utils/createPolarGridPath.js";
import { log } from "../utils/logs.js";
import { circleAlterations } from "../utils/circleModifiers.js";
import { initializePlayers } from "../utils/initializePlayers.js";

const createPolarGrid = (gridData) => {
  const polarGrid = new PolarGrid(gridData);
  return polarGrid.polarGridPath;
};

export const socketConfig = (io) => {
  io.on("connection", async (socket) => {
    console.log(socket.id, "connected");

    // socket.on("start-game", (gridData) => {
    //   console.log("start-game hit");
    //
    //   socket.emit("started-game", {
    //     polarGridPath: createPolarGrid(gridData),
    //   });
    // });

    // socket.on("update-player", async ({ updateStep, user, centerPoint }) => {
    //   try {
    //     log.yellow("[APP]: Beginning circle alterations...");
    //     const alterations =
    //       updateStep > 2
    //         ? circleAlterations[updateStep](
    //             user.responses,
    //             user.circleData,
    //             centerPoint
    //           )
    //         : circleAlterations[updateStep](user.responses, centerPoint);
    //     user.circleData = alterations.circleData;
    //     if (alterations.initialCircleData) {
    //       user.initialCircleData = alterations.initialCircleData;
    //     }
    //     await user.save();
    //     // TODO add circle to the games database document
    //     log.green("[APP]: Circle alterations complete");
    //     res.send({
    //       data: {
    //         circleData: user.circleData,
    //         initialCircleData: alterations.initialCircleData
    //           ? user.initialCircleData
    //           : null,
    //       },
    //     });
    //   } catch (e) {
    //     log.red(e.name);
    //     res.send({ error: { ...e } });
    //   }
    // });
    socket.on("fetch-polar-grid", (gridData) => {
      console.log("fetch-polar-grid hit");
      socket.emit("polar-grid", createPolarGrid(gridData));
    });
    socket.on("update-polar-grid", (gridData) => {
      console.log("update-polar-grid hit");
      socket.emit("polar-grid", createPolarGrid(gridData), () =>
        console.log("polarGrid emitted")
      );
    });
    socket.on("initialize-players", async ({ gameId, interest, players }) => {
      console.log(gameId, interest, players);
      console.log("initialized-players hit");
      const { playerIds, playersObj } = await initializePlayers(
        players,
        gameId
      );
      socket.emit("initialized-players", { playerIds, playersObj });
    });
    socket.on("", () => {});
    socket.on("", () => {});
    socket.on("", () => {});
  });
};
