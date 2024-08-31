import UserModel from "../models/user.js";
import bcrypt from "bcryptjs";
import config from "../config/index.js";
import jwt from "jsonwebtoken";
import httpResponse from "../utils/httpResponse.js";

const UserService = {
  getAll: async () => {
    try {
      const users = await UserModel.find();
      return { message: "success", data: users };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getById: async (id) => {
    try {
      const user = await UserModel.findById(id);
      if (!user) {
        return { message: "error", data: "User not found" };
      }
      return { message: "success", data: user };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  add: async (userData) => {
    try {
      const existingUser = await UserModel.findOne({ email: userData.email });
      if (existingUser) {
        return { message: "failed", data: "User already exists" };
      }
      const salt = await bcrypt.genSalt(10);
      userData.password = await bcrypt.hash(userData.password, salt);
      const newUser = new UserModel(userData);
      await newUser.save();
      return { message: "success", data: newUser };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  login: async (loginData) => {
    try {
      const user = await UserModel.findOne({ email: loginData.email });
      if (!user) {
        return { message: "error", data: "Invalid email or password" };
      }

      const isMatch = await bcrypt.compare(loginData.password, user.password);
      if (!isMatch) {
        return { message: "error", data: "Invalid email or password" };
      }

      const token = jwt.sign({ user: user._id }, "johncena", {
        expiresIn: "8888h",
      });
      return { message: "success", data: { token } };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  update: async (userData) => {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        userData.id,
        userData,
        { new: true }
      );
      if (!updatedUser) {
        return { message: "error", data: "User not found" };
      }
      return { message: "success", data: updatedUser };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  removeById: async (id) => {
    try {
      const deletedUser = await UserModel.findByIdAndDelete(id);
      if (!deletedUser) {
        return { message: "error", data: "User not found" };
      }
      return { message: "success", data: "User deleted successfully" };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default UserService;
