import express from "express";
import { User } from "../models/user.js";
import { validateUpdates } from "../middleware/updateValidation.js";

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
router.patch("/users/update", validateUpdates, async (req, res) => {
  const { _id, responses, toUpdate } = req.body;

  try {
    const user = await User.findById(_id);
    toUpdate.forEach((update) => (user.responses[update] = responses[update]));
    await user.save();
    res.send({ data: user.responses });
  } catch (e) {}
});

// delete user
router.delete("/users/delete/:id", async (req, res) => {});

export { router as userRouter };
