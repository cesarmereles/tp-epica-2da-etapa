import { Schema, Types, model } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: false,
    },
    user: {
      type: Types.ObjectId,
      ref: "User",
    },
    // comment: {
    //   type: Types.ObjectId,
    //   ref: "Comment",
    // },
  },
  { timestamps: true }
);

export const PostModel = model("Post", postSchema);
