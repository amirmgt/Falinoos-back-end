const express = require('express');
const router = express.Router();
const pool = require("../DB.JS");



////////////////////////// Edit Quest Routing
router.put('/:id', async( req, res ) => {

    const { id } = req.params;
    const { accept } = req.body;

    const query = 'UPDATE quests SET is_accept = $1 WHERE id = $2';
    const data = [accept, id];


    try {
        const freshQuest = await pool.query(query, data);
        res.json(freshQuest.rows);
    }
    catch( err ) {
        console.error(err.message);
    }
});

module.exports = router;