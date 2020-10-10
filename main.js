const express = require('express');
const path = require("path");
const bodyparser = require('body-parser');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');
app.set('port', process.env.PORT || 8888);
app.use(bodyparser.json());
app.get('', function (req, res) {
    res.sendFile(path.join(__dirname + '/aboutme.html'));
});
app.get('/skills.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/skills.html'));
});
app.get('/experience.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/experience.html'));
});
app.get('/aboutme.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/aboutme.html'));
});
app.listen(8080, '0.0.0.0')