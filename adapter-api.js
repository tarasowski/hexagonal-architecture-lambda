const calculateNewValueAndSave = require('./business-logic')
const saveToDatabase = require('./adapter-dynamodb').save

module.exports.handler = (event) => {
    const number = event.number
    const response = calculateNewValue(number, saveToDatabase)
    return response
}

// ADAPTER: responsible for parsing incoming event object and sending back a response to the port
