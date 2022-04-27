import fs from "fs";
import path from "path";
import { Game } from "../models/game.js";
import { log } from "../utils/logs.js";

export const updateScreenshot = async (res, { gameId, screenshotData }) => {
  try {
    // Find game by _id
    const game = await Game.findById(gameId);
    // Split the screenshot data into pure base64 string
    const screenshotBase64String = screenshotData.split(";base64,").pop();
    // Update game document screenshot string
    game.screenshot = screenshotBase64String;
    // Save updated game document
    await game.save();

    // Create the directory path
    const __dirname = path.resolve();
    // Write screenshot base64 into a png file and save
    await fs.writeFile(
      path.join(__dirname, `/uploads/temp/screenshot_${gameId}.png`),
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
    // Return status to client
    res.send({ screenshot: true });
    log.controllerSuccess("Updating screenshot for", gameId, "success");
  } catch (err) {
    log.red(err);
  }
};
