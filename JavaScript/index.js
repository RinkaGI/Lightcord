const Lightcord = require('./src/lightcord');

const bot = new Lightcord.Bot('MTAwNjE4NTcyNTQyMDY1NDU5Mg.GEkX77.cyUdL38URtcWdti43jSfA-IQVAJwzQjTdzYR4M', Lightcord.Intents.Minimum)

bot.on(Lightcord.Events.Ready, () => {
    console.log('Ready with event emitter.')
})

bot.run()