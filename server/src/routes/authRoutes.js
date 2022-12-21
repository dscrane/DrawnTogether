import express from "express";
import { Game } from "../models/game.js";

const allScreenshots = async () => {
  const games = await Game.find({
    screenshot: { $ne: null },
    complete: true,
  }).exec();

  let screenshots = [];
  for (let game in games) {
    screenshots.push(
      `
<div class="screenshot">

    <img class="img" src="data:image/png;base64,${games[game].screenshot}" />
</div>`
    );
  }
  return screenshots.join("");
};

const router = new express.Router();

router.post("/login", (req, res) => {
  if (req.body.username === "carriecrane" && req.body.password === "ccartist") {
    res.redirect(301, "/admin/auth");
  } else {
    res.redirect(301, "/admin");
  }
  res.end();
});

router.get("/admin", async (req, res) => {
  res.send(`
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
            <form action="/login" method="post">
            <label>Username</label>
            <input type="text" name="username">
            <label>Password</label>
            <input type="password" name="password">
            <input type="submit" value="Submit" />
            </form>

        </body>
        </html>
`);
});

router.get("/admin/auth", async (req, res) => {
  const screenshots = await allScreenshots();
  res.send(`
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
        <div class="screenshots">
            ${screenshots}
</div>
        </body>
        </html>
`);
});

export { router as adminRouter };
