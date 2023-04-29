const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', function (req, res) {
  // res.send('Hello From todos routes!!');
  db.Todo.find()
    .then(function (todos) {
      res.json(todos);
    })
    .catch(function (err) {
      res.send(err);
  })
})

module.exports = router;