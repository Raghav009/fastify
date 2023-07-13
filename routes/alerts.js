'use strict'
const { getItemsOpts } = require('../models/alerts');

module.exports = async function (fastify, opts) {
  fastify.get('/alerts', getItemsOpts)
}

