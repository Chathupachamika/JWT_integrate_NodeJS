const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
require('dotenv').config();

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

const userRoutes = require('./routers/user');
const studentRoutes = require('./routers/student');
const auth = require('./middleware/auth');

app.use('/api/user', userRoutes);
app.use('/api/student', auth, studentRoutes);

const port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
