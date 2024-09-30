"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postController = void 0;
const post_services_1 = require("./post.services");
// error handle
const handleError = (error) => {
    if (error instanceof Error) {
        return error.message;
    }
    return "Unknown error occurred";
};
// Create a new post
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postData = req.body; // Assuming req.user contains the logged-in user's info
        const newPost = yield post_services_1.postServices.createPost(postData);
        res.status(201).json({ post: newPost });
    }
    catch (error) {
        res.status(400).json({ success: false, message: handleError(error) });
    }
});
// Get all posts
const getAllPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield post_services_1.postServices.getAllPosts();
        res.status(200).json({ posts });
    }
    catch (error) {
        res.status(400).json({ success: false, message: handleError(error) });
    }
});
// Get my posts
const getMyPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.body.user._id; // Assuming req.user contains the logged-in user's info
        const posts = yield post_services_1.postServices.getMyPosts(userId);
        res.status(200).json({ posts });
    }
    catch (error) {
        res.status(400).json({ success: false, message: handleError(error) });
    }
});
// Update a post
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postId = req.params.id;
        const updateData = req.body;
        const updatedPost = yield post_services_1.postServices.updatePost(postId, updateData);
        res.status(200).json({ post: updatedPost });
    }
    catch (error) {
        res.status(400).json({ success: false, message: handleError(error) });
    }
});
// Delete a post
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postId = req.params.id;
        yield post_services_1.postServices.deletePost(postId);
        res.status(200).json({ message: "Post deleted successfully" });
    }
    catch (error) {
        res.status(400).json({ success: false, message: handleError(error) });
    }
});
exports.postController = {
    deletePost, updatePost, getAllPosts, getMyPosts, createPost
};
