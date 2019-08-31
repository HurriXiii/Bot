const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const { RichEmbed } = require("discord.js");
const fs = require("fs");


bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles)
{
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name,command);
}

const cooldowns = new Discord.Collection();

bot.on('message',message =>
{
  if(!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = bot.commands.get(commandName)
    || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if(!command) return;

  if(command.guildOnly && message.channel.type !== 'text')
  {
    return message.reply('I can\'t execute that command inside DMs!');
  }

  if(command.args && !args.length)
  {
    let reply = `You didn't provide any arguments, ${message.author}!`;

    if(command.usage)
    {
      reply += `\nThe proper usage would be: \`${config.prefix}${command.name} ${command.usage}\``;
    }

    return message.channel.send(reply);
  }

  if(!cooldowns.has(command.name))
  {
    cooldowns.set(command.name,new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;

  if(timestamps.has(message.author.id))
  {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if(now < expirationTime)
    {
      const timeLeft = (expirationTime - now) / 1000;

      const embedAvatar = new RichEmbed()
        .setTitle(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`)
        .setColor("FF8CE8")
      // .setDescription(`<@${taggedUser.id}>`);
      message.channel.send(embedAvatar).then(m => m.delete(5000));
      //  message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
      return
    }
  }

  timestamps.set(message.author.id,now);
  setTimeout(() => timestamps.delete(message.author.id),cooldownAmount);

  try
  {
    command.execute(message,args);
  } catch(error)
  {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});


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
    case "shutdown":
      const embedShutdown = new RichEmbed()
        .setTitle("Shutting Down...")
        .setColor("0xff0000")
      //.setDescription("Shutting Down...");

      message.channel.send(embedShutdown).then(() => bot.destroy());
      break;
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

  }
});

// ALLL OF THIS IS FOR IF YOU HAVE CANVAS INSTALLED.... NO USE FOR THIS ATM -----------------------------------------------
// const Canvas = require('canvas');

// const applyText = (canvas,text) =>
// {
//   const ctx = canvas.getContext('2d');
//   let fontSize = 70;

//   do
//   {
//     ctx.font = `${fontSize -= 10}px sans-serif`;
//   } while(ctx.measureText(text).width > canvas.width - 300);

//   return ctx.font;
// };

// bot.on('guildMemberAdd',async member =>
// {
//   const channel = member.guild.channels.find(ch => ch.name === 'member-log');
//   if(!channel) return;

//   const canvas = Canvas.createCanvas(700,250);
//   const ctx = canvas.getContext('2d');

//   const background = await Canvas.loadImage('./wallpaper.jpg');
//   ctx.drawImage(background,0,0,canvas.width,canvas.height);

//   ctx.strokeStyle = '#74037b';
//   ctx.strokeRect(0,0,canvas.width,canvas.height);

//   ctx.font = '28px sans-serif';
//   ctx.fillStyle = '#ffffff';
//   ctx.fillText('Welcome to the server,',canvas.width / 2.5,canvas.height / 3.5);

//   ctx.font = applyText(canvas,`${member.displayName}!`);
//   ctx.fillStyle = '#ffffff';
//   ctx.fillText(`${member.displayName}!`,canvas.width / 2.5,canvas.height / 1.8);

//   ctx.beginPath();
//   ctx.arc(125,125,100,0,Math.PI * 2,true);
//   ctx.closePath();
//   ctx.clip();

//   const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
//   ctx.drawImage(avatar,25,25,200,200);

//   const attachment = new Discord.Attachment(canvas.toBuffer(),'welcome-image.png');

//   channel.send(`Welcome to the server, ${member}!`,attachment);
// });

// bot.on('message',async message =>
// {
//   if(message.content === '!join')
//   {
//     bot.emit('guildMemberAdd',message.member || await message.guild.fetchMember(message.author));
//   }
// });
// ALLL OF THIS IS FOR IF YOU HAVE CANVAS INSTALLED.... NO USE FOR THIS ATM -----------------------------------------------

// A note for deleting messages after a certain amount of time
// message.channel.send(embed).then(m => m.delete(5000));

// THIS IS CHECKING IF YOU REACTED WITH EITHER OF THOSE THUMBS
// BUT IT ALSO JUST LOGS THE FIRST AND LAST REACTION AND PUT THE THUMB????

// bot.on('message',message =>
// {
//   if(message.content === '!react-await')
//   {
//     message.react('👍').then(() => message.react('👎'));

//     const filter = (reaction,user) =>
//     {
//       return ['👍','👎'].includes(reaction.emoji.name) && user.id === message.author.id;
//     };

//     message.awaitReactions(filter,{ max: 1,time: 60000,errors: ['time'] })
//       .then(collected =>
//       {
//         const reaction = collected.first();

//         if(reaction.emoji.name === '👍')
//         {
//           message.reply('you reacted with a thumbs up.');
//         } else
//         {
//           message.reply('you reacted with a thumbs down.');
//         }
//       })
//       .catch(collected =>
//       {
//         console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
//         message.reply('you didn\'t react with neither a thumbs up, nor a thumbs down.');
//       });
//   }
// });

// THIS CHECK FOR A USERS REACTION

// const events = {
//   MESSAGE_REACTION_ADD: 'messageReactionAdd',
//   MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
// };

// bot.on('raw',async event =>
// {
//   if(!events.hasOwnProperty(event.t)) return;

//   const { d: data } = event;
//   const user = bot.users.get(data.user_id);
//   const channel = bot.channels.get(data.channel_id) || await user.createDM();

//   if(channel.messages.has(data.message_id)) return;

//   const message = await channel.fetchMessage(data.message_id);
//   const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
//   let reaction = message.reactions.get(emojiKey);

//   if(!reaction)
//   {
//     const emoji = new Discord.Emoji(bot.guilds.get(data.guild_id),data.emoji);
//     reaction = new Discord.MessageReaction(message,emoji,1,data.user_id === bot.user.id);
//   }

//   bot.emit(events[event.t],reaction,user);
// });

// bot.on('messageReactionAdd',(reaction,user) =>
// {
//   console.log(`${user.username} reacted with "${reaction.emoji.name}".`);

//   // if(!message.member.roles.find(r => r.name === "Coderz")) return message.channel.send("You do not have the right role")
//   // message.reply("You are the correct role")
// });

// bot.on('messageReactionRemove',(reaction,user) =>
// {
//   console.log(`${user.username} removed their "${reaction.emoji.name}" reaction.`);
// });

bot.login(config.token);
