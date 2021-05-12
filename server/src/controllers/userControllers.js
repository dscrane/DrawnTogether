import express from "express";
import { User } from "../models/user.js";

// create express router
const router = new express.Router();

// get user by id
router.get("/users/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    res.send(user)
})

// create new user
router.post("/users/create", async (req, res) => {
    console.log(req.body)
    const newUser = new User(req.body);
    await newUser.save();

    res.send(newUser)
    console.log(newUser)
})

// update user
router.patch("/users/update", async (req, res) => {

})

// delete user
router.delete("/users/delete/:id", async(req, res) => {

})

export { router as userRouter };