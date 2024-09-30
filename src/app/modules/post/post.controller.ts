// post controller
import { Request, Response } from "express";
import { postServices } from "./post.services";

// error handle

const handleError = (error: unknown): string => {
    if (error instanceof Error) {
      return error.message;
    }
    return "Unknown error occurred";
  };


// Create a new post
 const createPost = async (req: Request, res: Response) => {
    try {
      const postData = req.body; // Assuming req.user contains the logged-in user's info
      const newPost = await postServices.createPost(postData);
      res.status(201).json({ post: newPost });
    } catch (error) {
        res.status(400).json({ success: false, message: handleError(error) });
    }
  };
  
  // Get all posts
 const getAllPosts = async (req: Request, res: Response) => {
    try {
      const posts = await postServices.getAllPosts();
      res.status(200).json({ posts });
    } catch (error) {
        res.status(400).json({ success: false, message: handleError(error) });
    }
  };
  
  // Get my posts
 const getMyPosts = async (req: Request, res: Response) => {
    try {
      const userId = req.body.user._id; // Assuming req.user contains the logged-in user's info
      const posts = await postServices.getMyPosts(userId);
      res.status(200).json({ posts });
    } catch (error) {
        res.status(400).json({ success: false, message: handleError(error) });
    }
  };
  
  // Update a post
 const updatePost= async (req: Request, res: Response) => {
    try {
      const postId = req.params.id;
      const updateData = req.body;
      const updatedPost = await postServices.updatePost(postId, updateData);
      res.status(200).json({ post: updatedPost });
    } catch (error) {
        res.status(400).json({ success: false, message: handleError(error) });
    }
  };
  
  // Delete a post
  const deletePost = async (req: Request, res: Response) => {
    try {
      const postId = req.params.id;
      await postServices.deletePost(postId);
      res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(400).json({ success: false, message: handleError(error) });
    }
  };

  export const postController ={
    deletePost,updatePost,getAllPosts,getMyPosts,createPost
  }