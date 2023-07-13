const { executeQuery } = require("./mysql");

const getAlerts = async() => {
    const results = await executeQuery('select * from alerts', []);

    return results;
}

module.exports = { getAlerts }