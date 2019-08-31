// const { RichEmbed } = require("discord.js");

// module.exports = message =>
// {
//     const embedAvatar = new RichEmbed()
//         .setTitle("Here is your avatar!")
//         .setURL(message.author.avatarURL)
//         .setColor("FF8CE8")
//         .setImage(message.author.avatarURL);
//     message.channel.send(embedAvatar);
// };
// // Test

const { RichEmbed } = require("discord.js");

module.exports = {
    name: 'avatar',
    description: 'Display a picture of yours or a requested users profile picture.',
    aliases: ['icon','pfp'],
    execute(message)
    {
        if(!message.mentions.users.size)
        {

            const embedAvatar = new RichEmbed()
                .setTitle("Here is your avatar!")
                .setURL(message.author.avatarURL)
                .setColor("FF8CE8")
                .setImage(message.author.avatarURL);
            message.channel.send(embedAvatar);
            return
        }


        const avatarList = message.mentions.users.map(user =>
        {

            const taggedUser = message.mentions.users.first();
            // message.channel.send(`<@${taggedUser.id}>`);

            const embedAvatar = new RichEmbed()
                .setTitle("Here is your avatar!")
                .setURL(user.avatarURL)
                .setColor("FF8CE8")
                .setImage(user.avatarURL)
                .setDescription(`<@${taggedUser.id}>`);
            message.channel.send(embedAvatar);
            return
        });
    },
};