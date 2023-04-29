const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

const todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req,res){
  res.send("<h1>Hello from the root route</h1>");
})

app.use('/api/todos', todoRoutes);


app.listen(port, function(){
    console.log(`APP IS RUNNING ON PORT http://localhost:${port}`);
})