
const { RichEmbed } = require("discord.js");

module.exports = message =>
{
    const embedHelp = new RichEmbed()
        .setTitle("Here is a list of commands!")
        .setColor("FF8CE8")
        .setDescription("!avatar\n" + "!ban\n" + "!help\n" + "!kick\n" + "!msg_purge\n" + "!ping\n" + "!role_check\n" + "!shutdown_code\n" + "!shutdown");
    message.channel.send(embedHelp);
};