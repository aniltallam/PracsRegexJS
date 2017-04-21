var assert = require('assert')

var str = 'refreshHeaders[*].deepArr[*].zz.*._extId'

// Replace '*' with '$' at first occurence.
assert.equal(str.replace(/\*/, '$'), 'refreshHeaders[$].deepArr[*].zz.*._extId')
assert.equal(str.replace(/[*]/, '$'), 'refreshHeaders[$].deepArr[*].zz.*._extId')
assert.equal(str.replace(/[*]+/, '$'), 'refreshHeaders[$].deepArr[*].zz.*._extId')

// Replace '*' with '$' at all occurences.
assert.equal(str.replace(/\*/g, '$'), 'refreshHeaders[$].deepArr[$].zz.$._extId')
assert.equal(str.replace(/[*]/g, '$'), 'refreshHeaders[$].deepArr[$].zz.$._extId')

// Replace '[*]' with '$' at first occurence.
assert.equal(str.replace(/\[\*\]/, '$'), 'refreshHeaders$.deepArr[*].zz.*._extId')
assert.equal(str.replace(/\[(\*)\]/, '$'), 'refreshHeaders$.deepArr[*].zz.*._extId')
assert.equal(str.replace(/(\[\*\])/, '$'), 'refreshHeaders$.deepArr[*].zz.*._extId')

// Replace '[*]' with '$' at all occurences.
assert.equal(str.replace(/\[\*\]/g, '$'), 'refreshHeaders$.deepArr$.zz.*._extId')
assert.equal(str.replace(/\[(\*)\]/g, '$'), 'refreshHeaders$.deepArr$.zz.*._extId')

// Common mistakes
assert.equal(str.replace(/\[*\]/g, '$'), 'refreshHeaders[*$.deepArr[*$.zz.*._extId')


