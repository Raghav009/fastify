const { createPool } = require("mariadb");

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'clouddb',
  connectionLimit: 5
});

const executeQuery = async (query, arraParms) => {

  let conn;
  try {
	conn = await pool.getConnection();

	const res = await conn.query(query, arraParms);

    return res;

  } finally {
	if (conn) conn.release(); //release to pool
  }
};

module.exports = { executeQuery };