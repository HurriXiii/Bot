
const { RichEmbed } = require("discord.js");
const config = require("../config.json");
// module.exports = message =>
// {
//     const embedHelp = new RichEmbed()
//         .setTitle("Here is a list of commands!")
//         .setColor("FF8CE8")
//         .setDescription("!avatar\n" + "!ban\n" + "!help\n" + "!kick\n" + "!msg_purge\n" + "!ping\n" + "!role_check\n" + "!shutdown_code\n" + "!shutdown");
//     message.channel.send(embedHelp);
// };


module.exports = {
    name: 'help',
    description: 'List all of my commands or info about a specific command.',
    aliases: ['commands'],
    usage: '[command name]',
    cooldown: 5,
    execute(message,args)
    {
        const data = [];
        const { commands } = message.client;

        if(!args.length)
        {
            data.push('Here\'s a list of all my commands:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nYou can send \`${config.prefix}help [command name]\` to get info on a specific command!`);

            return message.author.send(data,{ split: true })
                .then(() =>
                {
                    if(message.channel.type === 'dm') return;

                    const embedDummy = new RichEmbed()
                        .setTitle("Ive sent you my command list")
                        .setColor("FF8CE8")
                    message.channel.send(embedDummy).then(m => m.delete(8000));
                    // message.reply('I\'ve sent you a DM with all my commands!');
                })
                .catch(error =>
                {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`,error);
                    message.reply('it seems like I can\'t DM you!');
                });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if(!command)
        {
            const embedDummy = new RichEmbed()
                .setTitle("Incorrect Command Baka! UwU")
                .setColor("FF8CE8")
            message.channel.send(embedDummy).then(m => m.delete(8000));
            return
            // message.reply('that\'s not a valid command!');
        }

        data.push(`**Name:** ${command.name}`);

        if(command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if(command.description) data.push(`**Description:** ${command.description}`);
        if(command.usage) data.push(`**Usage:** ${config.prefix}${command.name} ${command.usage}`);

        data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

        message.channel.send(data,{ split: true });
    },
};
