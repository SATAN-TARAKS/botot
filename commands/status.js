exports.run = (bot, message, args) => {

    const statusembed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField("servers", bot.guilds.size)
      .addField("uptime", bot.readyAt)
      .addField("users", bot.guilds.reduce((p, c) => p + c.memberCount, 0))
    message.channel.sendEmbed(statusembed)

}