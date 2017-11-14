var express = require('express');
var app = express();

console.log(`We're Ready`)
var currentPort = 8080;

app.use(express.static('./public'));

app.get('/', function (req, resp) {
    resp.sendFile('./public/html/index.html', {
        root: './'
    });
})

app.get('/script.js', function (req, res) {
    res.sendFile('script.js', {
        root: './'
    });

})


app.get('/aspen', function (req, res) {
    res.sendFile('/public/html/aspen.html', {
        root: './'
    });
});

app.get('/alaska', function (req, res) {
    res.sendFile('/public/html/alaska.html', {
        root: './'
    });
});



app.get('/greece', function (req, res) {
    res.sendFile('/public/html/greece.html', {
        root: './'
    });
});



app.get('/germany', function (req, res) {
    res.sendFile('/public/html/germany.html', {
        root: './'
    });
});

app.get('/japan', function (req, res) {
    res.sendFile('/public/html/japan.html', {
        root: './'
    });
});



app.use(function (req, res) {
    console.log('There was a problem')
    res.sendStatus(404);
});

var server = app.listen(currentPort, function () {
    var port = server.address().port;
    console.log('Express server listening on port %s.', port);
});
