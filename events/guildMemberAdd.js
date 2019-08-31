
const config = require("../config.json");

const { RichEmbed } = require("discord.js");

module.exports = (bot,member) =>
{
    const embedJoin = new RichEmbed()
        .setTitle("**User Joined**  :sparkling_heart:")
        // .setDescription("**" + member.user.username + "**")
        .setDescription(`<@${member.user.id}>`)
        .setColor("FF8CE8")
    member.guild.channels.get(config.join_and_leave_id).send(embedJoin)

    //console.log("User " + member.user.username + " has joined the server!")
    //console.log(member)

    // Adds a role when a user joins
    //var role = member.guild.roles.find("name", "User");

    // This will add the role
    //member.addRole(role)

    // This will message a certain channel you choose and say "User, has joined" in that channel
    //member.guild.channels.get(config.join_and_leave_id).send("**" + member.user.username + "**, has joined.")
    /*
    member.send(
        `Welcome on the server!`
    );*/
};
// This is supposed to message a member when they join the server but it does not work currently
// Also apparently if this file is empty eventHandler will throw an error
// So for now this will output "oof" to the console when a user join the server
// THE NAME OF THIS FILE ALSO MATTERS
// DON'T CHANGE IT FROM "guildMemberAdd" OR THIS WILL NOT WORK (IT WILL NOT OUTPUT "oof")
/* SNIP
bot.on('guildMemberAdd', member => {
    member.guild.channels.get('channelID').send("Welcome");
});
*/
