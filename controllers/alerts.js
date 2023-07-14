const { getAlerts, getDevices } = require('../db/alerts')

const getItems = async (req, reply) => {
    req.log.info("Get Alerts")
    let items = await getAlerts()
    reply.send(items)
}

const getDevicesList = async(req, reply) =>{
    req.log.info("Get Devices")
    let items = await getDevices()
    reply.send(items)
}

module.exports = { getItems, getDevicesList }