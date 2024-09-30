// user routes
import { Router } from "express";
import { userController } from "./user.controller";

const userRoutes = Router();

// Signup route
userRoutes.post("/signup", userController.signupUser);

// Login route
userRoutes.post("/login", userController.loginUser);

// Update user route
userRoutes.put("/:id", userController.updateUser);

// Delete user route
userRoutes.delete("/:id", userController.deleteUser);

// Get user by ID route
userRoutes.get("/:id", userController.findUserById);

export default userRoutes;