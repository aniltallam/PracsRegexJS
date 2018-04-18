function forEachPlaceHolder (str1, prcs) {
  let strParts = str1.split(/({{+|}}+)/)
  let placeHolderIndexes = []
  let ot = -1
  let ct = -1
  for (let i = 0; i < strParts.length; i++) {
    const str = strParts[i]
    if (ot === -1) {
      if (/{{+/.test(str)) {
        ot = i
      } else {
        if (/}}+/.test(str)) return str // invalid placeholder i.e. }} before {{- no need to process
        else continue
      }
    } else {
      if (/}}+/.test(str)) {
        ct = i
        if (strParts[ot].length !== strParts[ct].length) return str // invalid placeholder i.e. {{..}}} or {{{..}}
        placeHolderIndexes.push(ot + 1)
        ot = ct = -1
        continue
      } else {
        if (/{{+/.test(str)) return str // invalid placeholer i.e. two {{'s before }} - no need to process
        else continue
      }
    }
  }

  placeHolderIndexes.forEach(function (i) {
    let placeHolderText = strParts[i]
    strParts[i] = prcs(placeHolderText)
  })
  return strParts.join('')
}

function updateDataFields (ph) {
  ph = ph.trim()
  if (ph.trim().length === 0) return ph
  let phTokens = ph.split(/ +/)
  for (let i = 0; i < phTokens.length; i++) {
    const token = phTokens[i]
    if (isDataProp(token)) {
      phTokens[i] = 'data.' + token
    }
  }
  return phTokens.join(' ')
}

const escapeRoots = [
  'connection',
  'export',
  'import',
  'data',
  'this'
]

const registeredWords = [
  'this',
  'else',
  'stringify',
  'list'
]

function isDataProp (token) {
  const fc = token.charAt(0)
  if (fc === '@' || fc === '#' || fc === '/') return false

  const dotPos = token.indexOf('.')
  if (dotPos > -1) {
    const rootElem = token.substring(0, dotPos)
    return escapeRoots.indexOf(rootElem) === -1
  } else {
    return registeredWords.indexOf(token) === -1
  }
  // return true
}

exports.forEachPlaceHolder = forEachPlaceHolder
exports.updateDataFields = updateDataFields
