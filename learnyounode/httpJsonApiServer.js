port = process.argv[2]

var url = require('url')
var http = require('http')

var server = http.createServer(function(req, res){
  var parsed = url.parse(req.url, true)
  var pathname = parsed.pathname
  var query = parsed.query

  var date = new Date(query.iso)

  if (pathname == '/api/parsetime'){
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    res.write(JSON.stringify({
      'hour' : hour,
      'minute' : minute,
      'second' : second
    }))
    res.end()
  }
  else {
    // /api/unixtime
    var epoch = date.getTime()
    res.write(JSON.stringify({
      'unixtime' : epoch
    }))
    res.end()
  }
})

server.listen(port)
