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
    
    fastify.addHook('preHandler', async (request, reply) => {
        // Array of routes where token verification is excluded
        const excludedRoutes = ['/register', '/login'];

        // Check if the current route is in the excluded routes
        if (excludedRoutes.includes(request.routerPath)) {
            // Skip token verification for excluded routes
            return;
        }

        try {
            // Verify the JWT token
            await request.jwtVerify();
        } catch (err) {
            // Token verification failed
            reply.code(401).send({ message: 'Invalid token' });
        }
    })
    // fastify.addHook('onRequest', (request) => request.jwtVerify())
    // if we need to exclude for few request with out auth then we have to register the routes seperatly 
})