const Lightcord = require('./src/lightcord');

const bot = new Lightcord.Bot('TOKEN', Lightcord.Intents.Everything)

bot.on(Lightcord.Events.MessageCreate, (message) => {
    console.log(message)
})

bot.run()
