const express = require('express');
const app = express();
const port = 3003;

app.get('/',(req,res) =>{
    res.send('Welcome to the API!');
});

app.get("/test",(req,res)=>{
    res.send('This is a test route');
});

app.listen(port, ()=>{
    console.log(`API listening at http://localhost:${port}`);
});
