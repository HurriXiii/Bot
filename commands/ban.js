const config = require("../config.json");

module.exports = message =>
{
    const member = message.mentions.members.first();

    if(!member)
    {
        return message.reply(
            `Who are you trying to ban? You must mention a user.`
        );
    }

    if(!member.banable)
    {
        return message.reply(`I can't ban this user. Sorry!`);
    }

    else if(!message.member.roles.find(role => role.name === config.admin_role))
    {
        return message.reply("You do not have the right role")
    }

    return member
        .ban()
        .then(() => message.reply(`${member.user.tag} was banned.`))
        .catch(() => message.reply(`Sorry, an error occured.`));
};