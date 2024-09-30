"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// user routes
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const userRoutes = (0, express_1.Router)();
// Signup route
userRoutes.post("/signup", user_controller_1.userController.signupUser);
// Login route
userRoutes.post("/login", user_controller_1.userController.loginUser);
// Update user route
userRoutes.put("/:id", user_controller_1.userController.updateUser);
// Delete user route
userRoutes.delete("/:id", user_controller_1.userController.deleteUser);
// Get user by ID route
userRoutes.get("/:id", user_controller_1.userController.findUserById);
exports.default = userRoutes;
