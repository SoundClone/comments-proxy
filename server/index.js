// Setup
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.get('/api/comments', (req, res) => {
  axios.get('http://localhost:3001/api/comments')
    .then((res1) => {
      console.log('HELLO WORLD')
      res.send(res1.data);
    });
});

// Initialise
const PORT = 3000;
app.listen(PORT, () => { console.log(`listening on http://localhost:${PORT}`) });