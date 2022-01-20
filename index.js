const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors());

app.get('/', (req, res) => res.status(200).send(`uptime ${process.uptime()}`));

app.get('/users', (req, res) => {
    return res.sendFile(__dirname + '/users.json');
});

app.get('/users_simplified', (req, res) => {
    return res.sendFile(__dirname + '/users_simplified.json');
});

app.all('*', (req, res) => {
    res.sendStatus(404);
});

app.listen(1337, () => {
    console.log('server is running on port 1337');
});
