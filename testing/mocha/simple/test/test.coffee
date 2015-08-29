assert = require('assert')

describe 'Array', ->
  describe '#indexOf()', ->
    it 'should return -1 when the value is not present', ->
      not_existing_number = 42
      assert.equal -1, [ 1, 2, 3 ].indexOf(not_existing_number)
      assert.equal -1, [ 1, 2, 3 ].indexOf(0)
      assert.equal -1, [ 1, 2, 3 ].indexOf(4)
