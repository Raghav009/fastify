'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
    fastify.register(require('@fastify/websocket'))

    fastify.register(async function (fastify) {
        fastify.get('/hello-ws', { websocket: true }, (connection /* SocketStream */, req /* FastifyRequest */) => {
            connection.socket.on('message', message => {
                broadcast(message.toString());
            })
            connection.socket.on('close', () => {
                console.log('Client disconnected');
            });
        })
    })

    function broadcast(message) {
        for (let client of fastify.websocketServer.clients) {
            client.send(message);
        }
    }
})