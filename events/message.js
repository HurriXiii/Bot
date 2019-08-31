const ban = require("../commands/ban.js");
const incorrect = require("../commands/incorrect.js")
const kick = require("../commands/kick.js");
const config = require("../config.json");

module.exports = (bot,message) =>
{
    if(message.author.bot) return;
    // else if(message.content.startsWith(config.prefix + "ban"))
    // {
    //     return ban(message);
    // }
    // else if(message.content.startsWith(config.prefix + "kick"))
    // {
    //     return kick(message);
    // }
    // else if(message.content.startsWith(config.prefix))
    // {
    //     return incorrect(message);
    // }
};