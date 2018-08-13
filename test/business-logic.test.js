const test = require('tape')

test('should return ok from the business logic ', (assert) => {
    assert.plan(1)
    const calculateNewValue = require('../business-logic')
    const dbMock = (value) => 'ok'
    assert.equal(calculateNewValue(2, dbMock), 'ok')
})

