const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  // List servers the bot is connected to
  console.log("Connected as " + client.user.tag);
//   client.guilds.forEach(guild => {
//     console.log(" - " + guild.name);

//     // List all channels
//     guild.channels.forEach(channel => {
//       console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`);
//     });
//   });
});

client.login("NjA5MTUyMDg3Njk1Mjk0NTI3.XUzDAg.UCtOz5olgtoS9qvXE6kuJjQP_4M"); /* Replace XXXXX with your bot token*/
