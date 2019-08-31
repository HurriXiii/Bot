const config = require("../config.json");

// module.exports = message =>
// {
//     console.log("role_check is not setup yet");
// };


module.exports = {
    name: 'rolecheck',
    description: 'Check if you have the correct role for this command or not.',
    guildOnly: true,
    execute(message)
    {
        if(!message.member.roles.find(r => r.name === "Coderz")) return message.channel.send("You do not have the right role")
        message.reply("You are the correct role")
    },
};



