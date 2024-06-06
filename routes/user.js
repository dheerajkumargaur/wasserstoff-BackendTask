import express from 'express';

// Import controller functions from userController.js
import { createUser, loginUser, upload } from '../controller/userController.js';

// Import authentication middleware from userAuth.js
import { verifyUserLogin } from "../services/userAuth.js";

// Create a new Express router instance
const router = express.Router();

// Define routes and attach corresponding controller functions and middleware
router.post('/register', createUser); // Route for user registration
router.post('/login', loginUser); // Route for user login
router.post('/upload', verifyUserLogin, upload); // Route for uploading files with user authentication

// Export the router for use in other files
export default router;