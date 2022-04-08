import express from "express";
import nodemailer from "nodemailer";
import multer from "multer";
import { Game } from "../models/game.js";
import cors from "cors";

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname);
  },
});
const screenshot = multer({ storage: storage });
// Router initialization
const router = new express.Router();

router.get("/games/:id", async (req, res) => {
  const game = await Game.findById(req.body._id);
  res.send(game);
});
router.get("/games/screenshot/:id", (req, res) => {
  console.log(req.params);
  res.sendFile(`/Users/daegancrane/Projects/react/circle-art-react/server/uploads/screenshot_${req.params.id}.png`)
})
router.post("/games/generateSession", cors({ origin: "http://localhost:3000" }), async (req, res) => {
  console.log("generate");
  try {
    let newGame = await new Game({
      inProgress: true,
      complete: false,
      timestamp: Date.now(),
    });

    await newGame.save();

    res.send({ game: newGame });
  } catch (e) {
    console.log(e);
  }
});
router.post(
  "/games/sendScreenshot",
  cors({ origin: "http://localhost:3000" }),
  screenshot.single("screenshot"),
  async (req, res) => {
    const { email, screenshotName } = req.body;
    // TODO implement emailing of screenshot to provided email
    // const transporter = nodemailer.createTransport({
    //   service: "smtp.gmail.com",
    //   auth: {
    //     user: "daegancrane@gmail.com",
    //     pass: process.env.GMAIL,
    //   },
    // });
    //
    // const mailOptions = {
    //   from: "daegancrane@gmail.com",
    //   to: "daegancrane@gmail.com",
    //   subject: "Drawn Together Display",
    //   html: `<image src="${screenshotName.slice(0, 35)}" />`,
    //   attachments: [
    //     {
    //       filename: screenshotName,
    //       path: `/uploads/${screenshotName}`,
    //       cid: screenshotName.slice(0, 35),
    //     },
    //   ],
    // };
    //
    // transporter.sendMail(mailOptions, (err, info) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log("Email sent: " + info.response);
    //   }
    // });

    res.send({ screenshotStatus: true });
  }
);
router.post("/games/createPlayerObjects", async (req, res) => {
  console.log(req.body);
  // const { gameId, interest, players } = req.body;
  // try {
  //   console.log('initialize')
  //   const game = await Game.findById(gameId);
  //   const { playersObj, playerIds, circles } = await createPlayerObjects(
  //     players,
  //     game._id
  //   );
  //
  //   game.interest = interest;
  //   game.numPlayers = playerIds.length;
  //   game.playerIds = playerIds;
  //   game.circles = circles;
  //
  //   await game.save();
  //   console.log(game)
  //   res.send({ numPlayers: playerIds.length, playerIds, playersObj });
  // } catch (e) {
  //   console.log(e);
  // }
});

// router.patch("/games/updateGame", async (req, res) => {
//   const { _id, updates } = req.body;
//   const toUpdate = Object.keys(updates);
//
//   try {
//     const game = await Game.findById(_id);
//     toUpdate.forEach((update) => {
//       game[update] = updates[update];
//     });
//     await game.save();
//     res.send(game);
//   } catch (e) {
//     console.log(e);
//   }
// });

export { router as gameRouter };
