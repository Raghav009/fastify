const {
    getItems,
    getItem,
    addItem,
    deleteItem,
    updateItem,
} = require('../controllers/items')

// Item schema
const Item = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' },
    },
}

// Options for get all items
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item,
            },
        },
    },
    handler: getItems,
}

const getItemOpts = {
    schema: {
        response: {
            200: Item,
        },
        params: {
            type: 'object',
            properties: {
                id: { type: 'string' },
            },
            required: ['id']
        }
    },
    handler: getItem,
}

const postItemOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['name'],
            properties: {
                name: { type: 'string' },
            },
        },
        response: {
            201: Item,
        },
    },
    handler: addItem,
}

const deleteItemOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' },
                },
            },
        },
        params: {
            type: 'object',
            properties: {
                id: { type: 'string' },
            },
            required: ['id']
        }
    },
    handler: deleteItem,
}

const updateItemOpts = {
    schema: {
        response: {
            200: Item,
        },
        params: {
            type: 'object',
            properties: {
                id: { type: 'string' },
            },
            required: ['id']
        },
        body: {
            type: 'object',
            required: ['name'],
            properties: {
                name: { type: 'string' },
            },
        },
    },
    handler: updateItem,
}

module.exports = {
    getItemsOpts,
    getItemOpts,
    postItemOpts,
    deleteItemOpts,
    updateItemOpts,
  }