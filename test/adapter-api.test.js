const test = require('tape')
const proxyquire = require('proxyquire').noCallThru()

test('should return ok from the api adapter', (assert) => {
    assert.plan(1)
    const event = { number: 6 }
    
    const calculateNewValueMock = (number, callback) => 'ok'
    
    const apiAdapter = proxyquire('../adapter-api', { './business-logic': calculateNewValueMock }).handler
    //const apiAdapter = require('../adapter-api').handler
    
    assert.equal(apiAdapter(event), 'ok')
})