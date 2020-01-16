const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json({now: new Date});
});

app.listen(80);
