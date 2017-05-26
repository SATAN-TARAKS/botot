  exports.run = (bot, message, args) => {
  
  let role = message.guild.roles.find("name", "muted");
  let member = message.guild.member(message.mentions.users.first());
  let t = 12 * 60 * 60 * 1000

    if (!role) return message.channel.sendMessage("Did not find a role named: 'muted'");
    if (message.mentions.users.size < 1) return message.reply("please mention a user")

    if (message.member.hasPermission('ADMINISTRATOR') || (message.author.id === "243503221350334475")) {


      member.removeRole(role).catch(console.error);
      message.delete()
      member.sendMessage("**YOU HAVE BEEN UNMUTED!** have fun : )").catch(console.error)
    }
    else {
      message.reply("**YOU ARE NOT QUALIFIED TO USE THIS COMMAND**");
    }

}