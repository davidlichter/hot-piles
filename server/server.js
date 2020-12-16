const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 3000;
const database = require('../config');
const dummyDate = require('../database/dummyData')

app.listen(PORT, () => {
  console.log('Listening on port ', PORT);
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post('/login', (req, res) => {
  console.log(req.body);
  var result = {};
  for (var i = 0; i < dummyData.users.length; i++) {
    if (req.body.username === dummyData.users[i].username && req.body.password === dummyData.users[i].password) {
      result = {
        username: dummyData.users[i].username,
        wins: dummyData.users[i].wins,
        gamesPlayed: dummyData.users[i].gamesPlayed
      }
      break;
    }
  }
  res.send(result);
})

app.post('/signup', (req, res) => {
  console.log(req.body);
  res.send(200);
})
