 var express=require('express');
var socket= require('socket.io');

 var app = express();

 var server =app.listen(4000,function(){
     console.log('listening to requists on port 4000');
 });

 //static files
 app.use(express.static('public')); 

 //socket setup
 var io = socket(server);

 io.on('connection', function  (socket) {
     console.log(' Hi ,Made socket connection complete', socket.id)

//Handle chat event
       socket.on('chat',function (data) {
           io.sockets.emit('chat',data);
       });
       socket.on('chata',function (data) {
        io.sockets.emit('chata',data);
    });
       socket.on('typing', function(data){
        socket.broadcast.emit('typing',data)
 })
 });


  