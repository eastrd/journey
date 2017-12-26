port = Number(process.argv[2])
net = require('net')
server = net.createServer(function (socket){
  date = new Date()
  socket.end(
    date.getFullYear() + "-" + Number(date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + "\n"
  )
})

server.listen(port)
