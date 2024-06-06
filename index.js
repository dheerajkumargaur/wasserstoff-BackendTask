import express from 'express';
import fileUpload from "express-fileupload";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { connectDB } from './services/db.js';
import routes from './routes/user.js';
import admin from './routes/admin.js';
import { ImageAnnotatorClient } from '@google-cloud/vision';

connectDB();

dotenv.config(); 
// Create an Express application
const app = express();
app.use(fileUpload())
app.use(bodyParser.json());
// Define a route
app.use('/api', routes); 
app.use("/admin",admin)
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
