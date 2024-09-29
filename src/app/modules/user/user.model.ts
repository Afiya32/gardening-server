import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photoUrl: { type: String },
    following: [{ type: Schema.Types.ObjectId, ref: "User" }],
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    verified: { type: Boolean, default: false },
    role: { type: String, enum: ["admin", "user"], default: "user" },
  }, { timestamps: true });
  
  export const User = model<IUser>("User", userSchema);