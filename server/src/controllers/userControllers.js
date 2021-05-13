import express from "express";
import { User } from "../models/user.js";
import { validateResponses } from "../utils/validateResponses.js";

// create express router
const router = new express.Router();

// get user by id
router.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
});

// create new user
router.post("/users/create", async (req, res) => {
  const newUser = await new User(req.body).save();
  res.send(newUser);
});

// update user
router.patch("/users/update", async (req, res) => {
  const { _id, responses, updateStep } = req.body;
  console.log(responses);
  const toUpdate = Object.keys(responses);
  // TODO: - change form behaviour from redux form
  //       - test for correct and fail behaviour
  // BROKEN
  // const isValid = await validateResponses(toUpdate, updateStep);
  // if (!isValid) {
  //   return res.send({
  //     error: {
  //       message:
  //         "An error has occurred, please try entering your responses again.",
  //     },
  //   });
  // }

  try {
    const user = await User.findById(_id);
    toUpdate.forEach((update) => (user.responses[update] = responses[update]));
    await user.save();
    res.send(user.responses);
  } catch (e) {
    console.log(e);
  }
});

// delete user
router.delete("/users/delete/:id", async (req, res) => {});

export { router as userRouter };
