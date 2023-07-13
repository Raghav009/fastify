'use strict'

const { join } = require('path')
const AutoLoad = require('@fastify/autoload')
const Fastify = require('fastify')
const app = Fastify({ logger: true })
const { port } = require('./config/env');

app.register(AutoLoad, {
    dir: join(__dirname, 'plugins')
})

app.register(AutoLoad, {
    dir: join(__dirname, 'routes')
})

const start = async () => {
    try {
        await app.listen({ port: port })
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}
start()