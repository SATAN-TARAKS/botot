exports.run = (bot, message, args) => {

    let guild = message.guild
    const serverEmbed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .setThumbnail(guild.iconURL)
      .setTitle(guild.name)
      .addField("Server Members:", guild.memberCount)
      .addField("Server Owner:", guild.owner)
      .addField("Server Region:", guild.region)

    message.channel.sendEmbed(serverEmbed)

}