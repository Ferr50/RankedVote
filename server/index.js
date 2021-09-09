const express = require('express');
const cors = require('cors');
const limiters = require('./middleware/limiters');
const app = express();
require('dotenv').config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/votes', require('./routes/votes'));
app.use('/voter-code', require('./routes/voterCode'));
app.use('/campaign', require('./admin/campaign'));

app.get('/', limiters.speed, limiters.rate, (req, res) => {
  res.send('hello friend');
});

app.listen(5000, () => {
  console.log(`What a Wonderful Audience!`);
});
