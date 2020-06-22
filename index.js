const express = require('express');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const user = require('./routes/user');
const like = require('./routes/like');
const records = require('./routes/records');

app.use(cors());
app.use(bodyParser.json());
app.use(morgan());

app.use('/user', user);
app.use('/like', like);
app.use('/records', records);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
