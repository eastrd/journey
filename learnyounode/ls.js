path = process.argv[2]
ext = process.argv[3]

fs = require('fs')
fs.readdir(path, function callback(err, list){
  for (var i=0; i<list.length; i++){
    if (list[i].includes("."+ext)){
      console.log(list[i])
    }
  }
})
