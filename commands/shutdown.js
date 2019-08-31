// const config = require("../config.json");
// const  = require("../bot-run.js");
const { RichEmbed } = require("discord.js");

const config = require("../config.json");

module.exports = message =>
{
    console.log("shutdown is not setup yet");
};

// module.exports = {
//     name: 'shutdown',
//     description: 'Shutdown the bot',
//     cooldown: 5,
//     execute(message)
//     {
//         const embedShutdown = new RichEmbed()
//             .setTitle("Shutting Down...")
//             .setColor("0xff0000")
//         //.setDescription("Shutting Down...");

//         message.channel.send(embedShutdown)
//             .then(() => bot.destroy())
//             .catch(error =>
//             {
//                 console.error(`Could not send help DM to ${message.author.tag}.\n`,error);
//                 message.reply('Failed');
//             });
//     },
// };