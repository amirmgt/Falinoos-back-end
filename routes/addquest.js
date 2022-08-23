const express = require('express');
const router = express.Router();
const pool = require("../DB.JS");



////////////////////////// Add Quest Routing
// create
router.post('/', async(req, res ) => {

    const { name } = req.body;
    const { description } = req.body;
    const { datequest } = req.body;
    const { phone } = req.body;


    const questQuery = "INSERT INTO quests (name, description, datequest, phone, is_accept) VALUES ($1, $2, $3, $4, false) RETURNING *";
    const data = [name, description, datequest, phone];

    try {
        const newQuest = await pool.query(questQuery, data);
        res.json(newQuest.rows);
    }
    catch ( err ) {
        console.error(err.message);
    }
});

module.exports = router;