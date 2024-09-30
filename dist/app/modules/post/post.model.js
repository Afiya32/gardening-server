"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
// post model
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.Post = (0, mongoose_1.model)("Post", PostSchema);
