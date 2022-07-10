const fs = require('fs');
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Hello Mate</h1>');
});

app.get('/send', (req, res) => {
  console.log(req.query.text);
  res.send(req.query.text);
  const txtString = req.query.text;
  console.log('txt -> ', txtString);
  fs.writeFile('foo.txt', txtString, err => {
    if (err) throw err;
  });
});

//Start the server by listening for request on port 8000
app.listen(8000, () => {
  console.log('Server is up on Port 8000');
});
