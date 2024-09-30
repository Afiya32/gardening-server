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
exports.postServices = void 0;
const post_model_1 = require("./post.model");
const createPost = (postData) => __awaiter(void 0, void 0, void 0, function* () {
    const newPost = yield post_model_1.Post.create(postData);
    return newPost;
});
// Get all posts
const getAllPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield post_model_1.Post.find().populate("author", "name email");
    return posts;
});
// Get posts by user (my posts)
const getMyPosts = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield post_model_1.Post.find({ author: userId });
    return posts;
});
// Update a post
const updatePost = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedPost = yield post_model_1.Post.findByIdAndUpdate(id, updateData, { new: true });
    return updatedPost;
});
// Delete a post
const deletePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedPost = yield post_model_1.Post.findByIdAndDelete(id);
    return deletedPost;
});
exports.postServices = {
    createPost,
    getAllPosts,
    getMyPosts,
    updatePost,
    deletePost,
};
