// Quando usar carregar no componente DidMount
// Quando terminar de usar utilizar ComponentDestroy

import openSocket from 'socket.io-client';
import CONFIG from '../config';

const socket = openSocket(CONFIG.socketServer);

function subscribe(topic, cb) {
    socket.on(topic, data => cb(null, data));
}

function emit(topic, data) {
    socket.emit(topic, data);
}

export default {subscribe, emit};
