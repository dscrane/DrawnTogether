import express from "express";


const router = new express.Router();

router.post("/players/update", async (req, res) => {
  console.log(req.body._id);

  // const player = await Player.findById(req.body._id)
  // const updates = Object.keys(req.body);
  //
  // try {
  //   updates.forEach(update => {player[update] = req.body[update]});
  //   await player.save();
  //   res.send(player);
  // } catch (e) {
  //   console.log(e)
  //   res.sendStatus(418)
  // }
})

export { router as playerRouter };