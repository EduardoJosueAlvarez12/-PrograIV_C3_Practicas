const { Telegraf } = require("telegraf");
const bot = new Telegraf("5336684294:AAG9AoOSXQm-oUoRyxiCapui6pDEHKPlE0c");

bot.start((ctx) =>{
    ctx.reply(`Bienvenido a Programacion Computacional IV - Grupo A1 ${ctx.from.first_name}`);
});

//comando personalizado
bot.command(['saludar','saludo', 'comando'], (ctx) => {
    ctx.reply("comando personalizado");
});

bot.on('sticker', (ctx) => {
    ctx.reply("Has enviado un sticker :)");
});

//Iniciar el bot
bot.launch();
