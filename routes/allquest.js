const express = require('express');
const router = express.Router();
const pool = require("../DB.JS");


////////////////////////// Get All Quests Routing

// get all
router.get('/', async( req, res ) => {
    try {
        const allQuests = await pool.query("SELECT * FROM quests ORDER BY id ASC");
        res.json(allQuests.rows);
    }
    catch( err ) {
        console.error(err.message);
    }
});

module.exports = router;