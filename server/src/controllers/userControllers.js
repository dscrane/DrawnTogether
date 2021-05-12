import express from "express";
import { User } from "../models/user.js";
import { updatePlayers } from "../utils/updatePlayers.js";

// create express router
const router = new express.Router();

// get user by id
router.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
});

// create new user
router.post("/users/create", async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();

  res.send(newUser);
});

// update user
router.patch("/users/update", async (req, res) => {
  const { _id, responses, updateStep } = req.body;
  const toUpdate = Object.keys(responses);

  // validate updates here
  //
  try {
    const user = await User.findById(_id);

    toUpdate.forEach((update) => {
      user.responses[update] = responses[update];
    });
    console.log(user);
    await user.save();
    console.log(user.responses);
    res.send(user.responses);
  } catch (e) {
    console.log(e);
  }
});

// delete user
router.delete("/users/delete/:id", async (req, res) => {});

export { router as userRouter };
