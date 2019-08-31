
const { RichEmbed } = require("discord.js");

// module.exports = message =>
// {
//     const embedTodo = new RichEmbed()
//         .setTitle("Things that need to be done!")
//         .setColor("FF8CE8")
//         .setDescription("Create commands to Add/Delete Roles to the server!\n" + "Turn the commands in **messages.js** into a switch statement!\n" + "Finish these commands: msg_purge\n role_check\n shutdown_code\n" + "Create a way to identify the owner by his id for certain commands\n" + "Allow certain commands to be ran by multiple roles instead of just one\n" + "Need to create a profanity filter\n" + "Maybe make it so join/leave messages display a users avatar in the embed\n" + "Create coin flip command\n" + "Implement music capabilities\n" + "Create a way for users to post embed code?!\n" + "Random Quotes\n" + "Command Cool downs\n" + "Embed vote polls\n" + "image site api to get random pictures from a website\n" + "ability to mute users\n" + "Logs\n" + "Auto Role on join\n" + "Self assignable roles\n" + "@someone with a smug face\n" + "@someone with a Kiss,hug,wave,poke,slap\n" + "Play rock, paper, scissors with the bot\n" + "Voice mute/unmute command\n" + "8ball command\n" + "Random ASCII faces command\n" + "giveaway command\n" + "server info command\n" + "Member count command\n" + "display time for timezones command\n" + "Coin flip command\n" + "Change nickname command\n" + "Reaction roles... people can assign themselves a role by clicking a reaction\n" + "Slow mode command\n" + "Welcome messages\n" + "Game statics\n" + "Soft Ban\n" + "Warnings\n" + "Give everyone on the server a role\n" + "repeat a message every so often\n" + "invite Command\n" + "Auto moderation\n" + "Ban people via ID\n" + "More unique prefix\n" + "Make all functions toggleable\n" + "Embed Everything!\n");
//     message.channel.send(embedTodo);
// };


module.exports = {
    name: 'todo',
    description: 'Check out the todo list.',
    guildOnly: true,
    execute(message)
    {
        const embedTodo = new RichEmbed()
            .setTitle("Things that need to be done!")
            .setColor("FF8CE8")
            .setDescription("Create commands to Add/Delete Roles to the server!\n" + "Turn the commands in **messages.js** into a switch statement!\n" + "Finish these commands: msg_purge\n role_check\n shutdown_code\n" + "Create a way to identify the owner by his id for certain commands\n" + "Allow certain commands to be ran by multiple roles instead of just one\n" + "Need to create a profanity filter\n" + "Maybe make it so join/leave messages display a users avatar in the embed\n" + "Create coin flip command\n" + "Implement music capabilities\n" + "Create a way for users to post embed code?!\n" + "Random Quotes\n" + "Command Cool downs\n" + "Embed vote polls\n" + "image site api to get random pictures from a website\n" + "ability to mute users\n" + "Logs\n" + "Auto Role on join\n" + "Self assignable roles\n" + "@someone with a smug face\n" + "@someone with a Kiss,hug,wave,poke,slap\n" + "Play rock, paper, scissors with the bot\n" + "Voice mute/unmute command\n" + "8ball command\n" + "Random ASCII faces command\n" + "giveaway command\n" + "server info command\n" + "Member count command\n" + "display time for timezones command\n" + "Coin flip command\n" + "Change nickname command\n" + "Reaction roles... people can assign themselves a role by clicking a reaction\n" + "Slow mode command\n" + "Welcome messages\n" + "Game statics\n" + "Soft Ban\n" + "Warnings\n" + "Give everyone on the server a role\n" + "repeat a message every so often\n" + "invite Command\n" + "Auto moderation\n" + "Ban people via ID\n" + "More unique prefix\n" + "Make all functions toggleable\n" + "Embed Everything!\n");
        message.channel.send(embedTodo);
    },
};
