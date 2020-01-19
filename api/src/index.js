const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://database:27017/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}).catch(error => console.error(error));

app.use(cors());
// app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(routes);


app.listen(80);
