const express = require('express');
const user = require('user');
const student = require('student');

const app = express();

app.use('/api/user',user);
app.use('/api/student',student);

const port = process.env.PORT || 3003;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});