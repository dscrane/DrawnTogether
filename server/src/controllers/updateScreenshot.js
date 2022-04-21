import fs from "fs";
import path from "path";
import { Game } from "../models/game.js";
import { log } from "../utils/logs.js";

export const updateScreenshot = async (socket, screenshotData) => {
  try {
    const __dirname = path.resolve();
    let game = await Game.findById(socket.handshake.auth.gameId);
    const screenshotBase64String = screenshotData.split(";base64,").pop();
    game.screenshot = screenshotBase64String;
    await game.save();

    await fs.writeFile(
      path.join(
        __dirname,
        `/uploads/temp/screenshot_${socket.handshake.auth.gameId}.png`
      ),
      screenshotBase64String,
      { encoding: "base64" },
      (err) => {
        if (err) {
          throw {
            name: "Screenshot File Error",
            cause: err,
          };
        }
      }
    );

    socket.emit("screenshot-taken", { screenshot: true }, (status) => {
      status
        ? log.socket(
            socket.handshake.auth.gameId,
            "final screenshot successful"
          )
        : log.socketError(socket.id, "final screenshot failed");
    });
  } catch (err) {
    log.red(err);
    socket.emit("error", err);
  }
};
