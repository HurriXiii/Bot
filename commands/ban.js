const config = require("../config.json");
const { RichEmbed } = require("discord.js");
// module.exports = message =>
// {
//     const member = message.mentions.members.first();

//     if(!member)
//     {
//         return message.reply(
//             `Who are you trying to ban? You must mention a user.`
//         );
//     }

//     if(!member.banable)
//     {
//         return message.reply(`I can't ban this user. Sorry!`);
//     }

//     else if(!message.member.roles.find(role => role.name === config.admin_role))
//     {
//         return message.reply("You do not have the right role")
//     }

//     return member
//         .ban()
//         .then(() => message.reply(`${member.user.tag} was banned.`))
//         .catch(() => message.reply(`Sorry, an error occured.`));
// };

// module.exports = {
//     name: 'ban',
//     description: 'Check out the todo list.',
//     guildOnly: true,
//     execute(message)
//     {
//         const member = message.mentions.members.first();

//         if(!member)
//         {
//             return message.reply(
//                 `Who are you trying to ban? You must mention a user.`
//             );
//         }

//         if(!member.banable)
//         {
//             return message.reply(`I can't ban this user. Sorry!`);
//         }

//         else if(!message.member.roles.find(role => role.name === config.admin_role))
//         {
//             return message.reply("You do not have the right role")
//         }

//         return member
//             .ban()
//             .then(() => message.reply(`${member.user.tag} was banned.`))
//             .catch(() => message.reply(`Sorry, an error occured.`));
//     },
// };

// module.exports = {
//     name: 'ban',
//     description: 'Check out the todo list.',
//     guildOnly: true,
//     execute(message)
//     {
//         const member = message.mentions.members.first();

//         if(!member)
//         {
//             return message.reply(
//                 `Who are you trying to ban? You must mention a user.`
//             );
//         }

//         if(!member.banable)
//         {
//             return message.reply(`I can't ban this user. Sorry!`);
//         }

//         else if(!message.member.roles.find(role => role.name === config.admin_role))
//         {
//             return message.reply("You do not have the right role")
//         }

//         return member
//             .ban()
//             .then(() => message.reply(`${member.user.tag} was banned.`))
//             .catch(() => message.reply(`Sorry, an error occured.`));
//     },
// };


module.exports = {
    name: 'ban',
    description: 'Check out the todo list.',
    guildOnly: true,
    execute(message,args)
    {
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send("Can't find user!");
        let bReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
        if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

        let banEmbed = new RichEmbed()
            .setDescription("~Ban~")
            .setColor("#bc0000")
            .addField("Banned User",`:hammer: ${bUser} with ID ${bUser.id}`)
            .addField("Banned By",`:pencil2: <@${message.author.id}> with ID ${message.author.id}`)
            .addField("Banned In",`:tv: ${message.channel}`)
            .addField("Time",`:clock4: ${message.createdAt}`)
            .addField("Reason",`:question: ${bReason}`);

        let incidentchannel = message.guild.channels.find(x => x.name === "incidents");
        if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

        message.guild.member(bUser).ban(bReason);
        incidentchannel.send(banEmbed);


        return;
    },
};


// if(cmd === `${prefix}ban`)
// {

//     let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
//     if(!bUser) return message.channel.send("Can't find user!");
//     let bReason = args.join(" ").slice(22);
//     if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
//     if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

//     let banEmbed = new Discord.RichEmbed()
//         .setDescription("~Ban~")
//         .setColor("#bc0000")
//         .addField("Banned User",`${bUser} with ID ${bUser.id}`)
//         .addField("Banned By",`<@${message.author.id}> with ID ${message.author.id}`)
//         .addField("Banned In",message.channel)
//         .addField("Time",message.createdAt)
//         .addField("Reason",bReason);

//     let incidentchannel = message.guild.channels.find(`name`,"incidents");
//     if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

//     message.guild.member(bUser).ban(bReason);
//     incidentchannel.send(banEmbed);


//     return;
// }