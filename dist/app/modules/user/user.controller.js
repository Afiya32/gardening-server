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
exports.userController = void 0;
const user_services_1 = require("./user.services");
const handleError = (error) => {
    if (error instanceof Error) {
        return error.message;
    }
    return "Unknown error occurred";
};
// Signup controller
const signupUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield user_services_1.userServices.signupUser(req.body);
        res.status(201).json({ success: true, data: newUser });
    }
    catch (error) {
        res.status(400).json({ success: false, message: handleError(error) });
    }
});
// Login controller
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const { user, token } = yield user_services_1.userServices.loginUser(email, password);
        res.status(200).json({ success: true, data: { user, token } });
    }
    catch (error) {
        res.status(400).json({ success: false, message: handleError(error) });
    }
});
// Update user controller
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const updatedUser = yield user_services_1.userServices.updateUser(userId, req.body);
        res.status(200).json({ success: true, data: updatedUser });
    }
    catch (error) {
        res.status(400).json({ success: false, message: handleError(error) });
    }
});
// Delete user controller
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const deletedUser = yield user_services_1.userServices.deleteUser(userId);
        res.status(200).json({ success: true, data: deletedUser });
    }
    catch (error) {
        res.status(400).json({ success: false, message: handleError(error) });
    }
});
// Find user by ID controller
const findUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const user = yield user_services_1.userServices.findUserById(userId);
        res.status(200).json({ success: true, data: user });
    }
    catch (error) {
        res.status(400).json({ success: false, message: handleError(error) });
    }
});
exports.userController = {
    signupUser,
    loginUser,
    updateUser,
    deleteUser,
    findUserById,
};
