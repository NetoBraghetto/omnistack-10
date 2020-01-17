const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// mongoose.connect('mongodb://root:secret@database:27017/omnistack?retryWrites=true&w=majority', {
mongoose.connect('mongodb://database:27017/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch(error => console.error(error));

setTimeout(() => {
    console.log('=============================');
    console.log(mongoose.connection.readyState);
    console.log('=============================');
}, 5000);

app.use(express.json());
app.use(routes);


app.listen(80);
