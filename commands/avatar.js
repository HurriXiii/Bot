const { RichEmbed } = require("discord.js");

module.exports = message =>
{
    const embedAvatar = new RichEmbed()
        .setTitle("Here is your avatar!")
        .setURL(message.author.avatarURL)
        .setColor("FF8CE8")
        .setImage(message.author.avatarURL);
    message.channel.send(embedAvatar);
};
// Test