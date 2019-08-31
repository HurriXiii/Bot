module.exports = bot =>
{
    console.log("deathmachine.exe booting up, codename: " + bot.user.tag);
    bot.user.setPresence({
        game: {
            name: 'Her Enemies Burn',
            type: "WATCHING",
            /*types include: watching, streaming, playing, listening*/
            //url: "https://www.twitch.tv/" // For Streaming Only
        }
    });
};