const { RichEmbed } = require("discord.js");

module.exports = message =>
{
    const embedDummy = new RichEmbed()
    .setTitle("Incorrect Command Baka! UwU")
    .setColor("FF8CE8")
message.channel.send(embedDummy);
};
