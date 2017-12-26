var http = require('http')
var fs = require('fs')

var port = process.argv[2]
var path = process.argv[3]

server = http.createServer(function(req, res){
  var readStream = fs.createReadStream(path)
  readStream.pipe(res)
  }
)

server.listen(port)
