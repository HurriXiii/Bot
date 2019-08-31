const { RichEmbed } = require("discord.js");

module.exports = message =>
{
    const embedBirthday = new RichEmbed()
        .setColor("FF8CE8")
        .setTitle("I hope you have the bestest of birthdays commander!" + "0w0 :tada: :birthday: :tada:");
    message.channel.send(embedBirthday);
};