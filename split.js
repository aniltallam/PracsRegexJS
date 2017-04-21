var assert = require('assert')

var str = 'refreshHeaders[*].deepArr[*].zz.*._extId'

// split using '*' and don't keep delimiter
assert.deepEqual(str.split(/\*/), [ 'refreshHeaders[', '].deepArr[', '].zz.', '._extId' ])
assert.deepEqual(str.split(/[*]/), [ 'refreshHeaders[', '].deepArr[', '].zz.', '._extId' ])
assert.deepEqual(str.split(/[*]+/), [ 'refreshHeaders[', '].deepArr[', '].zz.', '._extId' ])
assert.deepEqual(str.split(/\*/g), [ 'refreshHeaders[', '].deepArr[', '].zz.', '._extId' ])
assert.deepEqual(str.split(/[*]/g), [ 'refreshHeaders[', '].deepArr[', '].zz.', '._extId' ])

// split using '*' and keep delimiter
assert.deepEqual(str.split(/(\*)/), [ 'refreshHeaders[', '*', '].deepArr[', '*', '].zz.', '*', '._extId' ])

// split using '[*]' and don't keep delimiter
assert.deepEqual(str.split(/\[\*\]/), [ 'refreshHeaders', '.deepArr', '.zz.*._extId' ])
assert.deepEqual(str.split(/\[\*\]/g), [ 'refreshHeaders', '.deepArr', '.zz.*._extId' ])

// split using '[*]' and keep delimiter
assert.deepEqual(str.split(/(\[\*\])/), [ 'refreshHeaders', '[*]', '.deepArr', '[*]', '.zz.*._extId' ])

// Advanced cases
// split using '[*]' and keep part of delimiter i.e. '*'
assert.deepEqual(str.split(/\[(\*)\]/), [ 'refreshHeaders', '*', '.deepArr', '*', '.zz.*._extId' ])
assert.deepEqual(str.split(/\[(\*)\]/g), [ 'refreshHeaders', '*', '.deepArr', '*', '.zz.*._extId' ])

// split using '[*]' and keep part of delimiter i.e. ''
assert.deepEqual(str.split(/\[\*()\]/), [ 'refreshHeaders', '', '.deepArr', '', '.zz.*._extId' ])

// Common mistakes
assert.deepEqual(str.split(/\[*\]/), [ 'refreshHeaders[*', '.deepArr[*', '.zz.*._extId' ])
assert.deepEqual(str.split(/\[\*(a)\]/), [ 'refreshHeaders[*].deepArr[*].zz.*._extId' ])


// Syntax errors - invalid regular expressions
// /\[(*)\]/

/**
 * NOTES:
 * for split there is no need to use g (global search) in regeX.
 * even without g it searrches globally. this is not the case with replace
 */
