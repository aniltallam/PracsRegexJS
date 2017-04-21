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
// /(*)/  => unescaping special char *
assert.throws(function () { str.split(/(*)/) }, /Invalid regular expression/)
// /\[(*)\]/
assert.throws(function () { str.split(/\[(*)\]/) }, /Invalid regular expression/)
