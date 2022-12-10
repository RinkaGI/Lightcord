const Lightcord = require('./src/lightcord');

const bot = new Lightcord.Bot('Token', Lightcord.Intents.Minimum)

bot.on(Lightcord.Events.Ready, () => {
    console.log('Ready with event emitter.')
})

bot.run()
