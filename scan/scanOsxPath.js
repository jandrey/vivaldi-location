const fs = require('fs')
const userhome = require('userhome')

module.exports = function scanOsxPath () {
  const defaultPath = '/Applications/Vivaldi.app/Contents/MacOS/Vivaldi'
  const alternativePath = userhome(defaultPath.slice(1))

  if (fs.existsSync(defaultPath)) return defaultPath

  return alternativePath
}
