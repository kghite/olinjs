var fs = require('fs')
var file_name = process.argv[2]

var file = fs.readFileSync(file_name).toString()
var line_array = file.split('\n')

console.log(line_array.length - 1)