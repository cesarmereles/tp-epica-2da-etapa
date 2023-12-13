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
  post: {
    type: Types.ObjectId,
    ref: "Post",
    required: true,
  },
});

export const CommentModel = model("Comment", commentSchema);
