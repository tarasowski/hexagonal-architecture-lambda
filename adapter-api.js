const calculate = require('./business-logic')
const save = require('./adapter-dynamodb').save

module.exports.handler = (event) => {
    const number = event.number
    const response = calculate(save, number)
    return response
}

// ADAPTER: responsible for parsing incoming event object and sending back a response to the port
