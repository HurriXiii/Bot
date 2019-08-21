const { RichEmbed } = require("discord.js");

module.exports = message => {
    const embedShutDown = new RichEmbed()
      .setTitle("Shutting Down... :(")
      .setColor("0xff0000")
    message.channel.send(embedShutDown);
};