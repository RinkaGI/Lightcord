const Lightcord = require('./src/lightcord');

const bot = new Lightcord.Bot('TOKEN', Lightcord.Intents.Minimum)

bot.on('READY', () => {
    console.log('Ready with event emitter.')
})

bot.run()