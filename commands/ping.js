const { RichEmbed } = require("discord.js");

module.exports = message =>
{
    const embedPing = new RichEmbed()
        .setColor("FF8CE8")
        .setTitle("Pong!");
    message.channel.send(embedPing);
};