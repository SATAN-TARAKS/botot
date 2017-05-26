exports.run = (bot, message, args) => {

    message.channel.sendMessage(random[Math.floor(Math.random() * random.length)]);

}