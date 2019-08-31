const { RichEmbed } = require("discord.js");

module.exports = {
    name: 'ping',
    description: 'Make the bot respond with "Pong!"',
    guildOnly: true,
    execute(message)
    {
        const embedPing = new RichEmbed()
            .setColor("FF8CE8")
            .setTitle("Pong!");
        message.channel.send(embedPing);
    },
};