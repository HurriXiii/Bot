
const config = require("../config.json");
//const config = require("../bot-run.js");
const { RichEmbed } = require("discord.js");

module.exports = (bot,member) =>
{
    const embedLeave = new RichEmbed()
        .setTitle("**User Left** :broken_heart:")
        // .setDescription("**" + member.user.username + "**")
        .setDescription(`<@${member.user.id}>`)
        .setColor("FF8CE8")
    member.guild.channels.get(config.join_and_leave_id).send(embedLeave)

    //receivedMessage.channel.send(receivedMessage.toString());


    //member.sendMessage(
    //    `Welcome on the server!`
    //);
};
// This is supposed to send a message when a member leaves the server
// Also apparently if this file is empty eventHandler will throw an error
// So for now this will output "oof" to the console when a user leaves the server
// THE NAME OF THIS FILE ALSO MATTERS
// DON'T CHANGE IT FROM "guildMemberAdd" OR THIS WILL NOT WORK (IT WILL NOT OUTPUT "oof")

/*
bot.on("guildMemberAdd",member =>
{
    const role = member.guild.roles.find("name","testRole");
    member.addRole(role);
})
*/
// This will give a role to user when they join the server

/*
// This is for when a user join the server
bot.on("guildMemberAdd", member => {
    console.log("User " + member.user.username + " has joined the server!")
    console.log(member)

    // Adds a role when a user joins
    var role = member.guild.roles.find("name", "User");

    // This will add the role
    member.addRole(role)

    // This will message a certain channel you choose and say "User, has joined" in that channel
    member.guild.channels.get(config.join_and_leave_id).send("**" + member.user.username + "**, has joined.")
})

// This is for when a user leaves the server

bot.on("guildMemberRemove", member => {
    member.guild.channels.get(config.join_and_leave_id).send("**" + member.user.username + "**, has left.")
})
*/