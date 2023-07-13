'use strict'

const fp = require('fastify-plugin')
const { SECRET_KEY } = require('../config/env');
module.exports = fp(async function (fastify, opts) {

    fastify.register(require('@fastify/jwt'), {
        secret: SECRET_KEY
    })
    fastify.decorate("authenticate", async function (request, reply) {
        try {
            await request.jwtVerify()
        } catch (err) {
            reply.send(err)
        }
    })

    // fastify.addHook('onRequest', (request) => request.jwtVerify())
    // if we need to exclude for few request with out auth then we have to register the routes seperatly 
})