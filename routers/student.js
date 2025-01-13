const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.json(
        [
            {id: 1, name: 'John Doe', email: 'john.doe@example.com'},
            {id: 2, name: 'Jane Smith', email: 'jane.smith@example.com'},
            {id: 3, name: 'Mike Johnson', email: 'mike.johnson@example.com'}
        ]
    );
});

module.exports = router;