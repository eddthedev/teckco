const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
// create the express app
const app = express()
// create the middleware to handle ther serving the app
app.use("/", serveStatic ( path.join (__dirname, '/public') ) )
//serve by index by defult
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html')
})
// create defult port to serve the app on
const port = process.env.PORT || 5000
app.listen(port)
// log to feedback that this is acually running
console.log('Server started on port ' + port)
