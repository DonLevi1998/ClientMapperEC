require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { register } = require('./controllers/registerController');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/register', register);

const PORT = process.env.PORT || 5032;
app.listen(PORT, () => {
  console.log(`auth-register running on port ${PORT}`);
});
