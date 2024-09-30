// post routes
import express from "express";
import { postController } from "./post.controller";
const router = express.Router();

// Create a new post (requires authentication)
router.post("/",  postController.createPost);

// Get all posts
router.get("/", postController.getAllPosts);

// Get posts of the logged-in user (requires authentication)
router.get("/my-posts", postController.getMyPosts);

// Update a post (requires authentication)
router.patch("/:id",  postController.updatePost);

// Delete a post (requires authentication)
router.delete("/:id",  postController.deletePost);

export default router;