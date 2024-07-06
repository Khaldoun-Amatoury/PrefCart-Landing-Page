const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "hey@123",
  host: "localhost",
  port: 5432,
  database: "seniortestdb",
});

module.exports = pool;
