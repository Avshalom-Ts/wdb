const express = require("express");

app = express();


const todoRoutes = require('./routes/todos');


app.get('/', function(req,res){
  res.send("<h1>Hello from the root route</h1>");
})

app.use('/api/todos', todoRoutes);

const port = 8080

app.listen(port, function(){
    console.log(`APP IS RUNNING ON PORT http://localhost:${port}`);
})