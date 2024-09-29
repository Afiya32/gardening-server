"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const router = (0, express_1.Router)();
// Signup route
router.post("/signup", user_controller_1.userController.signupUser);
// Login route
router.post("/login", user_controller_1.userController.loginUser);
// Update user route
router.put("/:id", user_controller_1.userController.updateUser);
// Delete user route
router.delete("/:id", user_controller_1.userController.deleteUser);
// Get user by ID route
router.get("/:id", user_controller_1.userController.findUserById);
exports.userRoutes = router;
