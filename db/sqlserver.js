const sql = require('mssql')

const config = {
    user: '{user_name}',
    password: '{user_password}',
    database: '{database_name}',
    server: '{server_name}.database.windows.net',
    port: 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true,
        trustServerCertificate: false
    }
};


const executeServerQuery = async (query) => {
    let pool
    try {
        pool = await sql.connect(config);
        let result = await pool.query(query);
        return result;
    }
    catch (error) {
        pool.close();
        console.log('Error executing query : < ' + query + ' > :' + err)
    }
}

sql.on('error', err => {
    console.log('Sql Error :' + err)
})


module.exports = { executeServerQuery }

// https://tediousjs.github.io/node-mssql/