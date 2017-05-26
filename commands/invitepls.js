exports.run = (bot, message, args) => {

    message.channel.createInvite()
      .then(invite => message.reply("`" + invite.code + "`" + "here use this code : )"))
      .catch(error => console.error(error));

}