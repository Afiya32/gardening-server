import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

// Signup route
router.post("/signup", userController.signupUser);

// Login route
router.post("/login", userController.loginUser);

// Update user route
router.put("/:id", userController.updateUser);

// Delete user route
router.delete("/:id", userController.deleteUser);

// Get user by ID route
router.get("/:id", userController.findUserById);

export const userRoutes = router;