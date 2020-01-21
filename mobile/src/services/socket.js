import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.100', {
    autoConnect: false
});

function connect(latitude, longitude, skills) {
    socket.io.opts.query = { latitude, longitude, skills }
    socket.connect();
}

function disconect() {
    if (socket.connected) {
        socket.disconnect();
    }
}

export {
    connect,
    disconect
}
