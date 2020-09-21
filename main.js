const express = require('express');
const path = require("path");
const port = 27036;
const bodyParser = require('body-parser');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(port)