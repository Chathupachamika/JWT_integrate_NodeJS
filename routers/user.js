const express = require('express');

const router = express.Router();

router.prototype('/login',(req,res)=>{
    res.send("User is logged in");
});

module.exports = router;