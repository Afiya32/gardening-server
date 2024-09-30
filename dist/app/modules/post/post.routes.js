"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// post routes
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("./post.controller");
const router = express_1.default.Router();
// Create a new post (requires authentication)
router.post("/", post_controller_1.postController.createPost);
// Get all posts
router.get("/", post_controller_1.postController.getAllPosts);
// Get posts of the logged-in user (requires authentication)
router.get("/my-posts", post_controller_1.postController.getMyPosts);
// Update a post (requires authentication)
router.patch("/:id", post_controller_1.postController.updatePost);
// Delete a post (requires authentication)
router.delete("/:id", post_controller_1.postController.deletePost);
exports.default = router;
