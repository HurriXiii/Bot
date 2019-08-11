const config = require("../config.json");

module.exports = message =>
{
    const member = message.mentions.members.first();

    if(!member)
    {
        return message.reply(
            `Who are you trying to kick? You must mention a user.`
        );
    }

    if(!member.kickable)
    {
        return message.reply(`I can't kick this user. Sorry!`);
    }

    else if(!message.member.roles.find(role => role.name === config.admin_role))
    {
        return message.reply("You do not have the right role")
    }

    return member
        .kick()
        .then(() => message.reply(`${member.user.tag} was kicked.`))
        .catch(() => message.reply(`Sorry, an error occured.`));
};