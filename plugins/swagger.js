'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
    fastify.register(require('@fastify/swagger'), {
        swagger: {
            info: {
                title: 'API Documentation',
                description: 'Testing the Fastify swagger API',
                version: '0.1.0'
            },
            externalDocs: {
                url: 'https://swagger.io',
                description: 'Find more info here'
            },
            host: 'localhost:3001',
            schemes: ['http'],
            consumes: ['application/json'],
            produces: ['application/json'],
            securityDefinitions: {
                bearerAuth: {
                    type: 'apiKey',
                    name: 'Authorization',
                    in: 'header',
                    description: 'Bearer authentication token'
                }
            },
            security: [
                {
                    bearerAuth: []
                }
            ],
            exposeRoute: true,
        }
    })

    fastify.register(require('@fastify/swagger-ui'), {
        routePrefix: '/doc',
        initOAuth: { useBasicAuthenticationWithAccessCodeGrant: true },
        uiConfig: {
            docExpansion: 'list',
            deepLinking: false,
            withCredentials: true
        },
        uiHooks: {
            onRequest: function (request, reply, next) { next() },
            preHandler: function (request, reply, next) { next() }
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
        transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
        transformSpecificationClone: true
    })
})
