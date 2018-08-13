const test = require('tape')

test('should return saved new value from dynamodb adapter', (assert) => {
    assert.plan(1)
    const saveToDatabase = require('../adapter-dynamodb').save
    
    assert.equal(saveToDatabase(4), 'successfully saved to database: 4')
})