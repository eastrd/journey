http = require('http')
http.get(process.argv[2], function(response){
  datas = ""
  response.on('data', function(data){
    datas += data
  })
  response.on('end', function(data){
    console.log(datas.length)
    console.log(datas)
  })

})
