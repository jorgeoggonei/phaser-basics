const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});


app.get('/settings', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/01-Settings/index.html'));
});

app.get('/assets', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/02-Assets/index.html'));
});1

app.get('/world', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/03-World/index.html'));
});

app.get('/platforms', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/04-Platforms/index.html'));
});

app.get('/player', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/05-Player/index.html'));
});

app.get('/physics', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/06-Physics/index.html'));
});

app.get('/controls', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/07-Controls/index.html'));
});

app.get('/stars', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/08-Stars/index.html'));
});

app.get('/score', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/09-Score/index.html'));
});

app.get('/bombs', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/10-Bombs/index.html'));
});

app.get('/enemies', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/11-Enemies/index.html'));
});

app.get('/reset', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/12-Reset/index.html'));
});

app.use(express.static(path.join(__dirname, '/public')));
//app.use(routes);

app.listen(port, () => console.log(`Phaser Basics listening on port ${port}!`));