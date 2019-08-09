const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  /* List servers the bot is connected to*/
  console.log("She that shall not be named: " + client.user.tag);
  client.user.setActivity("Anime", { type: "WATCHING" });
  /*types include: watching, streaming, playing, listening*/

  //   client.guilds.forEach(guild => {
  //     console.log(" - " + guild.name);

  //     // List all channels
  //     guild.channels.forEach(channel => {
  //       console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`);
  //     });
  //   });
});

client.on("message", receivedMessage => {
  if (receivedMessage.author == client.user) {
    return;
  }
  /*
  receivedMessage.channel.send(
    "Message received, " + receivedMessage.toString()
  );*/
  receivedMessage.reply("OwO");
});

client.login(config.token);
