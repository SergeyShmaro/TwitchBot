import io from 'socket.io';
import express from 'express';

const app = express();

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

app.listen(3210, function(){
  console.log('listening on *:3210');
});