const express = require("express");

app = express();

app.get('/', function(req,res){
  res.json({ message: 'HI FROM JS OBJECT!' });
})

const port = 8080

app.listen(port, function(){
    console.log(`APP IS RUNNING ON PORT http://localhost:${port}`);
})