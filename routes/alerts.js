'use strict'
const { getItemsOpts, getDeviceOpts } = require('../models/alerts');

module.exports = async function (fastify, opts) {
  fastify.get('/alerts', getItemsOpts)
  fastify.get('/devices', getDeviceOpts)
}

