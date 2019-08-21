const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const { RichEmbed } = require("discord.js");
const fs = require("fs");
const ownerID = config.ownerID;

fs.readdir("./events/",(err,files) =>
{
  files.forEach(file =>
  {
    const eventHandler = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    bot.on(eventName,(...args) => eventHandler(bot,...args));
  });
});




bot.on("message",message =>
{
  let args = message.content.substring(config.prefix.length).split(" ");

  switch(args[0])
  {
    // case "shutdown":
    //   const embedShutdown = new RichEmbed()
    //     .setTitle("Shutting Down...")
    //     .setColor("0xff0000")
    //   //.setDescription("Shutting Down...");

    //   message.channel.send(embedShutdown).then(() => bot.destroy());
    //   break;
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
let resetID = {
  ownerID = ownerID
}

bot.login(config.token);
