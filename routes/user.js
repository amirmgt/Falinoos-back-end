
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const pool = require("../DB.JS");



/* GET users listing. */
router.post('/login', async function (req, res, next) {
  try {
    let { email, password } = req.body; 

    const sql = `SELECT * FROM users WHERE email = $1 AND password = $2`;

    const data = [email, password];
    const connection = await pool.query(sql, data);


    if ( connection.rows != '') {
        let token = jwt.sign({ data: connection.result }, 'secret');
        res.send({ status: 1, data: connection.result, token: token });
      // res.send({ status: 1 });
    } else {
      res.send({ status : 0 });
    }


  } catch (error) {
    res.send({ status: 0, error: error });
  }


});


module.exports = router;