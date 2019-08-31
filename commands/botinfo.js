// THIS IS HECKIN BROKEN BOY
// Gotta figure out how to target the bot

// const { RichEmbed } = require("discord.js");
// const bot = require("../bot-run.js");

// module.exports = {
//     name: 'botinfo',
//     description: 'Tag a member and kick them (but not really).',
//     guildOnly: true,
//     cooldown: 20,
//     execute(message)
//     {
//         let bicon = bot.user.displayAvatarURL;
//         let embedBotInfo = new RichEmbed()
//             .setTitle("-Bot Information-")
//             .setColor("FF8CE8")
//             .setThumbnail()
//             .addField("Bot Name",`${message.author.username}#${message.author.discriminator}`)
//             .addField("ID",message.author.id)
//             .addField("Created On",message.author.createdAt)
//         return message.channel.send(embedBotInfo);



//         const avatarList = message.mentions.users.map(user =>
//         {

//             const taggedUser = message.mentions.users.first();
//             // message.channel.send(`<@${taggedUser.id}>`);

//             const embedAvatar = new RichEmbed()
//                 .setTitle("Here is your avatar!")
//                 .setURL(user.avatarURL)
//                 .setColor("FF8CE8")
//                 .setImage(user.avatarURL)
//                 .setDescription(`<@${taggedUser.id}>`);
//             message.channel.send(embedAvatar);
//             return
//         });
//     },
// };


const bot = require("../bot-run.js");
const { RichEmbed } = require("discord.js");

module.exports = {
    name: 'botinfo',
    description: 'Check out the todo list.',
    guildOnly: true,
    execute(message)
    {
        // let bicon = bot.user.displayAvatarURL;
        let botembed = new RichEmbed()
            .setDescription("Bot Information")
            .setColor("#15f153")
            // .setThumbnail(bicon)
            .addField("Bot Name",bot.username)
            .addField("Created On",bot.createdAt);

        message.channel.send(botembed);
    },
};
