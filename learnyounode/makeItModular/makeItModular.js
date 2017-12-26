mod = require('./module.js')
result = mod(process.argv[2], process.argv[3], function(err, list){
  for (var i=0; i<list.length; i++){
    console.log(list[i])
  }
})
