const WebSocketManager = require('../network/websocketManager');
const { EventEmitter } = require('node:events');

module.exports = class Bot extends EventEmitter {
    constructor(token, intents) {
        super();
        
        this.token = token;
        this.intents = intents;

        this.ws = new WebSocketManager(this.token, this.intents);
    }

    run() {
        this.ws.connect()
    }
}