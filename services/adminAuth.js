import jwt from "jsonwebtoken";
import {User} from "../models/user.js";
import dotenv from 'dotenv';
dotenv.config(); 
export const verifyLogin = async (req, res, next) => {
  try {
    // Extract token from request headers
    const token = req.headers.authorization?.replace("Bearer ", "");
    // Check if token exists
    if (!token) {
      return res.status(401).json({ message: "Token is required" });
    }
    // Verify token validity
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Retrieve user information from database using user ID from token
    const { userId } = decoded;
    const user = await User.findById(userId);
    
    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if(user.role!="admin"){
      return res.status(404).json({ message: "You are not authorize to access this API,Only admin can access it" });

    }
    req.user = user;
    // Proceed to next middleware or route handler
    next();
  } catch (error) {
    // Handle token verification errors
    return res.status(403).json({ message: "Invalid token" });
  }
};
