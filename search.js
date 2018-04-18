let rego = new RegExp(/{{[^({{)]*(dateAdd |timeStamp |dateFormat )[^(}})]*}}/g)
rego = new RegExp(/{{[^({{)]*(dateAdd |timeStamp |dateFormat )/g)

let str = 'uploaded. (159ms) {{dateAdd cv op}}/ghji {{  timeStamp dfghji}} blah blah\n'+
'helllo {{dateAdd {{  timeStamp dfghji}} {{  timeStamp dateFormat}} }}iam still there'
console.log(rego.test(str))
console.log(rego.exec(str))
console.log(rego.exec(str))
console.log(str.match(rego))

// var x = 'aha (123ms)asdasd'
// console.log(x.search(/\(([0-9]+ms)\)/))
// console.log(('aha (123ms)asdasd').search(/\(([0-9]+ms)\)/))
var regex = rego
function regexSearchOnDoc (jsonDoc) {
  const str = JSON.stringify(jsonDoc, null, 1)
  const strs = str.split('\n').filter((val) => {
    return val.match(regex)
  }).map((val) => {
    return val.trim()
  })
  return strs.length < 1 ? null : strs.reduce((pVal, val) => {
    return pVal + '\n' + val
  }, '')
}

let jsonDoc = {
  name: 'uploaded. (159ms) {{dateAdd cv op}}/ghji {{  timeStamp dfghji}} blah blah',
  age: 10,
  address: [{
    street: 'good',
    block: 'helllo {{{dateAdd {{  timeStamp dfghji}} {{  timeStamp dateFormat}} }}}iam still there'
  }, {
    street: 'good2',
    block: 'helllo {{hiller {{  majo dfghji}} {{  bero dateFormat}} }}iam still there'
  }],
  code: {
    newfield: '{{{max val }}}'
  }
}

console.log('Anil --\n', regexSearchOnDoc(jsonDoc))
