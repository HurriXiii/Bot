const Discord = require("discord.js");
const bot = new Discord.Client();
const { RichEmbed } = require("discord.js");
const config = require("../config.json");

module.exports = message =>
{
    const embedReset = new RichEmbed()
        .setTitle("Resetting :(")
        .setColor("0xff0000")
    message.channel.send(embedReset).then(() => bot.destroy());
            //.then(() => bot.login(config.token));
}

bot.on('message', message => {
    switch (message.content.toUpperCase()) {
        case '!reset':
            resetBot(message.channel);
            break;
    }
});

exports.run = (bot, message args, ops) => {
    if (message.author.id !== resetID) return message.channel.send("Sorry, only the owner can use this command");

    message.channel.send("successfully reset");
}