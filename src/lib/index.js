const fs = require('fs');
const path = require('path');

function readConfig(rootPath) {
  let result = {}

  fs.readdirSync(rootPath)
    .filter(f => f.toLowerCase().endsWith('.json'))
    .map(f => path.resolve(rootPath, f))
    .map(f => readJsonFile(f))
    .forEach(s => Object.assign(result, s))
  console.log(result)
  return result
}

function readJsonFile(filePath) {

  let result = {}

  const jsonStr = fs.readFileSync(filePath).toString()
  const configName = path.basename(filePath, '.json')
  result[configName] = JSON.parse(jsonStr)

  return result
}

readConfig('src')

module.exports = readConfig