const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const { RichEmbed } = require("discord.js");
const fs = require("fs");

fs.readdir("./events/",(err,files) =>
{
  files.forEach(file =>
  {
    const eventHandler = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    bot.on(eventName,(...args) => eventHandler(bot,...args));
  });
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}serverinfo`){
    let sicon = message.guild.displayAvatarURL;
    let embedServer = new Discord.RichEmbed()
      .setTitle("-Server Information-")
      .setColor("FF8CE8")
      .setThumbnail(sicon)
      .addField("Server Name", message.guild.name)
      .addField("Created On", message.guild.createdAt)
      .addField("You Joined", message.member.joinedAt)
      .addField("Total Memebers", message.guild.memberCount)
    return message.channel.send(embedServer);
  }

  if (cmd === `${prefix}userinfo`){

    let embedUser = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setDescription("This is the user's info!")
      .setColor("FF8CE8")
      .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
      .addField("ID", message.author.id)
      .addField("Created At", message.author.createdAt)
    return message.channel.send(embedUser);
  }

  if (cmd === `${prefix}botinfo`){

      let bicon = bot.user.displayAvatarURL;
      let embedBotInfo = new Discord.RichEmbed()
          .setTitle("-Bot Information-")
          .setColor("FF8CE8")
          .setThumbnail(bicon)
          .addField("Bot Name", bot.user.username)
          .addField("Created On", bot.user.createdAt);
      return message.channel.send(embedBotInfo);
    }
  });

bot.on("message",message =>
{
  let args = message.content.substring(config.prefix.length).split(" ");

  switch(args[0])
  {
    case "shutdown":
      const embedShutdown = new RichEmbed()
        .setTitle("Shutting Down...")
        .setColor("0xff0000")
      //.setDescription("Shutting Down...");

      message.channel.send(embedShutdown).then(() => bot.destroy());
      break;
    /*
  case "info":
    if(args[1] === "version")
    {
      message.channel.send("version" + version);
    } else
    {
      message.channel.send("Invalid Args")
    }
    break;
    */
    /// warning this shutdownsecret only works if you have the config setup properly
    case "shutdownsecret":
      if(args[1] === config.shutdown_code)
      {
        const embedShutdownSecret = new RichEmbed()
          .setTitle("Shutting Down...")
          .setColor("0xff0000")
        //.setDescription("Shutting Down...");
        message.channel.send(embedShutdownSecret).then(() => bot.destroy());
      } else
      {
        message.channel.send("Invalid Args")
      }
      break;

    case "rolecheck":
      if(!message.member.roles.find(r => r.name === "Coderz")) return message.channel.send("You do not have the right role")
      message.reply("You are the correct role")
      break;
    /* CANT FIGURE OUT IDS OMG
        case "turnoff":
          if(message.author.id != "234234234" || "234234234234") return message.channel.send("You're the bot owner!")
          message.reply("You an owner")
          break;
    */
    /*
              if(args[1] === config.shutdown_code)
              {
                const embedShutdownSecret = new RichEmbed()
                  .setTitle("Command Received")
                  .setColor("0xff0000")
                  .setDescription("Shutting Down...");
                message.channel.send(embedShutdownSecret).then(() => bot.destroy());
              } else
              {
                message.channel.send("Invalid Args")
              }
              break;
    */
    case "clear":
      if(!args[1]) return message.reply("Please define the amount of messages you want to clear")
      message.channel.bulkDelete(args[1]);
      break;
  }
})

/*
// THIS WILL MESSAGE A USER EVERY TIME A MESSAGED IS TYPED
bot.on("message", receivedMessage => {
if (receivedMessage.author == bot.user) {
 return;
}

receivedMessage.channel.send(
 "Message received, " + receivedMessage.toString()
);
receivedMessage.reply("OwO");
});

bot.on("message",receivedMessage =>
{
  if(receivedMessage.author == bot.user)
  {
    return;
  }

  //receivedMessage.channel.send(receivedMessage.toString());
  receivedMessage.reply("OwO");
});
*/

bot.login(config.token);
