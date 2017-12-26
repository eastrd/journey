module.exports = function (path, ext, callback){
  fs = require('fs')
  fs.readdir(path, function (err, list){
    if (err){
      return callback(err, null)
    }
    var goodList = []
    for (var i=0; i<list.length; i++){
      if (list[i].includes("." + ext)){
        goodList.push(list[i])
      }
    }
    callback(null, goodList)
  })
}
