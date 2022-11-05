const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');


app.use(cors());

app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});