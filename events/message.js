const avatar = require("../commands/avatar.js");
const ban = require("../commands/ban.js");
const help = require("../commands/help.js");
const kick = require("../commands/kick.js");
const msg_purge = require("../commands/msg_purge.js");
const ping = require("../commands/ping.js");
const role_check = require("../commands/role_check.js");
const shutdown_code = require("../commands/shutdown_code.js");
const shutdown = require("../commands/shutdown.js");
const todo = require("../commands/todo.js");
const config = require("../config.json");


module.exports = (bot,message) =>
{
    if(message.content.startsWith(config.prefix + "avatar"))
    {
        return avatar(message);
    }
    else if(message.content.startsWith(config.prefix + "ban"))
    {
        return ban(message);
    }
    else if(message.content.startsWith(config.prefix + "help"))
    {
        return help(message);
    }
    else if(message.content.startsWith(config.prefix + "kick"))
    {
        return kick(message);
    }
    else if(message.content.startsWith(config.prefix + "msg_purge"))
    {
        return msg_purge(message);
    }
    else if(message.content.startsWith(config.prefix + "ping"))
    {
        return ping(message);
    }
    else if(message.content.startsWith(config.prefix + "role_check"))
    {
        return role_check(message);
    }
    else if(message.content.startsWith(config.prefix + "shutdown_code"))
    {
        return shutdown_code(message);
    }
    else if(message.content.startsWith(config.prefix + "shutdown"))
    {
        return shutdown(message);
    }
    else if(message.content.startsWith(config.prefix + "todo"))
    {
        return todo(message);
    }
};