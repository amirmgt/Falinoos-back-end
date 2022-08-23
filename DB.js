
const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: '123',
    database: 'medical-falinos',
    host: 'localhost',
    post: 5432
});

module.exports = pool;