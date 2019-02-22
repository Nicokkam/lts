// Quando usar carregar no componente DidMount
// Quando terminar de usar utilizar ComponentDestroy

import openSocket from 'socket.io-client';

const socket = openSocket(process.env.REACT_APP_SOCKET_SERVER);

function subscribe(topic, cb) {
    socket.on(topic, data => cb(null, data));
}

function emit(topic, data) {
    socket.emit(topic, data);
}

export default {subscribe, emit};
