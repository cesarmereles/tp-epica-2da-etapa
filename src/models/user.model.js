import { Schema, Types, model } from "mongoose";
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  avatarURL: {
    type: String,
    required: false,
  },
  comment: [
    {
      type: Types.ObjectId,
      ref: "Comment",
    },
  ],
});

export const UserModel = model("User", userSchema);
