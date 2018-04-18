
var rego = new RegExp(/\(([0-9]+ms)\)/)

console.log(rego.test('uploaded. (159ms)'))

var x = 'aha (123ms)asdasd'
console.log(x.search(/\(([0-9]+ms)\)/))
console.log(('aha (123ms)asdasd').search(/\(([0-9]+ms)\)/))

let str = '/url?q={{ abc 567 }}}&f={{hi}}'
// str = 'abc{{}}'
// let res = str.match(/{{/g)
// res = str.split(/({{+|}}+)/)

// console.log(res)

// str = '}'
// console.log(/}}+/.test(str))
// str = ' #if @last   kudos'
// str = '#f'
// str = '    '
// str = str.trim()
// console.log('split by " "', str.split(/ +/))
// console.log('join by " "', '|' + str.split(' ').join(' ') + '|')

const temp = require('./temp')
str = '/url?q={{ #abc list else 567 }}&f={{hi}}&{{this.last}}...{{export.hello}}'
str = temp.forEachPlaceHolder(str, temp.updateDataFields)
console.log('str =>', str)
