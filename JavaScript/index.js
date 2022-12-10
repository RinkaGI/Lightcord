const Lightcord = require('./src/lightcord');

<<<<<<< HEAD
const bot = new Lightcord.Bot('TOKEN', Lightcord.Intents.Everything)
=======
const bot = new Lightcord.Bot('Token', Lightcord.Intents.Minimum)
>>>>>>> 46a73612ea3ba090317dc9edaa7632d1dbe9aa27

bot.on(Lightcord.Events.MessageCreate, (message) => {
    console.log(message)
})

bot.run()
