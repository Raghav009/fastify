const { executeQuery } = require("./mysql");
const { executeServerQuery } = require('./sqlserver');

const getAlerts = async () => {
    const results = await executeQuery('select * from alerts', []);

    return results;
}

const getDevices = async () => {
    const devices = await executeServerQuery('select * from [dbo].[RegisterDevices]');
    return devices.recordset; // the data is available in the recordset in SQL server
}

module.exports = { getAlerts, getDevices }