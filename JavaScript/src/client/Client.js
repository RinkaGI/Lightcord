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

        this.ws.ws.on('message', (data) => {
            switch(this.ws.event) {
                // case 'READY':
                //     this.emit('READY')
                // case 'GUILD_CREATE':
                //     this.emit('GUILD_CREATE')
                default:
                    this.emit(this.ws.event)
            }
        })
    }
}