import { Game } from "../models/game.js";

export const getScreenshot = async (res, gameId) => {
  const game = await Game.findById(gameId);

  res.send(
    `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
          <link rel="stylesheet" type="text/css" href="/screenshot.css">
          <title>Drawn Together</title>
        </head>
        
        <body>
          <div id="root">
            <div id="text">
              <h2></h2>
            </div>
            <img src="data:image/png;base64,${game.screenshot}" id="screenshot" alt="screenshot_${gameId}" />
          </div>
        </body>
      </html>
    `
  );
};
