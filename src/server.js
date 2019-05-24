'use strict';
// imports
const express = require('express')
const app = express();
// constants
const port = 9000;

app.get('/', (req, res) => {
  res.send("user-crud-js");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
});
