import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import enrollmentRoutes from '../dist/routes/enrollmentRoutes.js';
import connectDB from './config/database.js';
import adminRoutes from './routes/adminRoutes.js';
dotenv.config();
const app = express();
// Connect to MongoDB
connectDB();
// Middleware
app.use(cors());
app.use(express.json());
// Routes
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/admin', adminRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// use skillup
// db.admins.insertOne({
//   email: "admin@skillup.com",
//   password: "your_hashed_password_here"
// })
