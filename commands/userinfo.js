const { RichEmbed } = require("discord.js");

module.exports = {
    name: 'userinfo',
    description: 'Check info about your user.',
    guildOnly: true,
    cooldown: 20,
    execute(message)
    {
        let embedUser = new RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("This is the user's info!")
            .setColor("FF8CE8")
            .addField("Full Username",`${message.author.username}#${message.author.discriminator}`)
            .addField("ID",message.author.id)
            .addField("Created At",message.author.createdAt)
        return message.channel.send(embedUser);
    },
};