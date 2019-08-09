const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

/*
client.on("ready",() =>
{
  console.log("deathmachine.exe booting up, codename: " + client.user.tag);
  client.user.setPresence({ "anime": { type: "WATCHING" } });
});*/
// Code stopped working 

client.on('ready',() =>
{
  console.log("deathmachine.exe booting up, codename: " + client.user.tag);
  client.user.setStatus('idle')
  // Types of Status: available, idle, dnd, invisible
  client.user.setPresence({
    game: {
      name: 'Animu',
      type: "WATCHING",
      //url: "https://www.twitch.tv/" // For Streaming Only
    }
  });
});


//client.user.setGame({status: "online", "Anime": { type: "WATCHING" } });
/*types include: watching, streaming, playing, listening*/

client.on("message",message =>
{
  if(!message.content.startsWith(config.prefix) || message.author.bot) return;

  if(message.content.startsWith(config.prefix + "ping"))
  {
    const embed = new RichEmbed().setColor("FF8CE8").setTitle("Pong!");

    message.channel.send(embed);
    //message.channel.send("pong!");
  } else if(message.content.startsWith(config.prefix + "avatar"))
  {
    const embed = new RichEmbed()
      .setTitle("Here is your avatar!")
      .setURL(message.author.avatarURL)
      .setColor("FF8CE8")
      .setImage(message.author.avatarURL);
    message.channel.send(embed);
    //message.reply(message.author.avatarURL);
  } else if(message.content.startsWith(config.prefix + "help"))
  {
    const embed = new RichEmbed()
      .setTitle("Here is a list of commands!")
      .setColor("FF8CE8")
      .setDescription("!ping\n" + "!avatar\n" + "!embed\n" + "!shutdown");

    message.channel.send(embed);
    //message.reply(message.author.avatarURL);
  }
});

/// THIS IS TO SHUT DOWN THE BOT

const { RichEmbed } = require("discord.js");
//const { Client, RichEmbed } = require("discord.js");
// This is a backup of the line above
client.on("message",message =>
{
  if(message.content.startsWith(config.prefix + "embed"))
  {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      .setTitle("A slick little embed")
      .setColor("FF8CE8")
      .setDescription("Hello, this is a slick embed!");

    message.channel.send(embed);
  }
});

client.on("message",message =>
{
  if(message.content.startsWith(config.prefix + "shutdown"))
  {
    const embed = new RichEmbed()
      .setTitle("Command Received")
      .setColor("0xff0000")
      .setDescription("Shutting Down...");

    message.channel.send(embed).then(msg => client.destroy());
  }
});

// THIS WILL MESSAGE A USER EVERY TIME A MESSAGED IS TYPED
/*
client.on("message", receivedMessage => {
  if (receivedMessage.author == client.user) {
    return;
  }

  receivedMessage.channel.send(
    "Message received, " + receivedMessage.toString()
  );
  receivedMessage.reply("OwO");
});
*/

client.login(config.token);
