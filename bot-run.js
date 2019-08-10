const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");

/*
bot.on("ready",() =>
{
  console.log("deathmachine.exe booting up, codename: " + bot.user.tag);
  bot.user.setPresence({ "anime": { type: "WATCHING" } });
});*/
// Code stopped working 

bot.on('ready',() =>
{
  console.log("deathmachine.exe booting up, codename: " + bot.user.tag);
  bot.user.setStatus('idle')
  // Types of Status: available, idle, dnd, invisible
  bot.user.setPresence({
    game: {
      name: 'Animu',
      type: "WATCHING",
      //url: "https://www.twitch.tv/" // For Streaming Only
    }
  });
});


//bot.user.setGame({status: "online", "Anime": { type: "WATCHING" } });
/*types include: watching, streaming, playing, listening*/

bot.on("message",message =>
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
//const { bot, RichEmbed } = require("discord.js");
// This is a backup of the line above
bot.on("message",message =>
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

bot.on("message",message =>
{
  if(message.content.startsWith(config.prefix + "shutdown"))
  {
    const embed = new RichEmbed()
      .setTitle("Command Received")
      .setColor("0xff0000")
      .setDescription("Shutting Down...");

    message.channel.send(embed).then(msg => bot.destroy());
  }
});

// THIS WILL MESSAGE A USER EVERY TIME A MESSAGED IS TYPED
/*
bot.on("message", receivedMessage => {
  if (receivedMessage.author == bot.user) {
    return;
  }

  receivedMessage.channel.send(
    "Message received, " + receivedMessage.toString()
  );
  receivedMessage.reply("OwO");
});
*/

bot.login(config.token);
