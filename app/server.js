

var config = require('./config/service-config');
var port = config.servicePort;
var util = require('util');

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');


app.use(express.static(__dirname + "/public"));

io.on("connection", function (socket) {
   console.log("User connected via socket.io");

   socket.on('message',function (message) {

       console.log("message received:" + message.text);
       // socket.broadcast.emit('message',message);
       message.timestamp = moment().valueOf();
       io.emit('message',message);
   });
    socket.emit('message',{
        text: "Welcome to the chat application!",
        timestamp: moment().valueOf()
    });
});

http.listen(port,function () {
    console.log(util.format("Listening to port %s", port));
});