const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());

const logger = require('morgan');
app.use(logger('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const routes = require('./routes');
app.use('/api', routes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
