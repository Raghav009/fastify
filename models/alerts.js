const { getItems, getDevicesList } = require('../controllers/alerts')

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

const Device = {
    type:'object',
    properties:{
        Id:{ type: 'number' },
        Name: { type: 'string' },
        Parmeters: { type: 'string' },
        LowerThreshold: { type: 'number' },
        UpperThreshold: { type: 'number' },
        Device_Id: { type: 'number' },
        Plant_Id: { type: 'number' },
    }
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

const getDeviceOpts ={
    schema: {
        response: {
            200: {
                type: 'array',
                items: Device,
            },
        },
    },
    handler: getDevicesList,
}

module.exports = { getItemsOpts, getDeviceOpts }