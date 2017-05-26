exports.run = (bot, message, args) => {

let reason = args.slice(1).join(' ')
let requestreason = args.join(" ")
let logs = message.guild.channels.find('name', "logs")
let userwarned = message.mentions.users.first()

    if (!logs) return message.reply("no staff channel named: 'logs' \n please make channel named: 'logs' for this command to work ")
    if (message.member.hasPermission('ADMINISTRATOR') || (message.author.id === "243503221350334475")) {
      if (message.mentions.users.size < 1) return message.reply("please mention a user!");
      if (reason.length < 1) return message.reply("please define a reason!");
      const modembed = new Discord.RichEmbed()
        .setAuthor("Moderator", message.author.avatarURL)
        .setTimestamp()
        .addField("Action:", "Warning")
        .addField("User that got warned:", `${userwarned.username}#${userwarned.discriminator}`)
        .addField("Moderator", `${message.author.username}#${message.author.discriminator}`)
        .addField("reason:", reason)
      message.channel.sendMessage("Warning added!")
      return bot.channels.get(logs.id).sendEmbed(modembed)


    }
    else {
      message.reply("**YOU ARE NOT QUALIFIED FOR THE USE OF THIS COMMAND**")
    }

}