const express = require('express');
const router = express.Router();
const pool = require("../DB.JS");


////////////////////////// Authentication Routing

//
router.get('/', async( req, res ) => {
    try {
        const allQuests = await pool.query("SELECT * FROM quests");
        res.json(allQuests.rows);
    }
    catch( err ) {
        console.error(err.message);
    }
});

module.exports = router;