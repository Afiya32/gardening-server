// user service
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import config from "../../config";

// Signup service
 const signupUser = async (userData: IUser) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = await User.create({ ...userData, password: hashedPassword });
    return newUser;
  };
  
  // Login service
   const loginUser = async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error("Invalid credentials");
    }
    
    const token = jwt.sign({ id: user._id, role: user.role }, config.jwt_secret, { expiresIn: "1d" });
    return { user, token };
  };

  // Find user by ID
const findUserById = async (id: string) => {
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  };
  
  // Update user
  const updateUser = async (id: string, updateData: Partial<IUser>) => {
    const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });
    return updatedUser;
  };
  
  // Delete user
   const deleteUser = async (id: string) => {
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
  };

  export const userServices={
    signupUser, deleteUser,updateUser,loginUser,  findUserById
  }