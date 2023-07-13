const { getItemsOpts,
    getItemOpts,
    postItemOpts,
    deleteItemOpts,
    updateItemOpts } = require('../models/items');

function itemRoutes(fastify, options, done) {
    // Get all items
    fastify.get('/items', getItemsOpts)

    // Get single items
    fastify.get('/items/:id', getItemOpts)

    // Add item
    fastify.post('/items', postItemOpts)

    // Delete item
    fastify.delete('/items/:id', deleteItemOpts)

    // Update item
    fastify.put('/items/:id', updateItemOpts)

    done()
}

module.exports = itemRoutes