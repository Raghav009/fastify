const { getItems } = require('../controllers/alerts')

// Item schema
const Alert = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        created_at: { type: 'string' },
        entityId: { type: 'string' },
        severity: { type: 'number' },
        description: { type: 'string' },
        source: { type: 'string' },
        lastReading: { type: 'string' },
        STATUS: { type: 'number' },
        incident_no: { type: 'number' }
    },
}

// Options for get all items
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Alert,
            },
        },
    },
    handler: getItems,
}

module.exports = { getItemsOpts }