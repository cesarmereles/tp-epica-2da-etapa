import { Schema, Types, model } from "mongoose";
const commentSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  user: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const CommentModel = model("Comment", commentSchema);
