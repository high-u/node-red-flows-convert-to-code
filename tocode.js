#!/usr/bin/env node

var fs = require('fs-extra')
// var commander = require('commander')
// var prompt = require('co-prompt')
// var co = require('co')
// require('shelljs/global')

// get parameter
var flowsJsonName = process.argv[2]

var specialKeys = { func: ".js", template: ".txt" }

var currentDir = process.cwd()
var flowsJson = fs.readFileSync(currentDir + '/' + flowsJsonName, 'utf8')

var flowsObj = JSON.parse(flowsJson)
flowsObj.forEach(function (value) {
  fs.mkdirsSync(currentDir + '/nodes')
  Object.keys(value).forEach(function (key) {
    if (specialKeys[key]) {
      fs.writeFileSync(currentDir + '/nodes/' + value.type + '_' + value.id + specialKeys[key], value[key])
    }
  })
})

return;