const config = require("../config.json");

// module.exports = message =>
// {
//     const member = message.mentions.members.first();

//     if(!member)
//     {
//         return message.reply(
//             `Who are you trying to kick? You must mention a user.`
//         );
//     }

//     if(!member.kickable)
//     {
//         return message.reply(`I can't kick this user. Sorry!`);
//     }

//     else if(!message.member.roles.find(role => role.name === config.admin_role))
//     {
//         return message.reply("You do not have the right role")
//     }

//     return member
//         .kick()
//         .then(() => message.reply(`${member.user.tag} was kicked.`))
//         .catch(() => message.reply(`Sorry, an error occured.`));
// };


// module.exports = {
//     name: 'kick',
//     description: 'Check out the todo list.',
//     guildOnly: true,
//     execute(message)
//     {
//         const member = message.mentions.members.first();

//         if(!member)
//         {
//             return message.reply(
//                 `Who are you trying to kick? You must mention a user.`
//             );
//         }

//         if(!member.kickable)
//         {
//             return message.reply(`I can't kick this user. Sorry!`);
//         }

//         else if(!message.member.roles.find(role => role.name === config.admin_role))
//         {
//             return message.reply("You do not have the right role")
//         }

//         return member
//             .kick()
//             .then(() => message.reply(`${member.user.tag} was kicked.`))
//             .catch(() => message.reply(`Sorry, an error occured.`));
//     },
// };

const { RichEmbed } = require("discord.js");

module.exports = {
    name: 'kick',
    description: 'Check out the todo list.',
    guildOnly: true,
    execute(message,args)
    {
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send("Can't find user!");
        let bReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
        if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

        let kickEmbed = new RichEmbed()
            .setTitle(":exclamation: Kick :exclamation:")
            .setColor("FF1B1B")
            .addField("Kicked User",`:electric_plug: ${bUser} with ID ${bUser.id}`)
            .addField("Kicked By",`:pencil2: <@${message.author.id}> with ID ${message.author.id}`)
            .addField("Kicked In",`:tv: ${message.channel} with ID ${message.channel.id}`)
            .addField("Time",`:clock4: ${message.createdAt}`)
            .addField("Reason",`:question: ${bReason}`);

        let incidentchannel = message.guild.channels.find(x => x.name === "incidents");
        if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

        message.guild.member(bUser).kick();
        incidentchannel.send(kickEmbed);


        return;
    },
};