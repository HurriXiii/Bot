const config = require("../config.json");

module.exports = message =>
{
    console.log("msg_purge is not setup yet");
};


module.exports = {
    name: 'clear',
    description: 'Clear a requested amount of images.',
    cooldown: 5,
    execute(message,args)
    {
        if(!args[0]) return message.reply("Please define the amount of messages you want to clear")
        message.channel.bulkDelete(args[0]);
    },
};
