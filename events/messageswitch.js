// const avatar = require("../commands/avatar.js");
// const ban = require("../commands/ban.js");
// const help = require("../commands/help.js");
// const incorrect = require("../commands/incorrect.js");
// const kick = require("../commands/kick.js");
// const msg_purge = require("../commands/msg_purge.js");
// const ping = require("../commands/ping.js");
// const role_check = require("../commands/role_check.js");
// const shutdown_code = require("../commands/shutdown_code.js");
// const shutdown = require("../commands/shutdown.js");
// const todo = require("../commands/todo.js");
// const config = require("../config.json");
// const Discord = require("discord.js");
// const bot = new Discord.Client();



// //var exports = module.exports = {};

// module.exports = (message) =>
// {
//     let commands = message.content.substring(config.prefix.length).split("");

//     switch (commands[11]) 
//     {
//         case 0:
//             (message.content.startsWith(config.prefix + "avatar"))
//             {
//                 return avatar(message);
//             }
//         case 1:
//             (message.content.startsWith(config.prefix + "ban"))
//             {
//                 return ban(message);
//             }
//         case 2:
//             (message.content.startsWith(config.prefix + "help"))
//             {
//                 return help(message);
//             }
//         case 3:
//             (message.content.startsWith(config.prefix + "kick"))
//             {
//                 return kick(message);
//             }
//         case 4:
//             (message.content.startsWith(config.prefix + "msg_purge"))
//             {
//                 return msg_purge(message);
//             }
//         case 5:
//             (message.content.startsWith(config.prefix + "ping"))
//             {
//                 return ping(message);
//             }
//         case 6:
//             (message.content.startsWith(config.prefix + "role_check"))
//             {
//                 return role_check(message);
//             }
//         case 7:
//             (message.content.startsWith(config.prefix + "shutdown_code"))
//             {
//                 return shutdown_code(message);
//             }
//         case 8:
//             (message.content.startsWith(config.prefix + "shutdown"))
//             {
//                 return shutdown(message);
//             }
//         case 9:
//             (message.content.startsWith(config.prefix + "todo"))
//             {
//                 return todo(message);
//             }
//         case 10:
//             (message.content.bot)
//             {
//                 break;
//             }
//         case 11:
//             (message.content.startsWith(!"!avatar" || "!ban" || !"help" || "!kick" || "!msg_purge" || "!ping" || "!role_check" || "!shutdown_code" || "!shutdown" || "!todo"))
//             {
//                 return incorrect(message);
//             }
//         }
// };