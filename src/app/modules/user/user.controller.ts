// user controller
import { Request, Response } from "express";
import { userServices } from "./user.services";

const handleError = (error: unknown): string => {
    if (error instanceof Error) {
      return error.message;
    }
    return "Unknown error occurred";
  };

// Signup controller
const signupUser = async (req: Request, res: Response) => {
    try {
      const newUser = await userServices.signupUser(req.body);
      res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        res.status(400).json({ success: false, message: handleError(error) });
    }
  };
  
  // Login controller
  const loginUser = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const { user, token } = await userServices.loginUser(email, password);
      res.status(200).json({ success: true, data: { user, token } });
    } catch (error) {
        res.status(400).json({ success: false, message: handleError(error) });
    }
  };
  
  // Update user controller
  const updateUser = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
      const updatedUser = await userServices.updateUser(userId, req.body);
      res.status(200).json({ success: true, data: updatedUser });
    } catch (error) {
        res.status(400).json({ success: false, message: handleError(error) });
    }
  };
  
  // Delete user controller
  const deleteUser = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
      const deletedUser = await userServices.deleteUser(userId);
      res.status(200).json({ success: true, data: deletedUser });
    } catch (error) {
        res.status(400).json({ success: false, message: handleError(error) });
    }
  };
  
  // Find user by ID controller
  const findUserById = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
      const user = await userServices.findUserById(userId);
      res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, message: handleError(error) });
    }
  };
  
  export const userController = {
    signupUser,
    loginUser,
    updateUser,
    deleteUser,
    findUserById,
  };