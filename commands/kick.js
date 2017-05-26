exports.run = (bot, message, args) => {

    if (message.member.hasPermission('ADMINISTRATOR') || (message.author.id === "243503221350334475")) {
      if (message.mentions.users.size === 0) {
        return message.reply("Please mention a user to kick").catch(console.error);
      }
      let kickMember = message.guild.member(message.mentions.users.first());
      if (!kickMember) {
        return message.reply("That user does not seem valid");
      }
      if (!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
        return message.reply("I don't have the permissions (KICK_MEMBER) to do this.").catch(console.error);
      }

      kickMember.kick().then(member => {
        message.reply(`${member.user.username} was succesfully kicked.`).catch(console.error);
      }).catch(console.error)
    }
    else {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
    }

}