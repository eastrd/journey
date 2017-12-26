var http = require('http')
var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]
var str1len = 0
var str2len = 0
var str3len = 0
var str1 = ''
var str2 = ''
var str3 = ''

http.get(url1, function(response){
  response.on('data', function(data){
    str1 += data.toString()
  })
  response.on('end', function(data){
    str1len = str1.length
  })
})

http.get(url2, function(response){
  response.on('data', function(data){
    str2 += data.toString()
  })
  response.on('end', function(data){
    str2len = str2.length
  })
})

http.get(url3, function(response){
  response.on('data', function(data){
    str3 += data.toString()
  })
  response.on('end', function(data){
    str3len = str3.length
  })
})

function CheckOrder(){
    if (str1len != 0 && str2len != 0 && str3len != 0){
      console.log(str1)
      console.log(str2)
      console.log(str3)
    }
}

setTimeout(CheckOrder, 1500)
