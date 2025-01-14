const express = require('express');
const connectDB = require('./db'); // Import the DB connection
const cors = require('cors'); // Import the CORS middleware
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Enable CORS for all origins (you can restrict it to specific origins if needed)
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Routes
const userRoutes = require('./routers/user');
const studentRoutes = require('./routers/student');
const auth = require('./middleware/auth');

app.use('/api/user', userRoutes);
app.use('/api/student', auth, studentRoutes);

// Start the server
const port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
