// post model
import { model, Schema } from "mongoose";
import { IPost } from "./post.interface";

const PostSchema = new Schema<IPost>(
    {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        ref: "User", // Assuming you have a user model
        required: true,
      },
      photoUrl: {
        type: String,
      },
      isPremium: {
        type: Boolean,
        default: false,
      },
      upvotes: {
        type: Number,
        default: 0,
      },
      downvotes: {
        type: Number,
        default: 0,
      },
    },
    { timestamps: true }
  );
  
  export const Post = model<IPost>("Post", PostSchema);