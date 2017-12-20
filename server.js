var app     = require('express')();
var server  = require('http').Server(app);
var io      = require('socket.io')(server);
var static  = require('express-static');


server.listen(process.env.PORT || 8000);

// add 
app.use("/css", static(__dirname + '/css'));
app.use("/js", static(__dirname + '/js'));
app.use("/assets", static(__dirname + '/assets'));


// Index route
app.get('/', function (req, res) {
    // Basic user agent check - tests for mobile
    var ua = req.headers['user-agent'];
    if (/mobile/i.test(ua)) {
        // Send mobile to the navigation controls
        res.sendFile(__dirname + '/poissons.html');
    } else {
        // Send desktop to the main site 
        res.sendFile(__dirname + '/index.html');
    }
});

// Dynamic page route
app.get('/:id', function( req, res ) {
    res.sendFile(__dirname + '/'+ req.params.id + '.html');
});

// Socket IO
io.on('connection', function (socket) {
    // Create a room to broadcast to
    console.log('hello')
    socket.join('main');
    socket.on('statechange', function (data) {
        // Broadcast changes to all clients in room
        socket.to('main').emit('urlchange', { url : data.url });
    });
    socket.on('showPoisson', function() {
        socket.broadcast.emit('showPoisson');
    })
    socket.on('showPoissonDeux', function() {
        socket.broadcast.emit('showPoissonDeux');
    })
    socket.on('showPoissonTrois', function() {
        socket.broadcast.emit('showPoissonTrois');
    })
    socket.on('showPoissonQuatre', function() {
        socket.broadcast.emit('showPoissonQuatre');
    })
    socket.on('showPoissonCinq', function() {
        socket.broadcast.emit('showPoissonCinq');
    })
    socket.on('showPoissonSix', function() {
        socket.broadcast.emit('showPoissonSix');
    })
    socket.on('showPoissonSept', function() {
        socket.broadcast.emit('showPoissonSept');
    })
});

