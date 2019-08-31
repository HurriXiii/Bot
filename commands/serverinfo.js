
//   if(cmd === `${prefix}serverinfo`)
//   {
//     let sicon = message.guild.displayAvatarURL;
//     let embedServer = new Discord.RichEmbed()
//       .setTitle("-Server Information-")
//       .setColor("FF8CE8")
//       .setThumbnail(sicon)
//       .addField("Server Name",message.guild.name)
//       .addField("Created On",message.guild.createdAt)
//       .addField("You Joined",message.member.joinedAt)
//       .addField("Total Memebers",message.guild.memberCount)
//     return message.channel.send(embedServer);
//   }

const { RichEmbed } = require("discord.js");

module.exports = {
    name: 'serverinfo',
    description: 'Display information about the server.',
    guildOnly: true,
    cooldown: 20,
    execute(message)
    {
        let sicon = message.guild.displayAvatarURL;
        let embedServer = new RichEmbed()
            .setTitle("-Server Information-")
            .setColor("FF8CE8")
            .setThumbnail(sicon)
            .addField("Server Name",message.guild.name)
            .addField("Created On",message.guild.createdAt)
            .addField("You Joined",message.member.joinedAt)
            .addField("Total Memebers",message.guild.memberCount)
        return message.channel.send(embedServer);
    },
};