const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');



router.get('/dashboard', auth.verifyToken, async (req, res) => {
   
    // i will just return a simple data here, you can try yourself to return data from the database

    res.send( { status: 1, data: 1 ,message: 'Successful'} )
});



module.exports = router;