const express = require('express');
const app=express();
const  socket = require('socket.io');

app.use(express.static('public'));

let server=app.listen(3000,()=>console.log('listening on port 3000'))
let io=socket(server);

io.on('connection',(socket)=>{
    console.log('made comnnection');
socket.on('disconnect',()=>{console.log('discoonected')})


socket.on('chat',(data)=>{
    console.log('data received from client',data)
io.sockets.emit('chat',data);
// <input type="button" id='send' value='send the message'>
})
})
