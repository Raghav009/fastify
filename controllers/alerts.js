const { getAlerts } = require('../db/alerts')

const getItems = async (req, reply) => {
    req.log.info("Get Alerts")
    let items = await getAlerts()
    reply.send(items)
}

module.exports = { getItems }