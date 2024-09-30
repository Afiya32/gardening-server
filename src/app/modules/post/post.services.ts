// post service
import { IPost } from "./post.interface";
import { Post } from "./post.model";

const createPost = async (postData: IPost) => {
    const newPost = await Post.create(postData);
    return newPost;
  };
  
  // Get all posts
  const getAllPosts = async () => {
    const posts = await Post.find().populate("author", "name email");
    return posts;
  };
  
  // Get posts by user (my posts)
  const getMyPosts = async (userId: string) => {
    const posts = await Post.find({ author: userId });
    return posts;
  };
  
  // Update a post
  const updatePost = async (id: string, updateData: Partial<IPost>) => {
    const updatedPost = await Post.findByIdAndUpdate(id, updateData, { new: true });
    return updatedPost;
  };
  
  // Delete a post
  const deletePost = async (id: string) => {
    const deletedPost = await Post.findByIdAndDelete(id);
    return deletedPost;
  };
  
  export const postServices = {
    createPost,
    getAllPosts,
    getMyPosts,
    updatePost,
    deletePost,
  };