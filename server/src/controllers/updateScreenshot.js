import {Game} from "../models/game.js";
import fs from "fs";
import path from "path";

export const updateScreenshot = async (socket, screenshotBuffer) => {
  const __dirname = path.resolve();
  let game = await Game.findById(socket.handshake.auth.gameId);
  const screenshotBase64String = screenshotBuffer.split(';base64,').pop()
  game.screenshot = screenshotBase64String;
  await game.save();

  await fs.writeFile(
    path.join(__dirname, `/uploads/temp/screenshot_${socket.handshake.auth.gameId}.png`),
    screenshotBase64String,
    { encoding: 'base64'},
    (err) => {
      if (err) {
        console.log(err)
        return;
      }
      console.log('File created');
    }
  )
  socket.emit('screenshot-taken', {screenshot: true})
}