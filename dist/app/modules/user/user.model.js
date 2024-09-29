"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photoUrl: { type: String },
    following: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }],
    followers: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }],
    verified: { type: Boolean, default: false },
    role: { type: String, enum: ["admin", "user"], default: "user" },
}, { timestamps: true });
exports.User = (0, mongoose_1.model)("User", userSchema);
