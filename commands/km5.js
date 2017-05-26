exports.run = (bot, message, args) => {

    message.reply(selfkills[Math.floor(Math.random() * selfkills.length)]);
    message.author.sendMessage(disclaimer)

}