const socketIo = require('socket.io');

exports.setupWebsocket = function name(server) {
    const io = socketIo(server);
    io.on('connection', (socket) => {
        console.log(socket.id);
        console.log(socket.handshake.query);
    });
}
