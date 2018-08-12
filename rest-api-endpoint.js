const sendRequest = require('./adapter-api').handler

const response = sendRequest({number: 2})
console.log(response)


// PORT: entry and exit point to/from the application and responsible for sending back a response to the caller
