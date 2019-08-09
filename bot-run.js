const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("deathmachine.exe booting up, codename: " + client.user.tag);
  client.user.setPresence({'animu': {type: "WATCHING"} })
});

//client.user.setGame({status: "online", "Anime": { type: "WATCHING" } });
  /*types include: watching, streaming, playing, listening*/
 
/*Example of using a keyword to return bot reply*/
client.on('message', message => {
  if (message.content == "ping") {
    message.channel.send('pong');
  }
});

client.on('message', message => {
  if (message.content == "avatar check") {
    message.reply(message.author.avatarURL);
  }
});
 
  //   client.guilds.forEach(guild => {
  //     console.log(" - " + guild.name);

  //     // List all channels
  //     guild.channels.forEach(channel => {
  //       console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`);
  //     });
  //   });

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
