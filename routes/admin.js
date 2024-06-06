import express from 'express';

// Import controller functions from adminController.js
import { UpdateStatusReject, UpdateStatusReview, UpdateStatusApprove, DownloadIntoCSV, DownloadJson, DownloadXml } from '../controller/adminController.js';

// Import authentication middleware from adminAuth.js
import { verifyLogin } from "../services/adminAuth.js";

// Create a new Express router instance
const router = express.Router();

// Define routes and attach corresponding controller functions and middleware
router.post('/UpdateStatusReject', verifyLogin, UpdateStatusReject);
router.post('/UpdateStatusReview', verifyLogin, UpdateStatusReview);
router.post('/UpdateStatusApprove', verifyLogin, UpdateStatusApprove);
router.post('/DownloadIntoCSV', verifyLogin, DownloadIntoCSV);
router.post('/DownloadJson', verifyLogin, DownloadJson);
router.post('/DownloadXml', verifyLogin, DownloadXml);

// Export the router for use in other files
export default router;
