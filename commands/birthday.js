// const { RichEmbed } = require("discord.js");

// module.exports = message =>
// {
//     const embedBirthday = new RichEmbed()
//         .setColor("FF8CE8")
//         .setTitle("I hope you have the bestest of birthdays commander!" + + "0w0 :tada: :birthday: :tada:");
//     message.channel.send(embedBirthday);
// };

const { RichEmbed } = require("discord.js");

module.exports = {
    name: 'birthday',
    description: 'Send a happy birthday message to someone using the bot.',
    cooldown: 5,
    execute(message)
    {
        if(!message.mentions.users.size)
        {

            const embedBirthday = new RichEmbed()
                .setColor("FF8CE8")
                .setTitle("I hope you have the bestest of birthdays commander!" + + "0w0 :tada: :birthday: :tada:");
            message.channel.send(embedBirthday);
            return
        }


        const avatarList = message.mentions.users.map(user =>
        {
            const taggedUser = message.mentions.users.first();
            message.channel.send(`<@${taggedUser.id}>`);

            const embedBirthday = new RichEmbed()
                .setColor("FF8CE8")
                .setTitle("I hope you have the bestest of birthdays commander! 0w0 :tada: :birthday: :tada:")
            // .setDescription(`<@${taggedUser.id}>`);
            message.channel.send(embedBirthday);
            return
        });

    },
};