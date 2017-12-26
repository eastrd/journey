var fs = require('fs')

var path = process.argv[2]
var buf = fs.readFileSync(path)
var str = buf.toString()
console.log(str.split("\n").length - 1)
