const { Telegraf } = require('telegraf')


process.env.BOT_TOKEN = ''  // token bot
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.telegram.sendMessage(-596635695, 'Hi ada error di system')