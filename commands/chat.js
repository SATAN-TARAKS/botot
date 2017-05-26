exports.run = (bot, message, args) => {

  let guild = message.guild
  if (guild.name === "Ecchi-splosion") return;

    message.channel.sendMessage(message.guild.members.random().toString() + ", hi haven’t talked in a while  \n  hows life?")

}