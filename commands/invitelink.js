exports.run = (bot, message, args) => {

    message.channel.createInvite()
      .then(invite => message.reply("<" + invite + ">" + "here use this "))
      .catch(error => console.error(error));

}