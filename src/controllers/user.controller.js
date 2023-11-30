import { UserModel } from "../models/user.model.js";

export const ctrolNewUser = async (req, res) => {
  try {
    const newUser = UserModel(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
