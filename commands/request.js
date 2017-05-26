exports.run = (bot, message, args) => {

let reason = args.slice(1).join(' ')
let requestreason = args.join(" ")
let logs = message.guild.channels.find('name', "logs")
let userwarned = message.mentions.users.first()

    if (!logs) return message.reply("no staff channel named: 'logs' \n please make channel named: 'logs' for this command to work ")
    if (requestreason.length < 1) return message.reply("please define a request to the staff")
    const requests = new Discord.RichEmbed()
      .setAuthor("requester", message.author.avatarURL)
      .addField("requester name:", `${message.author.username}#${message.author.discriminator}`)
      .setTimestamp()
      .addField("Action: ", "Request")
      .addField("Request:", requestreason)
    message.channel.sendMessage("request sent")
    return bot.channels.get(logs.id).sendEmbed(requests)

}